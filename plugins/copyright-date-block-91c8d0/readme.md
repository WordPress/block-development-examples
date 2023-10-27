# Copyright Date Block

A simple WordPress block plugin that utilizes both a `render.php file` and a `save.js` file. On the front end, the render.php file takes precedence, but if the plugin is ever disabled, the `save.js` file serves as a fallback, so a copyright date is still displayed.

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


