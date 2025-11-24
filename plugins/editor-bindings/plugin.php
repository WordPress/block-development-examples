<?php
/**
 * Plugin Name:       Dev Blog Editor Bindings
 * Plugin URI:        https://developer.wordpress.org/news
 * Description:       Exploring the Block Bindings API in the editor.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Your Name
 * Author URI:        https://developer.wordpres.org/news
 * Text Domain:       wpviplearn
 *
 * @package CreateBlock
 */

add_action( 'init', 'bde_register_binding_sources' );

/**
 * Register the block bindings sources.
 */
function bde_register_binding_sources() {
	register_block_bindings_source(
		'wpviplearn/post-data',
		array(
			'label'              => __( 'Post Data', 'wpviplearn' ),
			'get_value_callback' => 'bde_post_data_callback',
			'uses_context'       => array( 'postId' ),
		)
	);
}

/**
 * Get the post data callback.
 *
 * @param array $args The arguments.
 * @param array $block The block.
 */
function bde_post_data_callback( $args, $block ) {
	if ( ! isset( $args['key'] ) ) {
		return null;
	}

	$post_id = $block->context['postId'] ?? get_the_ID();

	if ( 'title' === $args['key'] ) {
		return get_post_field( 'post_title', $post_id );
	} elseif ( 'excerpt' === $args['key'] ) {
		return get_post_field( 'post_excerpt', $post_id );
	} elseif ( 'permalink' === $args['key'] ) {
		return get_permalink( $post_id );
	}

	return null;
}

add_action( 'enqueue_block_editor_assets', 'bde_editor_assets' );

/**
 * Enqueue the editor assets.
 */
function bde_editor_assets() {
	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	if ( file_exists( "{$dir}/build/index.asset.php" ) ) {
		$asset = include "{$dir}/build/index.asset.php";

		wp_enqueue_script(
			'wpviplearn-editor-bindings',
			"{$url}/build/index.js",
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_set_script_translations( 'wpviplearn-editor-bindings', 'wpviplearn' );
	}
}
