<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/block-supports-6aa4dd',
		'version' => '0.1.0',
		'title' => 'Block Supports 6aa4dd',
		'category' => 'widgets',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => 'Hello world'
			)
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'keywords' => array(
			'6aa4dd'
		),
		'supports' => array(
			'color' => array(
				'text' => true,
				'link' => true,
				'background' => true
			)
		)
	)
);
