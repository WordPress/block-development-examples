# Copilot Instructions

## Repository Overview

This is a monorepo containing WordPress block development examples for educational and reference purposes.

- **Repository Type:** WordPress Block Development Examples Monorepo
- **Purpose:** Educational examples demonstrating various WordPress block development patterns
- **Primary Languages:** JavaScript (React/JSX), PHP
- **Frameworks:** WordPress Block Editor (Gutenberg), @wordpress/scripts
- **Package Manager:** pnpm (workspace-based monorepo)
- **Target Runtime:** WordPress 6.8+, PHP 8.1+, Node.js 20+

## Critical Build Instructions

### Environment Requirements

- **Node.js:** greater than v20.19.5
- **pnpm:** 8.0 or higher (REQUIRED - this is a pnpm workspace)
- **PHP:** 8.1 or higher (plugins require PHP 8.1+)
- **Composer:** 2.8.12 or higher
- **WordPress Environment:** wp-env (included in devDependencies)

### Dependency Versions

#### npm Packages
- **@wordpress/scripts:** 30.26.0 or higher

#### Composer Packages
- **wp-coding-standards/wpcs:** 3.0 or higher

### Dependency Installation

**ALWAYS install dependencies in this exact order before any build operations:**

1. **pnpm dependencies (REQUIRED FIRST):**
   ```bash
   pnpm install
   ```
   - Installs all workspace dependencies including individual plugin examples
   - Takes approximately 30-60 seconds on first install
   - May show deprecation warnings (these are non-critical)
   - Creates `node_modules/` directories at root and in each plugin (ignored by git)
   - Uses pnpm workspace configuration from `pnpm-workspace.yaml`

2. **Composer dependencies (for PHP linting only):**
   ```bash
   composer install --no-interaction
   ```
   - Takes approximately 30-60 seconds
   - May prompt for GitHub OAuth token if run interactively; use `--no-interaction` flag to avoid this
   - Falls back to cloning from git cache if GitHub API rate limits are hit
   - Creates `vendor/` directory (ignored by git)
   - Installs WordPress Coding Standards (WPCS) for PHP linting

### Build Process

**Build all plugin examples:**
```bash
pnpm run build
```
- Recursively builds all plugins in the workspace
- Takes approximately 10-30 seconds depending on number of plugins
- Creates `build/` directories in each plugin folder
- Generates minified JavaScript, CSS, and asset dependency files

**Build a specific plugin:**
```bash
cd plugins/[plugin-name]
pnpm run build
```

**For development with hot reload (all plugins):**
```bash
pnpm run start
```
- Watches all plugins for file changes and rebuilds automatically
- Generates unminified source maps for debugging
- Use Ctrl+C to stop the watch process

**To clean and rebuild all:**
```bash
pnpm run admin:clear:build
pnpm run build
```

### Linting and Code Quality

**JavaScript/JSX Linting:**
```bash
npm run lint:js
```
- Uses ESLint with WordPress coding standards
- Checks all `.js` files in `src/`
- Must pass with no errors before committing
- Some warnings are acceptable

**CSS/SCSS Linting:**
```bash
npm run lint:css
```
- Uses stylelint with WordPress standards
- Checks all `.scss` files in `src/`
- Must pass with no errors before committing

**Auto-formatting:**
```bash
npm run format
```
- Uses Prettier to auto-format JavaScript, JSON, CSS/SCSS
- **ALWAYS run this before linting if you get Prettier errors**
- Automatically fixes most lint issues related to formatting
- Safe to run on all files

**PHP Linting:**
```bash
./vendor/bin/phpcs [your-plugin-file.php]
```
- Uses PHP_CodeSniffer with WordPress Coding Standards
- Available coding standards: WordPress, WordPress-Core, WordPress-Docs, WordPress-Extra
- The main plugin file may have known PHPCS warnings (tabs vs spaces, line length) - these may be acceptable per project style
- Auto-fix many PHP issues with: `./vendor/bin/phpcbf [your-plugin-file.php]`

**NOTE:** This project uses **tabs for indentation** (not spaces) per WordPress coding standards, as specified in `.editorconfig`. The PHPCS errors about "spaces must be used" are using the wrong standard and can be ignored.

### Plugin Distribution

**To create distributable ZIP files for all plugins:**
```bash
pnpm run plugin-zip
```
- Creates `.zip` files for all plugin examples
- Each plugin gets its own distributable ZIP

**Deploy all plugins to zips folder:**
```bash
pnpm run deploy
```
- Builds all plugins
- Creates ZIP files for each
- Moves all ZIPs to `zips/` folder for distribution

## Project Architecture

### Directory Structure

```
block-development-examples/            # Monorepo root
├── .editorconfig                      # Editor configuration (tabs, not spaces)
├── .gitignore                         # Excludes build/, node_modules/, vendor/, *.zip
├── .wp-env.json                       # WordPress local environment config
├── pnpm-workspace.yaml                # pnpm workspace configuration
├── package.json                       # Root package scripts and dev dependencies
├── composer.json                      # PHP dependencies (WordPress Coding Standards)
├── _app/                              # Documentation site source
├── _bin/                              # Utility scripts for managing examples
├── _data/                             # Data files for documentation
├── templates/                         # Block templates for creating new examples
│   └── block-examples/                # Template for new block examples
└── plugins/                           # Individual block example plugins
    ├── basic-esnext-*/                # Example: Basic ESNext block
    ├── block-dynamic-rendering-*/     # Example: Dynamic rendering
    ├── block-supports-*/              # Example: Block supports
    └── [plugin-name]/                 # Each plugin follows this structure:
        ├── package.json               # Plugin-specific dependencies
        ├── [plugin-name].php          # Main plugin file
        └── src/                       # Block source files
            └── [block-name]/          # Block components
                ├── block.json         # Block metadata
                ├── index.js           # Block registration
                ├── edit.js            # Editor component
                ├── save.js            # Save component
                ├── view.js            # Frontend script
                ├── editor.scss        # Editor styles
                └── style.scss         # Frontend styles
```

### Build Output Structure

```
build/                         # Generated by npm run build (DO NOT EDIT)
├── blocks-manifest.php        # Auto-generated block metadata
└── [your-block-name]/
    ├── block.json            # Copied from src
    ├── index.js              # Minified editor script
    ├── index.css             # Compiled styles (LTR)
    ├── index-rtl.css         # Compiled styles (RTL)
    ├── index.asset.php       # WordPress dependencies array
    ├── view.js               # Minified front-end script
    ├── view.asset.php        # WordPress dependencies array
    ├── style-index.css       # Compiled front-end styles (LTR)
    └── style-index-rtl.css   # Compiled front-end styles (RTL)
```

### Key Files

**`[your-plugin-file.php]`** - Main plugin entry point
- Contains WordPress plugin header with metadata (name, version, WordPress/PHP requirements)
- Registers blocks using `wp_register_block_types_from_metadata_collection()`
- Uses WordPress 6.8+ block registration API with blocks-manifest.php
- Function: `[your_plugin_prefix]_block_init()` hooked to `init`

**`src/[your-block-name]/block.json`** - Block metadata (WordPress Block API v3)
- Defines block name: `[your-namespace]/[your-block-name]`
- Specifies editor/view scripts and styles
- Schema validation via `$schema` property

**`src/[your-block-name]/edit.js`** - Editor component
- React component for block editor interface
- Uses `@wordpress/block-editor` hooks (useBlockProps)
- Uses `@wordpress/i18n` for translations

**`src/[your-block-name]/save.js`** - Save component
- Defines saved HTML output
- Uses `useBlockProps.save()` for proper block wrapper attributes

**Root `package.json` scripts:**
- `build`: Build all plugins in workspace
- `start`: Start development mode for all plugins
- `env:start`: Start WordPress local environment
- `env:stop`: Stop WordPress environment
- `test:e2e`: Run Playwright end-to-end tests
- `create-example`: Create new block example from template
- `table:update`: Update documentation tables
- `deploy`: Build and package all plugins to zips/
- `lint`: Run all linters
- `plugin-zip`: Create distributable ZIPs for all plugins
- `packages-update`: Update @wordpress/* packages in all plugins

## WordPress Coding Guidelines

### Hook Registration

**CRITICAL:** Hook registration must ALWAYS come before the callback function definition.

This ensures that the code is clear and follows WordPress best practices. The hook registration tells WordPress what function to call, so it makes logical sense to define the hook first, then define the function it will call.

**Correct pattern:**
```php
add_action( 'init', 'my_function' );
function my_function() {
	// function content here
}
```

## Validation Workflow

**Before committing any code changes, ALWAYS run in this order:**

1. Install dependencies: `pnpm install`
2. Format code: `pnpm run format` (if available in specific plugin)
3. Lint JavaScript: `pnpm run lint:js`
4. Lint CSS: `pnpm run lint:css`
5. Build all: `pnpm run build`
6. Verify build outputs exist in `plugins/*/build/`

**For PHP changes:**
1. Format and lint as above (if any JS/CSS was touched)
2. Check PHP: `composer run lint` or `./vendor/bin/phpcs`
3. Build: `pnpm run build`

## WordPress Environment

**Start local WordPress environment:**
```bash
pnpm run env:start
```
- Runs WordPress locally using Docker via wp-env
- Access at http://localhost:8888
- Admin at http://localhost:8888/wp-admin (admin/password)
- All plugins in `plugins/` are automatically mounted

**Creating new block examples:**
```bash
pnpm run create-example
```
- Uses the template in `templates/block-examples/`
- Prompts for block details
- Automatically sets up the new plugin structure

## Common Issues and Solutions

**Issue:** `pnpm run build` fails with "Cannot find module"
- **Solution:** Run `pnpm install` first - dependencies not installed

**Issue:** Lint errors about Prettier formatting
- **Solution:** Run `npm run format` first, then lint again

**Issue:** `./vendor/bin/phpcs: No such file or directory`
- **Solution:** Run `composer install --no-interaction`

**Issue:** Composer hangs asking for GitHub token
- **Solution:** Use `composer install --no-interaction` or let it clone from cache (slower but works)

**Issue:** Build directories are empty after `pnpm run build`
- **Solution:** Check for errors in console; ensure plugin `src/` directories exist

**Issue:** Plugin not working in WordPress after changes
- **Solution:** ALWAYS run `pnpm run build` after changing any file in `src/`

**Issue:** "only-allow pnpm" error when using npm
- **Solution:** Use `pnpm` instead of `npm` - this is a pnpm-only workspace

## Important Notes

- This is a **monorepo** containing multiple WordPress block examples
- Each plugin in `plugins/` is a standalone WordPress plugin demonstrating specific block concepts
- The `build/` directories are git-ignored but REQUIRED for plugins to function
- Never edit files in `build/` directly - they are auto-generated
- All plugins use WordPress 6.8+ block registration API
- Source files are in `plugins/*/src/`, build outputs go to `plugins/*/build/`
- This project follows WordPress coding standards, which use TABS for indentation
- Use `pnpm` exclusively - do not use `npm` or `yarn`
- The repository includes a documentation site in `_app/` and utilities in `_bin/`
- Examples are meant to be educational and demonstrate best practices

## Additional Resources

- **GitHub Wiki:** https://github.com/WordPress/block-development-examples/wiki - Extended documentation and guides
- **Documentation Site:** Built from `_app/` and deployed via GitHub Pages
- **Example Categories:** Each plugin demonstrates different aspects of block development:
  - Basic blocks (static/dynamic rendering)
  - Block supports and attributes
  - Interactivity API examples
  - Data layer interactions
  - Custom controls and toolbars
  - Internationalization examples
  - And more...

## Trust These Instructions

These instructions have been tailored for the WordPress Block Development Examples monorepo. The repository serves as a comprehensive learning resource for WordPress block development. Only perform additional searches or exploration if:
- The information here is incomplete for your specific task
- You encounter an error not documented in "Common Issues"
- You are adding new functionality not covered by existing patterns

For routine code changes and example additions, trust this documentation and the existing patterns in the repository.
