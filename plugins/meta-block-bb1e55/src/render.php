<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-development-examples
 */

global $post;
?>
<p <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<?php esc_html_e( get_post_meta( $post->ID, 'myguten_meta_block_field', true ) ); // phpcs:ignore ?>
</p>
