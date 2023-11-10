# Minimal Gutenberg Block

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                                     | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip                                                                                                                                                                                                                                                         | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/minimal-block-ca6eda) | Minimal Block                                                             | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#minimal">MINIMAL</a></code></small> | `ca6eda`                                                                                                                                     | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/minimal-block-ca6eda.zip "Install the plugin using this zip and activate it. Then use the ID of the block (ca6eda) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/assets/icon-wp.svg)](https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/minimal-block-ca6eda.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D "Use the ID of the block (ca6eda) to find it and add it to a post to see it in action") |
<!-- @TABLE EXAMPLES END -->

This example contains a plugin that register a minimal block that has been defined using JSX so it needs a `build` process to convert the JSX syntax into JS code that browsers can understand (ES5).

> [See diagram](https://excalidraw.com/#json=p5GXuqsMjZe7pEJ99-6EM,OuVzzTujO91JYnCSNVwEBg) 


## Table of Contents

- [Start Guide](#start-guide)
  - [1. Install dependencies](#1-install-dependencies)
  - [2. Generate the build ](#2-generate-the-build)
  - [3. Use it in your WordPress installation ](#3-use-it-in-your-wordpress-installation)
- [Anatomy of this block](#anatomy-of-this-block)
  - [The plugin](#the-plugin)   
  - [The block](#the-block) 


## Start Guide

The examples in this repo require these three steps to see them in action:

1. Install dependencies
2. Generate the build
3. Use it in a WordPress installation

The way to manage the first two steps will be different depending on the context you're using this example.

> **Note**
> At the [WIKI of this repo](https://github.com/WordPress/block-development-examples/wiki) you have the documentation for the examples on this repo


### As an example inside this monorepo

The quickest way to have access to all the examples is clone this repository and check out the examples locally.

Check the [05 Development > Repo Commands > Dependencies](https://github.com/WordPress/block-development-examples/wiki/05-Development#dependencies) instructions for this repo to install the dependencies of this example.

Once the depencies are installed (a `node_modules` folder should have been created), [launch the build process](https://github.com/WordPress/block-development-examples/wiki/05-Development#build-process) to get the final version of the block that can be used in WordPress. 

Check the [WordPress Local Development Environment](https://github.com/WordPress/block-development-examples/wiki/05-Development#wordpress-local-development-environment) to learn how to quickly get your local WordPress installation to see this example.

### As an isolated example on your own WordPress installation

If you have a local WordPress installation already running, you can also put the plugin folders of the examples you're interested in (by copying and pasting, from the zips...) inside the `plugins` folder of that installation and check the examples there.

If you do that, you'll need to do the following

- Remove any `node_modules` folder inside this folder
- Run `npm install` to install the dependencies
- Run `npm build` to generate the "build" version of the blocks
- Activate the plugin in your own WordPress installation

At this point you should be able to insert the custom blocks into any post (after activating the plugin) of your WordPress installation, and see how it behaves in the frontend when published.

You can also run `npm start` from this folder to generate a development mode "build" version everytime a change in the code is detected (saved) inside this folder.





## Anatomy of this block

The essential files for this block are:

- `index.php`
    - Main file for the plugin that will register our block
- `src/block.json`
    - Main file for the block definition (metadata)
- `src/index.js`
    - Starting point for block behaviour definitions


The `package.json` fle include dependencies needed for "build" time. In this minimal version it just includes the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) dependency and the `build` script that will allow us to easily run a build process for our block.

```json
{
    "name": "minimal-gutenberg-block",
    "description": "",
    "version": "0.1.0",
    "scripts": {
        "build": "wp-scripts build"
    },
    "devDependencies": {
        "@wordpress/scripts": "^26.14.0"
    }
}

```

### The plugin 

![index.php](./assets/index-php.png)

The most recommended way to register a block is via a plugin. Every plugin starts with a `.php` file defining some hooks that will be executed at different moments of the WordPress loading sequence.

```php
<?php
/*
* Plugin Name: Minimal Gutenberg Block Plugin
*/

function register_block() {
    register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'register_block' );
```

This plugin use the [`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) function to register a block when the WordPress loading sequence starts ([`init`](https://developer.wordpress.org/reference/hooks/init/) hook)

[`register_block_type`](https://developer.wordpress.org/reference/functions/register_block_type/) needs to point to a `block.json` path. In this examples it points to the one stored in the generated `build` folder (and not the one in the `src` folder) because that's the one that will point to the JS code ready for production.

### The block 

![block.json and js files](./assets/block-json-and-js.png)

Any block's definition starts with a [`block.json` which contains the metadata for the block](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/). This file contains, among other things, the paths of the js files that will conform the behaviour and appearance of our block.

```json
{
	"apiVersion": 3,
	"title": "Minimal Gutenberg Block",
	"name": "minimal-gutenberg-block/my-block",
	"category": "media",
	"icon": "smiley",
	"editorScript": "file:./index.js"
}
```

In our minimal example, it just contains the path for the javascript file ([`editorScript` property](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-script)) that defines the interface for how our block is going to be rendered within the editor, how it will operate and be manipulated, and how it will be saved.

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'minimal-gutenberg-block/my-block', {
    edit: function () {
        return <p>Hello World - Block Editor</p>;
    },
    save: function () {
        return <p>Hello World - Frontend</p>;
    },
} );
```

The [`registerBlockType`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblocktype) function registers our block in the Block Editor (so it can be found and inserted). This function takes two arguments
- Our [block name](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#block-name) → `minimal-gutenberg-block/my-block`
- A configuration object, with the [edit and save functions](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)
    - `edit` → React component that will be loaded in the Block Editor for our block
    - `save` → What will be stored in the DB for our block

## The build process

