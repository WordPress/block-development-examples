<?php
gutenberg_enqueue_module( 'interactivity_api_countdown_3cd73e__view' );
?>

<?php
$currentDateTime = new DateTime();
$targetDateTime = new DateTime($attributes['date']);
$timeDifference = $currentDateTime->diff($targetDateTime);
// Extract the days, hours, minutes, and seconds
$context   = array(
	'days' => $timeDifference->d,
	'hours'  => $timeDifference->h,
	'minutes'  => $timeDifference->i,
	'seconds'  => $timeDifference->s,
);
?>

<div 
	<?php echo get_block_wrapper_attributes(); ?> 
	data-wp-interactive='{"namespace": "interactivityAPIExamples"}' 
	data-wp-context='<?php echo wp_json_encode($context); ?>' 
	data-wp-init="callbacks.startCountdown"
>
	<span><span data-wp-text="context.days"></span>D</span>
	<span><span data-wp-text="context.hours"></span>H</span>
	<span><span data-wp-text="context.minutes"></span>M</span>
	<span><span data-wp-text="context.seconds"></span>S</span>
</div>