<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/interactivity-router-2f43f8',
		'version' => '0.1.0',
		'title' => '⭐️ interactivity-router',
		'category' => 'widgets',
		'icon' => 'media-interactive',
		'description' => 'Example of how interactivity router works',
		'example' => array(
			
		),
		'keywords' => array(
			'2f43f8',
			'interactivity-api'
		),
		'supports' => array(
			'interactivity' => true
		),
		'attributes' => array(
			'prev' => array(
				'type' => 'string'
			),
			'next' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	)
);
