# Contributions

## Conventions used for each example in this repo 

> [!IMPORTANT]
> The example `slug` should follow the convention `<plugin-slug>-<unique-code>`

- [ ] Each plugin has its own `<unique-code>` 
    - Get it by running `npm run get:hexcode` from the root of the project
- [ ] Plugin **folder name** should be the `<slug>`
    - Ex: `dynamic-block-64756b`
- On **`<plugin-folder>/package.json`**
    - [ ] **`name`** should follow the convention `@gutenberg-examples/<slug>` 
        - Ex: `"name": "@gutenberg-examples/static-block-b16608"`
    - [ ] **`files`** property should be set to `*`
        - Ex: `"files": [ "*" ]`
    - [ ] **`scripts`** 
        - It should have, at least, the following [scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) defined:
```
        "scripts": {
            "build": "wp-scripts build",
            "plugin-zip": "wp-scripts plugin-zip",
            "start": "wp-scripts start"
        }
```
    
- On **`<plugin-folder>/index.php`** the `Plugin Name` should follow the convention: `Gutenberg Examples` - `<slug>`
     - Ex `Plugin Name:  Gutenberg Examples - Non Block React WP Data 56d6f3`
- On **`<plugin-folder>/src/block.json`**
    - [ ] **`name`** should follow the convention `gutenberg-examples/<slug>` 
        - Ex: `"name": "gutenberg-examples/static-block-b16608"`
    "title": "Block Dynamic",
    - [ ] **`keywords`** should include, at least, the `<unique-code>`
        - Ex: `"keywords": [ "64756b"]`    
- [ ] Block CSS class should follow the convention `.wp-block-gutenberg-examples-<slug>`
    - Ex: `.wp-block-gutenberg-examples-editable-block-1b8c51`    
- On **`<root-folder>/.wp-env.json`**
    - [ ] The local path of the plugin/example (starting from root) should be included in the array `"plugins"` 
        - Ex: `"./plugins/basic-block-3df23d"`
- On **`<root-folder>/README.md`**
    - [ ] Add a new row with the plugin/example info. You can do so by running `npm run table:add -- <slug>`
        - Ex: `npm run table:add -- minimal-gutenberg-block-ca6eda`

After ensuring these changes a new install of dependencies and build should be run from the root of the project

```
pnpm i
npm run build
```