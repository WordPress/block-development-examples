const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'gutenberg-examples',
		example: {},
		wpScripts: false,
		customPackageJSON: {
			scripts: {
				build: 'wp-scripts build',
				format: 'wp-scripts format',
				'lint:css': 'wp-scripts lint-style',
				'lint:js': 'wp-scripts lint-js',
				'packages-update': 'wp-scripts packages-update',
				'plugin-zip': 'wp-scripts plugin-zip',
				start: 'wp-scripts start',
			},
			devDependencies: {
				'@wordpress/scripts': '^26.12.0',
			},
			files: [ '*' ],
		},
		customBlockJSON: {
			keywords: [ 'HEXCODE' ],
		},
	},
	variants: {},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
