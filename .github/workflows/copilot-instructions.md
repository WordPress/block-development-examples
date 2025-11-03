# Copilot Instructions

## Repository Overview

This is a WordPress plugin

- **Repository Type:** WordPress Plugin
- **Primary Language:** PHP, JavaScript (React/JSX)
- **Frameworks:** WordPress, WordPress Block Editor (Gutenberg), @wordpress/scripts
- **Target Runtime:** WordPress 6.8+, PHP 8.1+, Node.js 20+

## Critical Build Instructions

### Environment Requirements

- **Node.js:** greater than v20.19.5
- **npm:** greater than v10.8.2
- **PHP:** 8.1 or higher (plugin requires PHP 8.1+)
- **Composer:** 2.8.12 or higher

### Dependency Versions

#### npm Packages
- **@wordpress/scripts:** 30.26.0 or higher

#### Composer Packages
- **wp-coding-standards/wpcs:** 3.0 or higher

### Dependency Installation

**ALWAYS install dependencies in this exact order before any build operations:**

1. **npm dependencies (REQUIRED FIRST):**
   ```bash
   npm install
   ```
   - Takes approximately 60 seconds on first install
   - May show deprecation warnings (these are non-critical)
   - May show 2 moderate severity vulnerabilities (these are from dev dependencies and are non-critical)
   - Creates `node_modules/` directory (ignored by git)

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

**ALWAYS run build after making JavaScript/CSS changes:**

```bash
npm run build
```
- Takes approximately 1-2 seconds
- Uses webpack via @wordpress/scripts
- Generates files in `build/` directory (ignored by git, but required for plugin to function)
- Creates `build/blocks-manifest.php` (automatically generated, do NOT edit manually)
- Creates minified JavaScript, CSS, and asset dependency files in `build/[your-block-name]/`
- Build output includes RTL CSS variants automatically

**For development with hot reload:**
```bash
npm run start
```
- Watches for file changes and rebuilds automatically
- Generates unminified source maps for debugging
- Use Ctrl+C to stop the watch process

**To clean and rebuild:**
```bash
rm -rf build/
npm run build
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

**To create a distributable ZIP file:**
```bash
npm run plugin-zip
```
- Creates `[your-plugin-name].zip` in the repository root (ignored by git)
- Includes only necessary files: `[your-plugin-file.php]`, `build/` directory contents
- Excludes: `src/`, `node_modules/`, `vendor/`, development files
- Takes approximately 1-2 seconds

## Project Architecture

### Directory Structure

```
[your-plugin-name]/
├── .editorconfig              # Editor configuration (tabs, not spaces)
├── .gitignore                 # Excludes build/, node_modules/, vendor/, *.zip
├── composer.json              # PHP dependencies (WordPress Coding Standards)
├── package.json               # npm dependencies and scripts
├── [your-plugin-file.php]     # Main plugin file - registers blocks
└── src/
    └── [your-block-name]/     # Block source files
        ├── block.json         # Block metadata (schema, scripts, styles)
        ├── index.js           # Block registration entry point
        ├── edit.js            # Block editor component (React)
        ├── save.js            # Block save/render component (React)
        ├── view.js            # Front-end JavaScript
        ├── editor.scss        # Editor-only styles
        └── style.scss         # Front-end and editor styles
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

**`package.json` scripts:**
- `build`: Production build with minification and manifest generation
- `start`: Development build with watch mode
- `format`: Auto-format all code with Prettier
- `lint:js`: Lint JavaScript with ESLint
- `lint:css`: Lint CSS/SCSS with stylelint
- `plugin-zip`: Create distributable ZIP
- `packages-update`: Update @wordpress/* packages

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

1. Format code: `npm run format`
2. Lint JavaScript: `npm run lint:js`
3. Lint CSS: `npm run lint:css`
4. Build: `npm run build`
5. Verify build output exists in `build/[your-block-name]/`

**For PHP changes only:**
1. Format and lint as above (if any JS/CSS was touched)
2. Check PHP: `./vendor/bin/phpcs [your-plugin-file.php]` (warnings acceptable)
3. Build: `npm run build`

## Common Issues and Solutions

**Issue:** `npm run build` fails with "Cannot find module"
- **Solution:** Run `npm install` first - dependencies not installed

**Issue:** Lint errors about Prettier formatting
- **Solution:** Run `npm run format` first, then lint again

**Issue:** `./vendor/bin/phpcs: No such file or directory`
- **Solution:** Run `composer install --no-interaction`

**Issue:** Composer hangs asking for GitHub token
- **Solution:** Use `composer install --no-interaction` or let it clone from cache (slower but works)

**Issue:** Build directory is empty after `npm run build`
- **Solution:** Check for errors in console; ensure `src/[your-block-name]/` files exist

**Issue:** Plugin not working in WordPress after changes
- **Solution:** ALWAYS run `npm run build` after changing any file in `src/`

## Important Notes

- The `build/` directory is git-ignored but REQUIRED for the plugin to function
- Never edit files in `build/` directly - they are auto-generated
- The plugin uses WordPress 6.8+ block registration API with blocks-manifest.php for improved performance
- All source files are in `src/[your-block-name]/`, all build outputs go to `build/[your-block-name]/`
- This project follows WordPress coding standards, which use TABS for indentation
- Do not generate additional files beyond what is required for the assigned task (e.g., summary or documentation files) unless explicitly requested

## Trust These Instructions

These instructions have been thoroughly tested and validated. Only perform additional searches or exploration if:
- The information here is incomplete for your specific task
- You encounter an error not documented in "Common Issues"
- You are adding new functionality not covered by existing patterns

For routine code changes, trust this documentation and avoid unnecessary exploration.
