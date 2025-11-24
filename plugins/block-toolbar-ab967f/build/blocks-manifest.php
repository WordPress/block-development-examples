<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/block-toolbar-ab967f',
		'version' => '0.1.0',
		'title' => 'Block Toolbar ab967f',
		'category' => 'widgets',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'none'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => 'Hello World',
				'alignment' => 'right'
			)
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'keywords' => array(
			'ab967f'
		)
	)
);
