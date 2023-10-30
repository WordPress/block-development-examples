<?php
/*
* Plugin Name: WP Block Development Examples - Minimal Block ca6eda
*/

function minimal_block_ca6eda___register_block() {
    register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'minimal_block_ca6eda___register_block' );
