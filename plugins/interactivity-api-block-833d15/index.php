<?php
/**
 * Plugin Name:       Block Development Examples - Interactive Block 833d15
 * Description:       An interactive block with the Interactivity API
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       03-block-interactive
 *
 * @package           block-development-examples
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function interactivity_api_block_833d15__init() {
	register_block_type( __DIR__ . '/build' );

	if ( function_exists( 'gutenberg_register_module' ) ) {
		gutenberg_register_module(
			'interactivity_api_block_833d15__view',
			plugin_dir_url( __FILE__ ) . 'src/view.js',
			array( '@wordpress/interactivity' ),
			'0.1.0'
		);
	}
}
add_action( 'init', 'interactivity_api_block_833d15__init' );
