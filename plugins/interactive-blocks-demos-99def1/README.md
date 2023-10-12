# Interactive Blocks Demos 99def1

An exploratory plugin for using different ways of creating interactive blocks in [Gutenberg](https://github.com/WordPress/gutenberg).

This example shows how to add interactivity to a block using:
- Alpine
- jQuery
- React
- Plain JS
- Web Components

> **Note**
> This example has been adapted from [the original one](https://github.com/wordpress-juanmaguitar/interactive-blocks-demos) that was used in the lightning talk **[Creating interactive blocks: old, new, and good ways](https://europe.wordcamp.org/2022/session/lightning-talks/)** at the [WordCamp Europe 2022](https://europe.wordcamp.org/2022/) (see [video](https://www.youtube.com/watch?v=91anxAgQGJw&t=15939s) and [slides](./asssets/interactive-blocks-talk-slides.pdf) of this talk)


## Start Guide

#### 1. Install dependencies

Check the [Repo Commands > Dependencies](../../DEVELOPMENT.md#dependencies) instructions for this repo

#### 2. Generate the build 

Once the depencies are installed (a `node_modules` folder should have been created), we should [launch the build process](./../DEVELOPMENT.md#build-process) to get the final version of the block that can be used from WordPress. 

#### 3. Use it in a WordPress

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
If not, check the [WordPress Local Development Environment](../../DEVELOPMENT.md#wordpress-local-development-environment) instructions for this repo.

At this point you should be able to insert the "Minimal Gutenberg Block" block into any post (after activating the plugin "Minimal Gutenberg Block Plugin") of your WordPress installation, and see how it behaves in the frontend when published.


