# Development

This document aims to provide as much context as possible to aid in the development of examples in in this monorepo.

Please refer to [the Getting Started section of the `README.md`](README.md#getting-started) for a general-purpose guide on getting started. The rest of this document will assume that you've installed all of the prequisites and setup described there.

## Table of Contents

- [WordPress Local Development Environment](#wordpress-local-development-environment)
- [Build process](#build-process)
- [Repo Commands](#repo-commands)
  - [Dependencies](#dependencies)
  - [Scripts](#scripts)
  - [Tool Filtering](#tool-filtering)

## WordPress Local Development Environment

This project recommends the use of [`wp-env`](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/) to get a local development environment.

```bash
# Make sure you are in the working directory of the plugin you are interested in setting up the environment for
cd plugins/minimal-block-ca6eda
# Start will create the environment if necessary or start an existing one
pnpm -- wp-env start
# Stop will, well, stop the environment
pnpm -- wp-env stop
# Destroy will remove all of the environment's files.
pnpm -- wp-env destroy
```

> **Note**
> See ["Quick and easy local WordPress development with wp-env"](https://developer.wordpress.org/news/2023/03/quick-and-easy-local-wordpress-development-with-wp-env/) and [`wp-env` package reference](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) to learn more about `wp-env`

You can also do `npm run env:start` from the root to run a WordPress environment with the plugins at `.wp-env.json`.

Edit the property `"plugins"` at `.wp-env.json` to include just the examples you're interested in. To apply these changes after having started your instance, run `npm run env:update` from the root folder

## Build process

`ESNext` and `JSX` are the recommended syntaxes to code blocks but they're not directly supported by the majority of browsers. Because of this, most of the example of this repo needs to run a [Build process](https://developer.wordpress.org/block-editor/how-to-guides/javascript/js-build-setup/) to get the final version ready to use.

There are some examples in this repo that doesn't use ESNext or JSX Syntax so they don't need to run any build process. These examples are labelled with the tag `NO-BUILD`

You can run the build process from each plugin folder or from the root do:

```
npm run build
```

## Repo Commands

Our repository uses [`pnpm`](https://pnpm.io/) to manage dependencies of examples and run commands on them collectively.

When using `pnpm run {command}` without any options, it will execute that command against every project in the repository.

Here are some examples of the ways you can use pnpm commands to run scripts on all the packages of the repo:

```bash
# Build of all examples
pnpm run build

# Start all the examples (build and watch changes in any plugin)
pnpm run start

# Run tests of packages with tests
pnpm run test:e2e
```

### Dependencies

This tool optimizes the dependencies installation for all the examples, so any installation o dependencies in this repo should be done by `pnpm`

Any time you want to install (o reinstall dependencies) for the examples you should from the root of the project:

```
pnpm install
```

### Scripts

There is a set of predefined scripts you can run from the root with `npm run {script}` to manage the examples in this repo

<details>
  <summary>You can check the scripts available by doing <code>npm run</code> from the root</summary>

```bash
Lifecycle scripts included in monorepo@1.0.0:
  start
    pnpm -r run start
  preinstall
    npx only-allow pnpm

available via `npm run-script`:
  build
    pnpm -r run build
  plugin-zip
    pnpm -r run plugin-zip
  code:get
    node ./bin/randomHexCode.js
  env:start
    npx wp-env start
  env:start:debug
    npx wp-env start --xdebug
  env:update
    npx wp-env start --update
  env:restart
    npx wp-env destroy && npx wp-env start --update
  env:stop
    npx wp-env stop
  env:down
    npx wp-env stop
  env:destroy
    npx wp-env destroy
  env:logs
    npx wp-env logs all
  test:e2e
    wp-scripts test-e2e
  create-example
    node ./bin/createGutenbergExample/index.js
  get:hexcode
    node ./bin/randomHexCode.js
  table:update
    node ./bin/updateTableMarkdown.js
  zips:remove
    rimraf --verbose ./plugins/*/@gutenberg-examples
  zips:move
    copyfiles --verbose --flat './plugins/**/*.zip' zips
  deploy
    npm run build && npm run plugin-zip && make-dir zips && npm run zips:move && npm run zips:remove
```

</details>

### Tool Filtering

If you are interested in running a specific command against a single plugin, package, or tool, you can do so with the `--filter` flag. This flag supports the `"name"` option in `package.json` files, paths, and globs.

**_Examples_**

Here are some examples of the ways you can use pnpm commands:

```bash
# Build minimal-block-ca6eda
pnpm run --filter='*ca6eda' build

# Run tests of editable-block-1b8c51 package
pnpm run --filter='*1b8c51' test:e2e

# Run tests of all editable-block-1b8c51
pnpm run --filter='*1b8c51' test:e2e

# Build everything that has changed since the last commit
pnpm run --filter='[HEAD^1]' build
```