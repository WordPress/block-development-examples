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
 * Register the demos.
 */
function interactive_block_demos_register() {
	register_block_type( __DIR__ . '/build/counter-alpine-99def1' );
	register_block_type( __DIR__ . '/build/counter-jquery-99def1' );
	register_block_type( __DIR__ . '/build/counter-js-99def1' );
	register_block_type( __DIR__ . '/build/counter-react-99def1' );
	register_block_type( __DIR__ . '/build/counter-web-component-99def1' );

	wp_register_script(
		'AlpineJS',
		'https://unpkg.com/alpinejs@3.9.6/dist/cdn.min.js',
		array(),
		'3.9.6',
		true // Load it in the footer.
	);
}

add_action( 'init', 'interactive_block_demos_register' );
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
