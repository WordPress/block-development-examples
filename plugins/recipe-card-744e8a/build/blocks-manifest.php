<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/recipe-card-744e8a',
		'version' => '0.1.0',
		'title' => 'Recipe Card 744e8a',
		'category' => 'widgets',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h2'
			),
			'mediaID' => array(
				'type' => 'number'
			),
			'mediaURL' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'img',
				'attribute' => 'src'
			),
			'ingredients' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.ingredients'
			),
			'instructions' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.steps'
			)
		),
		'example' => array(
			'attributes' => array(
				'title' => 'Chocolate Chip Cookies',
				'mediaID' => 1,
				'mediaURL' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
				'ingredients' => array(
					array(
						'type' => 'li',
						'props' => array(
							'children' => array(
								'flour'
							)
						)
					),
					array(
						'type' => 'li',
						'props' => array(
							'children' => array(
								'sugar'
							)
						)
					),
					array(
						'type' => 'li',
						'props' => array(
							'children' => array(
								'chocolate'
							)
						)
					),
					array(
						'type' => 'li',
						'props' => array(
							'children' => array(
								'💖'
							)
						)
					)
				),
				'instructions' => array(
					array(
						'type' => 'p',
						'props' => array(
							'children' => array(
								'Mix, Bake, Enjoy!'
							)
						)
					)
				)
			)
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'keywords' => array(
			'744e8a'
		)
	)
);
