<?php
$current_year       = date( "Y" );
$starting_year      = isset( $attributes['startingYear'] ) 
	? $attributes['showStartingYear'] 
	: false;
$show_starting_year = isset( $attributes['showStartingYear'] ) 
	? $attributes['showStartingYear'] 
	: false;

if ( $starting_year && $show_starting_year ) {
	$display_date = $starting_year . '–' . $current_year;
} else {
	$display_date = $current_year;
}

?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	© <?php echo esc_html( $display_date ); ?>
</p>
