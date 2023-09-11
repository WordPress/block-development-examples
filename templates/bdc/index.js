import { join } from 'path' ;

export default {
	defaultValues: {
		namespace: 'gutenberg-examples',
		category: 'gutenberg-examples',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		keywords: [ "Gutenberg Examples" ],
		icon: "smiley",
		
		"title": "⭐️ Dynamic Block",
		
		"icon": "smiley",
		"description": "Example block scaffolded with Create Block tool.",
		"example": {},
		"supports": {
			"html": false
		},
		"keywords": [ "64756b" ],
		"textdomain": "01-block-dynamic",
		"editorScript": "file:./index.js",
		"editorStyle": "file:./index.css",
		"style": "file:./style-index.css",
		"render": "file:./render.php",
		"viewScript": "file:./view.js"

	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
		plugin: {},
	},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
