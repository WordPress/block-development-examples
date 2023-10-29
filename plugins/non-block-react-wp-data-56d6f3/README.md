# Non block React wp-data 56d6f3

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
|                                               | ID                                                                                                                            | Short description            | Tags                                                                                                                                                                                                   | Download .zip                                                                                                                            | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](https://placehold.co/15x15/56d6f3/56d6f3) | [56d6f3](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk/plugins/non-block-react-wp-data-56d6f3) | Non-block wp data with React | [`NO BLOCK`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#no-block), [`WP DATA`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#wp-data) | [📦](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/non-block-react-wp-data-56d6f3.zip "") | [![](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/trunk/assets/icon-wp.svg)](https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/non-block-react-wp-data-56d6f3.zip%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D "") |
<!-- @TABLE EXAMPLES END -->

This example contains a plugin that extendes the dashboard with a mini React app that shows the use of wp-data


## Start Guide

#### 1. Install dependencies

Check the [Repo Commands > Dependencies](../../DEVELOPMENT.md#dependencies) instructions for this repo

#### 2. Generate the build 

Once the depencies are installed (a `node_modules` folder should have been created), we should [launch the build process](../../DEVELOPMENT.md#build-process) to get the final version of the block that can be used from WordPress. 

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


