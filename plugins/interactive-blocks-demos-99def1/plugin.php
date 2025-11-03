<?php
/**
 * Plugin Name: Block Development Examples - Interactive Blocks 99def1
 * Plugin URI:  https://github.com/wptrainingteam/interactive-blocks-demos/
 * Description: A plugin to show different approaches of creating interactive blocks with Gutenberg.
 * Version:     0.0.1
 * Author:      Juanma Garrido
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: block-development-examples
 * Requires at least: 5.8
 * Requires PHP: 5.6
 *
 * @package block-development-examples
 */

/**
 * Register the demos using blocks-manifest.php for improved performance.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function interactive_blocks_demos_99def1__auto_register_block_types() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	} else {
		/**
		 * Registers the block(s) metadata from the `blocks-manifest.php` file.
		 * Added to WordPress 6.7 to improve the performance of block type registration.
		 *
		 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
		 */
		if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
			wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		}
		/**
		 * Registers the block type(s) in the `blocks-manifest.php` file.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		 */
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}

	wp_register_script(
		'AlpineJS',
		'https://unpkg.com/alpinejs@3.9.6/dist/cdn.min.js',
		array(),
		'3.9.6',
		true // Load it in the footer.
	);
}
add_action( 'init', 'interactive_blocks_demos_99def1__auto_register_block_types' );

/* https://developer.wordpress.org/reference/hooks/render_block_this-name/ */
add_filter(
	'render_block_block-development-examples/counter-jquery-99def1',
	function ( $content ) {
		wp_enqueue_script( 'jquery' );
		return $content;
	}
);

add_filter(
	'render_block_block-development-examples/counter-alpine-99def1',
	function ( $content ) {
		wp_enqueue_script( 'AlpineJS' );
		return $content;
	}
);
