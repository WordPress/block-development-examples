<?php
/**
 * Plugin Name:       Block Development Examples - Copyright Date Block 09aac3
 * Description:       Display your site&#39;s copyright date.
 * Version:           0.1.0
 * Requires at least: 6.2
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_development_examples__copyright_date_block__init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'block_development_examples__copyright_date_block__init' );
