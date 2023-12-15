# Block Toolbar ab967f

The goal of this example is to show how to implement custom "Block Toolbar" controls for a block when selected

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->
| Folder                                                                                                | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                       | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip                                                                                                                                                                                                                                                    | Live Demo                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/block-toolbar-ab967f) | Block Toolbar Controls                                                    | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#block-toolbar">BLOCK TOOLBAR</a></code></small> | `ab967f`                                                                                                                                | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/block-toolbar-ab967f.zip "Install the plugin using this zip and activate it. Then use the ID of the block (ab967f) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/block-toolbar-ab967f/_playground/blueprint.json "Use the ID of the block (ab967f) to find it and add it to a post to see it in action") |
<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

Interesting things of this example are:
- The use of `BlockControls` to wrap up the controls to display in the Block Toolbar when the block is selected
- The import of custom icons from `@wordpress/icons` to use them in buttons
- The use of standard UI elements from `@wordpress/components` (`ToolbarGroup` and  `ToolbarButton`) to shape the Block Toolbar ;

## Related resources

- [Storybook for WordPress components](https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page)
- [@wordpress/block-editor](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/)
- [@wordpress/components](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/)

----

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)

