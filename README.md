Welcome to the `gutenberg-examples-2023` repo on GitHub. Here you can find a bunch of examples for WordPress blocks that you can use as a reference to create your own. 

## Getting Started

This `gutenberg-examples-2023` repo is a monorepo multipackage because it contains several packages and is prepared to manage them collectively. To get up and running with it, you will need to make sure that you have installed the prerequisites.

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)- While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains [an `.nvmrc` file](.nvmrc) which helps ensure you are using the correct version of Node.
- [PNPM](https://pnpm.io/installation) - This monorepo utilizes PNPM to manage project dependencies and run various scripts involved in building and testing projects. You can easily install it with `npm i -g pnpm`.

```bash
# Set your Node version to the right one for this project (as defined on .nvmrc)
nvm use
# Install the dependencies for all of the plugins
pnpm install
# Build all of the plugins in the monorepo
pnpm run build
```

At this point you are now ready to begin developing and testing. All of the build outputs are cached so running `pnpm run build` again will only build the plugins that have changed since the last time you ran the command.

## See the examples in action

> **Note**
> Before using these examples in a WordPress installation make sure you have the dependencies installed (`node_modules` folder) and the build generated (`build` folder) for the examples that require them. You can ensure this by running `pnpm install` & `pnpm run build` from the root of the project

<details>
  <summary><em>With <code>wp-env</code></em></summary>

With `wp-env` you'll be able to set up a local WordPress environment with all the examples defined at `.wp-env.json` (property `"plugins"`) installed and activated 

> See ["Quick and easy local WordPress development with wp-env"](https://developer.wordpress.org/news/2023/03/quick-and-easy-local-wordpress-development-with-wp-env/) and [`wp-env` package reference](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)

You can edit the property `"plugins"` at `.wp-env.json` to include just the examples you're interested in.

To launch your local WordPress installation with `wp-env` go to to the root folder of the project and run:

```
npm run env:start
```

Some other scripts related to `wp-env` that are available in this project are:

- `env:start:debug` 
- `env:update` 

**Troubleshooting** 
If you get some errors you can try the following:
- Run `npm run env:restart`
- Go to Docker, remove all containers and then run again `npm run env:start`
<br/>
</details>

<details>
  <summary><em>With <code>wp-now</code></em></summary>

With this method you'll be able to launch a WordPress inslallation to check individually a specific example of this repo.

In order to do that, go to to the plugin folder of the example you're interested to see in action and run `wp-now` from that folder

```
cd plugins/01-block-dynamic
npx @wp-now/wp-now start
```

Once inside WordPress, ensure the proper plugin is activated and add the block to a post (if it's a block example).
</details>

<!--


- All of them with `wp-env`
- Individually with `wp-now`
- A selection of them:
  - with `wp-env` by editing `.wp-env.json` 
  - copying the examples you're interested into the `plugins` folder of your own WordPress installation
  - generating the zips and selectively installing the ones you're interested in into your own WordPress installation

Once inside WordPress, check the plugins you're interested in are activated:
- For block examples: explore the blocks that are available (examples in this repo should start with ⭐️) and insert them in your content (you can look for them using the code of each block).
- For non-block examples: check the new functionalities available in your WordPress installation

### Individually with `wp-now`



### All of them



<details>
  <summary><em>Troubleshooting</em></summary>

If you get some errors you can try the following:
- Run `npm run env:restart`
- Go to Docker, remove all containers and then run again `npm run env:start`

</details>
<br/>
-->

## List of Examples

The folder [**`plugins`**](plugins) contains all the plugins that register each one of the gutenberg examples (block and non-block examples).


| &nbsp; | code | title | folder | tags |
|--------|------|-------|--------|-------------|
| ![]( https://placehold.co/15x15/64756b/64756b ) | 64756b | Block Dynamic | [dynamic-block-64756b](./plugins/dynamic-block-64756b) | <small> [`DYNAMIC`](#dynamic) [`CREATE BLOCK`](#create-block) </small> |
| ![]( https://placehold.co/15x15/3df23d/3df23d ) | 3df23d | Example: Basic (ESNext) | [esnext-basic-3df23d](./plugins/esnext-basic-3df23d)  |<small> [`ESNEXT`](#esnext)  </small> |
| ![]( https://placehold.co/15x15/833d15/833d15 ) | 833d15 | Block Interactive | [interactive-block-833d15](./plugins/interactive-block-833d15)  |  <small> [`CREATE BLOCK TEMPLATE`](#create-block-template) [`INTERACTIVE`](#interactive) [`INTERACTIVITY API`](#interactivity-api) </small>|
| ![]( https://placehold.co/15x15/b16608/b16608 ) | b16608 | Block Static | [static-block-b16608](./plugins/static-block-b16608)  |        |
| ![]( https://placehold.co/15x15/1b8c51/1b8c51 ) | 1b8c51 | Block Editable | [esnext-editable-1b8c51](./plugins/esnext-editable-1b8c51)  |        |
| ![]( https://placehold.co/15x15/56d6f3/56d6f3 ) | 56d6f3 | Non-block wp data with React | [non-block-react-wp-data-56d6f3](./plugins/non-block-react-wp-data-56d6f3)  | <small> [`NON BLOCK`](#create-block-template) [`WP DATA`](#wp-data) </small>   |

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