### Block Development Examples - Data Basics 59c8f8

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
<!-- @TABLE EXAMPLES END -->

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


