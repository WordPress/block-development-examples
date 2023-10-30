# Minimal Gutenberg Block (No Build)

This example contains a plugin that register a minimal block that has been defined using plain javascript so it doesn't needs a `build` process (to convert the JSX syntax into JS code that browsers can understand).

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
|                                               | ID       | Example slug                                                                                                                                        | Short description                  | Tags                                                                                                                                                                                                   | Download .zip                                                                                                                                                                                                                                                                       | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://placehold.co/15x15/e621a6/e621a6) | `e621a6` | [minimal-block-no-build-e621a6](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk/plugins/minimal-block-no-build-e621a6) | Minimal Gutenberg Block (No Build) | [`MINIMAL`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#minimal), [`NO BUILD`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#no-build) | [📦](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-no-build-e621a6.zip "Install the plugin using this zip and activate it. Then use the ID of the block (e621a6) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/trunk/assets/icon-wp.svg)](https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/minimal-block-no-build-e621a6.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D "Use the ID of the block (e621a6) to find it and add it to a post to see it in action") |
<!-- @TABLE EXAMPLES END -->

## Start Guide

#### 1. Install dependencies

Check the [Repo Commands > Dependencies](../../DEVELOPMENT.md#dependencies) instructions for this repo

#### ~~2. Generate the build~~

This example doesn't require any `build` process

#### 3. Use it in a WordPress

Check the [WordPress Local Development Environment](../../DEVELOPMENT.md#wordpress-local-development-environment) instructions for this repo.

<details>
  <summary><em>If you have a local WordPress installation already running, you can clone the repo inside the <code>plugins</code> folder of that installation and check the example there</em></summary>
<br>  
<p>If you do that, you'll need to do the following</p>
<ul>
<li>Remove any <code>node_modules</code> folder inside this folder</li>
<li>Run <code>npm install</code> to install the dependencies</li>
<li>Run <code>npm build</code> to generate the "build" version of the blocks</li>
<li>Activate the plugin in your own WordPress installation</li>
<ul>
</details>
<br>  

At this point you should be able to insert the custom blocks into any post (after activating the plugin) of your WordPress installation, and see how it behaves in the frontend when published.




