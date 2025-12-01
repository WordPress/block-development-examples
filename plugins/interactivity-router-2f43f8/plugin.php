<?php
/**
 * Plugin Name:       BDE - Interactivity Router Beatles
 * Description:       Example of how interactivity router works with Beatles pages.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bde_2f43f8__interactivity-router-beatles
 *
 * @package           bde_2f43f8__interactivity-router-beatles
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
function bde_2f43f8__register_block() {
	register_block_type(
		__DIR__ . '/build'
	);
}
// Register the block.
add_action( 'init', 'bde_2f43f8__register_block' );

/**
 * Register block template for the Beatles homepage.
 */
function bde_2f43f8__register_block_template() {
	// Check if function exists (WordPress 6.7+).
	if ( function_exists( 'register_block_template' ) ) {
		register_block_template(
			'bde-2f43f8//minimal-homepage',
			array(
				'title'       => __( 'Minimal Homepage', 'bde_2f43f8__interactivity-router-beatles' ),
				'description' => __( 'A minimal homepage template for the Beatles page', 'bde_2f43f8__interactivity-router-beatles' ),
				'content'     => file_get_contents( plugin_dir_path( __FILE__ ) . 'templates/minimal-homepage.html' ),
				'post_types'  => array( 'page' ),
			)
		);
	}
}

// Register the block template.
add_action( 'init', 'bde_2f43f8__register_block_template' );


/**
 * Render block core/button.
 *
 * @param string $block_content Block content.
 * @return string
 */
function bde_2f43f8__render_block_interactivity_router( $block_content ) {

	$p = new WP_HTML_Tag_Processor( $block_content );
	while ( $p->next_tag( array( 'tag_name' => 'a' ) ) ) {
		if ( $p->get_attribute( 'class' ) !== 'non-interactive-router-link' ) {
			$p->set_attribute( 'data-wp-on--click', 'actions.navigate' );
			$p->set_attribute( 'data-wp-on--mouseenter', 'actions.prefetch' );
			$p->set_attribute( 'data-wp-watch', 'callbacks.prefetch' );
		}
	}

	return $p->get_updated_html();
}

add_filter( 'render_block_block-development-examples/interactivity-router-2f43f8', 'bde_2f43f8__render_block_interactivity_router', 10, 2 );
