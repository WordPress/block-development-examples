<?php
/*
* Plugin Name: Minimal Gutenberg Block e621a6
* Description: This is a plugin demonstrating how to register a minimal block for the Gutenberg editor.
* Version: 1.0
* Author: Gutenberg Examples
*/

defined( 'ABSPATH' ) || exit;

function register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'register_block' );

?>

