<?php
/**
 * Render.php
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package block-development-examples
 */

?>
<p <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<?php esc_html_e( 'Block with Dynamic Rendering – hello!!!', 'block-development-examples' ); ?>
</p>
