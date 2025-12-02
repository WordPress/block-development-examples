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
 * @package block-development-examples
 */

$base_url = get_site_url();
$state    = array(
	'base_url'    => $base_url,
	'currentSlug' => get_post_field( 'post_name', get_post() ),
	'slugs'       => array(
		'paul-mccartney|Paul',
		'john-lennon|John',
		'george-harrison|George',
		'ringo-starr|Ringo',
	),
);


/*
if ( ! function_exists( 'format_url' ) ) {
	// Helper function to properly format URLs.
	$format_url = function ( $base, $path ) {
		// Ensures base URL ends with / .
		// Example: "https://example.com" → "https://example.com/" .
		$base_with_slash = trailingslashit( $base );

		// Removes trailing slashes from path.
		// Example: "john-lennon/" → "john-lennon" .
		$path_no_trailing = untrailingslashit( $path );

		// Removes leading slashes from path.
		// Example: "/john-lennon" → "john-lennon" .
		$path_clean = ltrim( $path_no_trailing, '/' );

		// Combine base URL with cleaned path
		// Result: "https://example.com/" + "john-lennon" = "https://example.com/john-lennon" .
		return $base_with_slash . $path_clean;
	};
}
*/

if ( $attributes['prev'] ) {
	$state['prev'] = $base_url . '/' . $attributes['prev'];
}
if ( $attributes['next'] ) {
	$state['next'] = $base_url . '/' . $attributes['next'];
}

wp_interactivity_state(
	'router-2f43f8',
	$state,
);

?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive="router-2f43f8"
	data-wp-router-region="region-example-2f43f8"
	data-wp-watch--newPage="callbacks.newPage"
>
	<a href="/">🏠 Start Page</a>
		<p><small><em>Displaying region "region-example-2f43f8" from <a class="non-interactive-router-link" data-wp-bind--href="state.urlRegionDisplay" data-wp-text="state.urlRegionDisplay"></a> (non-interactive router link)</em></small></p>
		<ul class="beatles-links">
			<template data-wp-each="state.slugs">
				<li><a 
				data-wp-text="state.itemName"
				data-wp-bind--href="state.itemSlug"
				data-wp-class--current="state.isCurrentSlug"
				></a></li>
			</template>
		</ul>
		<p data-wp-bind--hidden="state.areNavigationLinksVisible"><small><em>Click "Next" (or "Prev") to get more info from other pages (without a page reload)</em></small></p>
		<p data-wp-bind--hidden="!state.areNavigationLinksVisible"><small><em>Click on any of the beatles names (links) to start the navigation</em></small></p>
		
		<nav class="navigation-links">
				<a
					class="navigation-link-prev"
					data-wp-bind--hidden="!state.prev"
					data-wp-bind--href="state.prev"
				>&lt; Prev</a>
				<a
					class="navigation-link-next"
					data-wp-bind--hidden="!state.next"
					data-wp-bind--href="state.next"
				>Next &gt;</a>
		</nav>

		<div class="box-content">
			<?php echo wp_kses_post( $content ); ?>
		</div>

		
		<div class="debug-info">
			<p>block (region in display) attributes: <code style="text-align: left;">
				<?php echo wp_json_encode( $attributes ); ?>
			</code></p>
			<p>state.urlRegionDisplay: <code data-wp-text="state.urlRegionDisplay"></code></p>
		</div>




</div>
