<?php
/**
 * Plugin Name:       Block Development Examples - Server Side Render Block d26119
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * Note: This block uses a render_callback which is defined in block.json.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function server_side_render_block_d26119__register_block() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

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
	 * Registers the block type(s) in the `blocks-manifest.php` file with render callback.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type(
			__DIR__ . "/build/{$block_type}",
			array(
				'render_callback' => 'server_side_render_block_d26119__render_block',
			)
		);
	}
}
add_action( 'init', 'server_side_render_block_d26119__register_block' );

/**
 * Renders the block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the block content.
 */
function server_side_render_block_d26119__render_block( $attributes ) {
	$label   = isset( $attributes['label'] ) ? $attributes['label'] : '';
	$message = __( 'Server Side Render Block d26119 – This content is rendered on the server and displayed in the Editor using the ServerSideRender component.', 'block-development-examples' );

	$wrapper_attributes = get_block_wrapper_attributes();

	if ( empty( $label ) ) {
		return sprintf( '<p %s>%s</p>', $wrapper_attributes, esc_html( $message ) );
	}

	return sprintf(
		'<div %s><h2>%s</h2><p>%s</p></div>',
		$wrapper_attributes,
		esc_html( $label ),
		esc_html( $message )
	);
}
