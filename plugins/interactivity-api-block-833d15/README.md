# Interactive Block 833d15

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at data/examples.json and data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
|                                               | ID                                                                                                                            | Short description       | Tags                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Download .zip                                                                                                                                                                                                                                                                        | Live Demo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://placehold.co/15x15/833d15/833d15) | [833d15](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk/plugins/interactivity-api-block-833d15) | Interactivity API Block | [`CREATE BLOCK TEMPLATE`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#create-block-template), [`INTERACTIVE BLOCK`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#interactive-block), [`INTERACTIVITY API`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#interactivity-api), [`GUTENBERG PLUGIN`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#gutenberg-plugin), [`EXPERIMENTAL`](https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#experimental) | [📦](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/interactivity-api-block-833d15.zip "Install the plugin using this zip and activate it. Then use the ID of the block (833d15) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/trunk/assets/icon-wp.svg)](https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22https://raw.githubusercontent.com/wordpress-juanmaguitar/gutenberg-examples-2023/deploy/zips/interactivity-api-block-833d15.zip%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]} "Use the ID of the block (833d15) to find it and add it to a post to see it in action") |
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


