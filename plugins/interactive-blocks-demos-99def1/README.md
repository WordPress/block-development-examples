# Creating interactive blocks: old, new, and good ways

An exploratory plugin for using different ways of creating interactive blocks in [Gutenberg](https://github.com/WordPress/gutenberg).

This demos are part of the lightning talk **Creating interactive blocks: old, new, and good ways** of the [WordCamp Europe 2022](https://europe.wordcamp.org/2022/) 

## Background

The block revolution is here. Full site editing has been unleashed to the world, and even though it is still in its infancy, it already takes WordPress configurability and extensibility to a whole new level. But in this new world, one question still remains: How do we add client interactivity to our custom blocks? Should we use the same old techniques we used for classic themes and plugins? Or should we take this opportunity to adopt some techniques from other modern web development ecosystems to improve our interactive blocks' performance and developer experience? 

In this repository you'll find several approaches to create interactive blocks and a brief description of pros & cons of each approach

## About this Plugin

TBD

## Getting Started

1. Clone repository into `wp-content/plugins/gutenberg-examples` of your WordPress site.
2. Run `npm install`
3. Run `composer install`
4. Run `npm run build`
5. Go to your WordPress site and activate this plugin.

To set up WordPress locally, you can use something like [Local](https://localwp.com/) or with Docker you can also do `npx wp-env start`


## TO-DO

- [ ] Add a more complex (interesting) block to the demo
	- Quiz with several questions
	- State in each question
	- State in the overall quiz
	- Each quesiton allow different types of blocks (images, text...)

