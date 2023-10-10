# Minimal Gutenberg Block

This example contains a plugin that register a minimal block that has been defined using JSX so it needs a `build` process to convert the JSX syntax into JS code that browsers can understand (ES5).

> [See diagram](https://excalidraw.com/#json=EMvbHZvzmuMGZUOuXj8FE,Llk4sac-Q3TP88V07hWYqA) 


## Table of Contents

- [Start Guide](#start-guide)
  - [1. Install dependencies](#1-install-dependencies)
  - [2. Generate the build ](#2-generate-the-build)
  - [3. Use it in your WordPress installation ](#3-use-it-in-your-wordpress-installation)
- [Anatomy of this block](#anatomy-of-this-block)
  - [The plugin](#the-plugin)   
  - [The block](#the-block) 


## Start Guide

#### 1. Install dependencies

Check the [Repo Commands > Dependencies](../../DEVELOPMENT.md#dependencies) instructions for this repo

#### 2. Generate the build 

Once the depencies are installed (a `node_modules` folder should have been created), we should [launch the build process](./../DEVELOPMENT.md#build-process) to get the final version of the block that can be used from WordPress. 

#### 3. Use it in your WordPress installation 

If you have a local WordPress installation already running, you can clone the repo and launch the commands above inside the `plugins` folder of that installation. 

If not, check the [WordPress Local Development Environment](../../DEVELOPMENT.md#wordpress-local-development-environment) instructions for this repo.

At this point you should be able to insert the "Minimal Gutenberg Block" block into any post (after activating the plugin "Minimal Gutenberg Block Plugin") of your WordPress installation, and see how it behaves in the frontend when published.

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

