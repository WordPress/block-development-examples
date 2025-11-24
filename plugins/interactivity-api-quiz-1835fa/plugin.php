<?php
/**
 * Plugin Name:       Block Development Examples - Quiz 1835fa
 * Version:           1.0.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Description:       Plugin created for the WCEU 2023 workshop: Building Interactive Blocks, a step-by-step workshop
 * Author:            Luis Herranz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Setup.
define( 'UP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

/**
 * Automatically registers block types by scanning the build folder.
 *
 * This function searches for JSON files within each subfolder and registers
 * them as block types using a `blocks-manifest.php` file for improved performance.
 * It is triggered on WordPress 'init' action.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function interactivity_api_quiz_1835fa__register_blocks() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( UP_PLUGIN_DIR . 'build', UP_PLUGIN_DIR . 'build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( UP_PLUGIN_DIR . 'build', UP_PLUGIN_DIR . 'build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require UP_PLUGIN_DIR . 'build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( UP_PLUGIN_DIR . "build/{$block_type}" );
	}
}

add_action( 'init', 'interactivity_api_quiz_1835fa__register_blocks' );
