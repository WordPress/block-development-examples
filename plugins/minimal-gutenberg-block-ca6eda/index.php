<?php
/*
* Plugin Name: Gutenberg Examples - Minimal Block ca6eda
*/

function register_block() {
    register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'register_block' );
