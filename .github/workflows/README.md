# GitHub Workflows

This directory contains GitHub Actions workflows that automate various tasks in the repository. Below is an overview of each workflow:

## Toolchain

Every workflow that needs Node.js reads the version from `.nvmrc` via `node-version-file`, and every workflow that needs pnpm reads the version from the `packageManager` field in the root `package.json`. Neither is pinned inside a workflow, so local development and CI cannot drift apart.

`pnpm/action-setup` always runs **before** `actions/setup-node`, because `cache: pnpm` can only locate the pnpm store once pnpm is installed.

Installs run with pnpm's default CI behaviour (`--frozen-lockfile`), so a `pnpm-lock.yaml` that is out of date with the `package.json` files fails the run instead of silently resolving different versions.

## Main Workflows

### 🔍 Static Linting (`static-linting.yml`)

Performs code quality checks:

-   PHP file linting using Composer
-   JavaScript file linting
-   CSS file linting
-   Triggered on pull requests and trunk branch pushes

### 🎭 End-to-end Tests (`e2e.yml`)

Verifies that every example block can be inserted in the editor:

-   Builds all examples, which doubles as build verification for pull requests
-   Starts `wp-env` and activates every example plugin
-   Runs the Playwright suite in `_tests/e2e`
-   Uploads Playwright artifacts (traces, screenshots) when the run fails
-   Triggered on pull requests and trunk branch pushes

### 🚀 Generate Examples Zips and Create Release (`release-zips.yml`)

Handles the creation and deployment of plugin zip packages:

-   Generates zip files for all examples
-   Creates versioned releases with date-based tags
-   Maintains a "latest" release that's always up to date
-   Triggered manually, or on push to trunk when files that affect a zip change (`plugins/**`, `package.json`, `pnpm-lock.yaml`, `.nvmrc`) — docs-only commits do not cut a release
-   Runs are serialized, since concurrent runs would race while uploading assets to the shared `latest` release

## Data Management Workflows

### 👥 GitHub Contributors Management

#### Update Contributors List (`github-contributors.yml`)

-   Updates basic contributor information
-   Maintains contributor records
-   Manually triggered only

#### Contributor Details (`contributor-details.yml`)

-   Fetches and updates detailed contributor information
-   Updates contributor metadata
-   Manually triggered only

Both open a pull request with their changes rather than committing to trunk directly.

## Scripts Directory

The `scripts/` directory contains supporting shell scripts used by these workflows. They rely only on `curl` and `jq`, both preinstalled on the runners, and expect to be run from the repository root.

## Workflow Permissions

Workflows require appropriate GitHub permissions for:

-   Creating and updating releases
-   Pushing to branches
-   Managing workflow artifacts
-   Updating repository data

## Trigger Methods

-   Push to trunk branch
-   Pull request events
-   Manual triggers via `workflow_dispatch`
