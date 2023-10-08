Welcome to the `gutenberg-examples-2023` repo on GitHub. Here you can find a bunch of block and non-block examples for Gutenberg that you can use to learn about Block Development and other related Gutenberg topics.

Every example is contained in a plugin so to see an example in action the related plugin needs to be installed and activated in a WordPress installation.

## Getting Started

This `gutenberg-examples-2023` repo is a monorepo multipackage because it contains several packages (plugins) and is prepared to manage them collectively. To get up and running with it, you will need to make sure that you have installed the prerequisites.

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) - While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains [an `.nvmrc` file](.nvmrc) which helps ensure you are using the correct version of Node.
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

> **Important**
> To see the examples in action you can just click on the Live Demo icon ![](/wordpress-juanmaguitar/gutenberg-examples-2023/raw/trunk/assets/icon-wp.svg) from the [List of examples](#list-of-examples) table below) for the example you're interested in.

To see the examples in action you can can also:

- Use your own WordPress installation to install the plugin (as a `.zip` that can be downloaded from the 📦 icon of the example you're interested in the [List of examples](#list-of-examples) table below).
- Run `npx @wp-now/wp-now start` from any plugin folder to use [`wp-now`](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) to quickly launch a WordPress installation with that specific plugin installed.
- Copy the plugins folders for the examples you're interested in under the `plugins` folder of your own WordPress installation.
- Use `wp-env` as explained in [Development > WordPress Local Development Environment](DEVELOPMENT.md##wordpress-local-development-environment)

> **Important**
> Check out the [**Development Guide**](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/blob/trunk/DEVELOPMENT.md) for a more comprehensive look at working in this repository.

## List of Examples

The folder [**`plugins`**](plugins) contains all the plugins that register each one of the gutenberg examples (block and non-block examples). Each example has a unique ID that can be used to filter or find them.

The examples in this repo are listed in the following table:

- Each example **ID** links to its related folder.
- Each one the **tags** assigned to each example, links to their description in the [Tags](#tags) section below.

<details>
  <summary>Most of the examples in this repo are blocks for the Block Editor and their code use <a href="https://developer.wordpress.org/block-editor/how-to-guides/javascript/esnext-js/">ESNext</a> + <a href="https://legacy.reactjs.org/docs/introducing-jsx.html">JSX</a> Syntax (as it's a general recommendation)</summary>
<br>  
<p><em>Most of the examples in this repo showcase a specific type of block that can be used in the Block Editor. Those examples that doesn't specifically register a block for the Block Editor are labelled with the tag <code>NO-BLOCK</code>.</em></p>

<p><em>There are some examples in this repo that doesn't use ESNext or JSX Syntax so they don't need to run any build process. These examples are labelled with the tag <code>NO-BUILD</code>.</em></p>
</details>
<br>

> **Note**
> Want to add an example to this repo? Check out the [**Contributions Guide**](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/blob/trunk/CONTRIBUTIONS.md).


<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
|                                               | ID                                                 | Short description                  | Tags                                                                                                                                                                             | Download .zip                                                                                                                                                    | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | -------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](https://placehold.co/15x15/64756b/64756b) | [64756b](./plugins/dynamic-block-64756b)           | Basic Dynamic Block                | [`DYNAMIC BLOCK`](#dynamic-block), [`CREATE BLOCK`](#create-block)                                                                                                               | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/dynamic-block-64756b.zip" target="_blank">📦</a>           | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/dynamic-block-64756b.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>           |
| ![](https://placehold.co/15x15/3df23d/3df23d) | [3df23d](./plugins/basic-block-3df23d)             | Basic Static Block                 | [`STATIC BLOCK`](#static-block)                                                                                                                                                  | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/basic-block-3df23d.zip" target="_blank">📦</a>             | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/basic-block-3df23d.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>             |
| ![](https://placehold.co/15x15/833d15/833d15) | [833d15](./plugins/interactive-block-833d15)       | Interactivity API Block            | [`CREATE BLOCK TEMPLATE`](#create-block-template), [`INTERACTIVE BLOCK`](#interactive-block), [`INTERACTIVITY API`](#interactivity-api), [`GUTENBERG PLUGIN`](#gutenberg-plugin) | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/interactive-block-833d15.zip" target="_blank">📦</a>       | <a href="https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/interactive-block-833d15.zip%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}" target="_blank"><img src="./assets/icon-wp.svg"></a>                                                                                                                                                            |
| ![](https://placehold.co/15x15/b16608/b16608) | [b16608](./plugins/static-block-b16608)            | Static Block                       | [`STATIC BLOCK`](#static-block), [`CREATE BLOCK`](#create-block)                                                                                                                 | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/static-block-b16608.zip" target="_blank">📦</a>            | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/static-block-b16608.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>            |
| ![](https://placehold.co/15x15/1b8c51/1b8c51) | [1b8c51](./plugins/editable-block-1b8c51)          | Block Editable                     |                                                                                                                                                                                  | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/editable-block-1b8c51.zip" target="_blank">📦</a>          | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/editable-block-1b8c51.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>          |
| ![](https://placehold.co/15x15/56d6f3/56d6f3) | [56d6f3](./plugins/non-block-react-wp-data-56d6f3) | Non-block wp data with React       | [`NO BLOCK`](#no-block), [`WP DATA`](#wp-data)                                                                                                                                   | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/non-block-react-wp-data-56d6f3.zip" target="_blank">📦</a> | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/non-block-react-wp-data-56d6f3.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a> |
| ![](https://placehold.co/15x15/ca6eda/ca6eda) | [ca6eda](./plugins/minimal-block-ca6eda)           | Minimal Block                      | [`MINIMAL`](#minimal)                                                                                                                                                            | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-ca6eda.zip" target="_blank">📦</a>           | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-ca6eda.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>           |
| ![](https://placehold.co/15x15/e621a6/e621a6) | [e621a6](./plugins/minimal-block-no-build-e621a6)  | Minimal Gutenberg Block (No Build) | [`MINIMAL`](#minimal), [`NO BUILD`](#no-build)                                                                                                                                   | <a href="https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-no-build-e621a6.zip" target="_blank">📦</a>  | <a href="https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-no-build-e621a6.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D" target="_blank"><img src="./assets/icon-wp.svg"></a>  |
<!-- @TABLE EXAMPLES END -->

### Tags

##### `INTERACTIVITY API`

These examples show the use of the experimental [Interactivity API](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/) in Blocks via the [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)

##### `INTERACTIVE BLOCK`

These examples show how to add behaviour for the frontend in your blocks. This behaviour is usually applied on an extra file (defined with the [property `viewScript` of your `block.json`](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script)) that is executed only when the block is loaded in the frontend.

##### `CREATE BLOCK`

These examples shows the result of using the [`create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool with any of his variants or options.

##### `CREATE BLOCK TEMPLATE`

These examples shows the result of using a template with the [`create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool with any of his variants or options.

##### `NO BUILD`

These examples shows block development that doesn't require a build process, mostly because they don't use ESNext or JSX syntax.

##### `NO BLOCK`

These examples shows the development of a feature or behaviour for WordPress using gutenberg packages and React without the creation of a block.

##### `DYNAMIC BLOCK`

These examples shows [dynamic blocks](https://developer.wordpress.org/block-editor/getting-started/glossary/#dynamic-block).

##### `STATIC BLOCK`

These examples shows [static blocks](https://developer.wordpress.org/block-editor/getting-started/glossary/#static-block).

##### `GUTENBERG PLUGIN`

These examples shows some experimentatal feature that require the latest version of the Gutenberg Plugin in order to work properly

##### `MINIMAL`

These examples shows the most simple version of specific types of blocks 

