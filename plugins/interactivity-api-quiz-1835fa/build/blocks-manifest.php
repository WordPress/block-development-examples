<?php
// This file is generated. Do not modify it manually.
return array(
	'quiz-1835fa' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/quiz-1835fa',
		'version' => '1.0.0',
		'title' => 'Quiz',
		'category' => 'widgets',
		'keywords' => array(
			'1835fa'
		),
		'icon' => 'smiley',
		'description' => 'Make a quiz',
		'supports' => array(
			'interactivity' => true
		),
		'parent' => array(
			'block-development-examples/quiz-progress-1835fa'
		),
		'attributes' => array(
			'question' => array(
				'type' => 'string'
			),
			'typeOfQuiz' => array(
				'type' => 'string',
				'enum' => array(
					'boolean',
					'input'
				),
				'default' => 'boolean'
			),
			'answer' => array(
				'type' => array(
					'string',
					'boolean'
				),
				'default' => true
			)
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	),
	'quiz-progress-1835fa' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-development-examples/quiz-progress-1835fa',
		'version' => '1.0.0',
		'title' => 'Quiz Progress',
		'category' => 'widgets',
		'keywords' => array(
			'1835fa'
		),
		'icon' => 'smiley',
		'description' => 'Show the quiz progress and check the answers',
		'supports' => array(
			'interactivity' => true
		),
		'textdomain' => 'block-development-examples',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	)
);
