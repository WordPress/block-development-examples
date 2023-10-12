# Interactive Block 833d15

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


