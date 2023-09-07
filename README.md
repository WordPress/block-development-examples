Welcome to the `gutenberg-examples-2023` repo on GitHub. Here you can find a bunch of block and non-block examples for Gutenberg that you can use to learn about Block Development and other related Gutenberg topics. 

Every example is contained in a plugin so to see an example in action the related plugin needs to be installed and activated in a WordPress installation.

## Getting Started

This `gutenberg-examples-2023` repo is a monorepo multipackage because it contains several packages (plugins) and is prepared to manage them collectively. To get up and running with it, you will need to make sure that you have installed the prerequisites.

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)- While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains [an `.nvmrc` file](.nvmrc) which helps ensure you are using the correct version of Node.
- [PNPM](https://pnpm.io/installation) - This monorepo utilizes PNPM to manage project dependencies and run various scripts involved in building and testing projects. You can easily install it with `npm i -g pnpm`.

### Quick Start Guide

After [cloning this repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and entering into this projects's folder (`cd gutenberg-examples-2023`), do the following from the root of the project:

```bash
# Set your Node version to the right one for this project (as defined on .nvmrc)
nvm use
# Install the dependencies for all of the plugins
pnpm install
# Launch a build process for all of the plugins in the monorepo
pnpm run build
```

At this point you are now ready to begin developing and testing the examples.  

To see the examples in action you can:
- Run `npx @wp-now/wp-now start` from any plugin folder to use [`wp-now`](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) to quickly launch a WordPress installation with that specific plugin installed.
- Use your own WordPress installation to install the plugin (as `.zip`) with the example you're interested in. 
  - Run `pnpm run plugin-zip` from the root of the project to get the zip version of each plugin at  `<plugin-folder>/@gutenberg-examples/<plugin-folder>.zip`.
- Directly copy the the plugins folders for the examples you're insterested under the `plugins` folder of your own WordPress installation.
- Use `wp-env` as explained in [Development > WordPress Local Development Environment](DEVELOPMENT.md)


> **Important**
> Check out the [**Development Guide**](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/blob/trunk/DEVELOPMENT.md) for a more comprehensive look at working in this repository.

## List of Examples

The folder [**`plugins`**](plugins) contains all the plugins that register each one of the gutenberg examples (block and non-block examples). 

Most of the examples in this repo use [ESNext Syntax](https://developer.wordpress.org/block-editor/how-to-guides/javascript/esnext-js/) and/or [JSX Syntax](https://legacy.reactjs.org/docs/introducing-jsx.html) so they require a [build process](https://developer.wordpress.org/block-editor/how-to-guides/javascript/js-build-setup/). 

The following table provides an overview of all the examples of this repo:
- Each example **ID** in the following table links to the related folder. 
- Each one the **tags** that help categorize and explain each each example, links to their description (in the [Tags](#tags) section below). 

| &nbsp; | ID | Short description  | tags |
|--------|------|-------|-------------|
| ![]( https://placehold.co/15x15/64756b/64756b ) |  [64756b](./plugins/dynamic-block-64756b) | Basic Dynamic Block | <small> [`DYNAMIC`](#dynamic) [`CREATE BLOCK`](#create-block) </small> |
| ![]( https://placehold.co/15x15/3df23d/3df23d ) | [3df23d](./plugins/esnext-basic-3df23d) | Basic Static Block  |<small> [`ESNEXT`](#esnext)  </small> |
| ![]( https://placehold.co/15x15/833d15/833d15 ) | [833d15](./plugins/interactive-block-833d15) | Interactivity API Block |   <small> [`CREATE BLOCK TEMPLATE`](#create-block-template) [`INTERACTIVE`](#interactive) [`INTERACTIVITY API`](#interactivity-api) </small>|
| ![]( https://placehold.co/15x15/b16608/b16608 ) | [b16608](./plugins/static-block-b16608) | Static Block |        |
| ![]( https://placehold.co/15x15/1b8c51/1b8c51 ) | [1b8c51](./plugins/esnext-editable-1b8c51) | Block Editable |       |
| ![]( https://placehold.co/15x15/56d6f3/56d6f3 ) | [56d6f3](./plugins/non-block-react-wp-data-56d6f3) | Non-block wp data with React | <small> [`NON BLOCK`](#create-block-template) [`WP DATA`](#wp-data) </small>   |

### Tags 

###### `INTERACTIVITY API`

These examples show the use of the experimental [Interactivity API](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/) in Blocks via the [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)  

###### `INTERACTIVE`

These examples show how to add behaviour for the frontend in your blocks. This behaviour is usually applied on an extra file (defined with the [property `viewScript` of your `block.json`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script)) that is executed only when the block is loaded in the frontend.

###### `CREATE BLOCK TEMPLATE`

<!--
These examples show how to add behaviour for the frontend in your blocks. This behaviour is usually applied on an extra file (defined with the [property `viewScript` of your `block.json`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script)) that is executed only when the block is loaded in the frontend.
-->

###### `ESNEXT`
<!--
These examples shows the use of the experimental [Interactivity API](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/) via the [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)  
-->