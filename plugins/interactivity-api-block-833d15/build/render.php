<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$unique_id = uniqid( 'p-' );
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive
	data-wp-context='{ "create-block": { "isOpen": false } }'
	data-wp-effect="effects.create-block.logIsOpen"
>
	<button
		data-wp-on--click="actions.create-block.toggle"
		data-wp-bind--aria-expanded="context.create-block.isOpen"
		aria-controls="p-<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php esc_html_e( 'Toggle', '03-block-interactive' ); ?>
	</button>

	<p
		id="p-<?php echo esc_attr( $unique_id ); ?>"
		data-wp-bind--hidden="!context.create-block.isOpen"
	>
		<?php
			esc_html_e( '03 Interactivity API Block - hello from an interactive block!', '03-block-interactive' );
		?>
	</p>
</div>
