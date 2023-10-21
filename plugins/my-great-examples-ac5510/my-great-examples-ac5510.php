<?php
/**
 * Plugin Name:       My great example
 * Description:       This is a great example
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-great-examples
 *
 * @package           gutenberg-examples
 */
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function my_great_examples_ac5510_my_great_examples_ac5510_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'my_great_examples_ac5510_my_great_examples_ac5510_block_init' );
