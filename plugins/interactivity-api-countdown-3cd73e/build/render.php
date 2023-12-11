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
 * @package create-block
 */

gutenberg_enqueue_module( 'interactivity_api_countdown_3cd73e__view' );

$current_date_time = new DateTime();
$target_date_time  = new DateTime( $attributes['date'] );
$time_difference   = $current_date_time->diff( $target_date_time );
// Extract the days, hours, minutes, and seconds.
$context = array(
	'days'    => $time_difference->d,
	'hours'   => $time_difference->h,
	'minutes' => $time_difference->i,
	'seconds' => $time_difference->s,
);
?>

<div 
	<?php echo get_block_wrapper_attributes(); // phpcs:ignore ?> 
	data-wp-interactive='{"namespace": "interactivityAPIExamples"}' 
	data-wp-context='<?php echo wp_json_encode( $context ); ?>' 
	data-wp-init="callbacks.startCountdown"
>
	<span><span data-wp-text="context.days"></span>D</span>
	<span><span data-wp-text="context.hours"></span>H</span>
	<span><span data-wp-text="context.minutes"></span>M</span>
	<span><span data-wp-text="context.seconds"></span>S</span>
</div>