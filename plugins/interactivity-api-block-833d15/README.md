# Interactive Block 833d15

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                                               | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ID ([❓](https://github.com/wptrainingteam/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip                                                                                                                                                                                                                                                                   | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/wptrainingteam/block-development-examples/tree/trunk/plugins/interactivity-api-block-833d15) | Interactivity API Block                                                   | <small><code><a href="https://github.com/wptrainingteam/block-development-examples/wiki/03-Tags#create-block-template">CREATE BLOCK TEMPLATE</a></code></small>, <small><code><a href="https://github.com/wptrainingteam/block-development-examples/wiki/03-Tags#interactive-block">INTERACTIVE BLOCK</a></code></small>, <small><code><a href="https://github.com/wptrainingteam/block-development-examples/wiki/03-Tags#interactivity-api">INTERACTIVITY API</a></code></small>, <small><code><a href="https://github.com/wptrainingteam/block-development-examples/wiki/03-Tags#gutenberg-plugin">GUTENBERG PLUGIN</a></code></small>, <small><code><a href="https://github.com/wptrainingteam/block-development-examples/wiki/03-Tags#experimental">EXPERIMENTAL</a></code></small> | `833d15`                                                                                                                                     | [📦](https://raw.githubusercontent.com/wptrainingteam/block-development-examples/deploy/zips/interactivity-api-block-833d15.zip "Install the plugin using this zip and activate it. Then use the ID of the block (833d15) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/wptrainingteam/block-development-examples/trunk/assets/icon-wp.svg)](https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wptrainingteam/block-development-examples/deploy/zips/interactivity-api-block-833d15.zip%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]} "Use the ID of the block (833d15) to find it and add it to a post to see it in action") |
<!-- @TABLE EXAMPLES END -->

> **Warning**
> **This block requires Gutenberg 16.2 or superior to work**. The Interactivity API is, at the moment, not part of WordPress Core as it is still very experimental, and very likely to change. 

> **Note**
> This block uses the API shared at [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/). 

This block has been created with the `create-block-interactive-template` and shows a basic structure of an interactive block that uses the Interactivity API.


Check the following resources for more info about the Interactivity API:
- [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/)
- [“Interactivity API” category](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api) in Gutenberg repo discussions

## Start Guide

The examples in this repo require these three steps to see them in action:

1. Install dependencies
2. Generate the build
3. Use it in a WordPress installation

The way to manage the first two steps will be different depending on the context you're using this example.

> **Note**
> At the [WIKI of this repo](https://github.com/wptrainingteam/block-development-examples/wiki) you have the documentation for the examples on this repo


### As an example inside this monorepo

The quickest way to have access to all the examples is clone this repository and check out the examples locally.

Check the [05 Development > Repo Commands > Dependencies](https://github.com/wptrainingteam/block-development-examples/wiki/05-Development#dependencies) instructions for this repo to install the dependencies of this example.

Once the depencies are installed (a `node_modules` folder should have been created), [launch the build process](https://github.com/wptrainingteam/block-development-examples/wiki/05-Development#build-process) to get the final version of the block that can be used in WordPress. 

Check the [WordPress Local Development Environment](https://github.com/wptrainingteam/block-development-examples/wiki/05-Development#wordpress-local-development-environment) to learn how to quickly get your local WordPress installation to see this example.

### As an isolated example on your own WordPress installation

If you have a local WordPress installation already running, you can also put the plugin folders of the examples you're interested in (by copying and pasting, from the zips...) inside the `plugins` folder of that installation and check the examples there.

If you do that, you'll need to do the following

- Remove any `node_modules` folder inside this folder
- Run `npm install` to install the dependencies
- Run `npm build` to generate the "build" version of the blocks
- Activate the plugin in your own WordPress installation

At this point you should be able to insert the custom blocks into any post (after activating the plugin) of your WordPress installation, and see how it behaves in the frontend when published.

You can also run `npm start` from this folder to generate a development mode "build" version everytime a change in the code is detected (saved) inside this folder.


