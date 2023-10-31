<?php
/**
 * Plugin Name:       WP Block Development Examples - Copyright Date Block 91c8d0
 * Description:       Display the copyright date for your website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nick Diego
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-block-development-examples
 *
 * @package           copyright-date-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function gutenberg_examples__copyright_date_block__init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'gutenberg_examples__copyright_date_block__init' );
