const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'gutenberg-examples',
		example: {},
		customPackageJSON: {
			files: [ '*' ],
		},
		customBlockJSON: {
			keywords: [ 'HEXCODE' ],
		},
	},
	variants: {
		static: {},
		dynamic: {
			render: 'file:./render.php',
		},
		'non-block': {},
	},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
