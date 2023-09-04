# Contributions

## Conventions used for each example in this repo 

- [ ] Each plugin has its own `<unique-code>` 
    - Get it by running `npm run code:get` from the root of the project
- [ ] Plugin **folder name** should follow the convention `<plugin-slug>-<unique-code>` 
    - Ex: `dynamic-block-64756b`
- On **`<plugin-folder>/package.json`**
    - [ ] **`name`** should follow the convention `@gutenberg-examples/<plugin-slug>-<unique-code>` 
        - Ex: `"name": "@gutenberg-examples/static-block-b16608"`
    - [ ] **`description`** should be descriptive and brief 
        - Ex: `"description": "Very basic static block"`
    - [ ] **`files`** property should be set to `*`
        - Ex: `"files": [ "*" ]`
    - [ ] **`scripts`** 
        - It should have the following [scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) defined:
```
        "scripts": {
            "build": "wp-scripts build",
            "check-engines": "wp-scripts check-engines",
            "check-licenses": "wp-scripts check-licenses",
            "format": "wp-scripts format",
            "lint:css": "wp-scripts lint-style",
            "lint:js": "wp-scripts lint-js",
            "lint:md:docs": "wp-scripts lint-md-docs",
            "lint:pkg-json": "wp-scripts lint-pkg-json",
            "packages-update": "wp-scripts packages-update",
            "plugin-zip": "wp-scripts plugin-zip",
            "start": "wp-scripts start",
            "test:e2e": "wp-scripts test-e2e",
            "test:unit": "wp-scripts test-unit-js"
        }
```
    
- On **`<plugin-folder>/index.php`** the `Plugin Name` should follow the convention: `Gutenberg Examples` - `<plugin-title>` + `<unique-code>`
     - Ex `Plugin Name:  Gutenberg Examples - Non Block React WP Data 56d6f3`
- On **`<plugin-folder>/src/block.json`**
    - [ ] **`name`** should follow the convention `gutenberg-examples/<plugin-slug>-<unique-code>` 
        - Ex: `"name": "gutenberg-examples/static-block-b16608"`
    - [ ] **`title`** should start with the emoji ⭐️
        - Ex: `"title": "⭐️ Block Dynamic"`
    "title": "⭐️ Block Dynamic",
    - [ ] **`keywords`** should include the `<unique-code>`
        - Ex: `"keywords": [ "64756b" ]`    
- [ ] Block Class should follow the convention `.wp-block-gutenberg-examples-<plugin-slug>-<unique-code>`
    - Ex: `.wp-block-gutenberg-examples-esnext-editable-1b8c51`    
- On **`<root-folder>/.wp-env.json`**
    - [ ] The local path of the plugin (starting from root) should be included in the array `"plugins"` 
        - Ex: `"./plugins/esnext-basic-3df23d"`
- On **`<root-folder>/README.md`**
    - [ ] Add a new row with the plugin info
        - Ex: `| ![]( https://placehold.co/15x15/833d15/833d15 ) | 833d15 | Block Interactive | [interactive-block-833d15](./plugins/interactive-block-833d15)  |        |`

After ensuring these changes a new install of dependencies and build should be run from the root of the project

```
pnpm i
npm run build
```