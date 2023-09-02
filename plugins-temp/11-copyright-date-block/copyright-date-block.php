<?php
/**
 * Plugin Name:       Copyright Date Block
 * Description:       Display the copyright date for your website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nick Diego
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       copyright-date-block
 *
 * @package           copyright-date-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function outermost_copyright_date_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'outermost_copyright_date_block_init' );
