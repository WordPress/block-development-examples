<?php
$current_year       = date( "Y" );
$show_starting_year = $attributes['showStartingYear'];
$starting_year      = $attributes['startingYear'];

if ( $show_starting_year && $starting_year ) {
	$display_date = $starting_year . '–' . $current_year;
} else {
	$display_date = $current_year;
}

?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	© <?php echo esc_html( $display_date ); ?>
</p>
