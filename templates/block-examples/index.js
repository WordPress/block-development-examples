const { join } = require( 'path' );
const getRandomHexCode = require( '../../bin/randomHexCode' );

module.exports = {
	defaultValues: {
		transformer: ( view ) => {
			const hex = getRandomHexCode();
			return {
				...view,
				slug: `${ view.slug }-${ hex }`,
				customBlockJSON: {
					...view.customBlockJSON,
					keywords: [ hex ],
				},
				customPackageJSON: {
					...view.customPackageJSON,
					name: `@wp-block-development-examples/${ view.slug }-${ hex }`,
					scripts: {
						build: 'wp-scripts build',
						start: 'wp-scripts start',
						format: 'wp-scripts format',
						'lint:css': 'wp-scripts lint-style',
						'lint:js': 'wp-scripts lint-js',
						'packages-update': 'wp-scripts packages-update',
						'plugin-zip': 'wp-scripts plugin-zip',
					},
					devDependencies: {
						'@wordpress/scripts': '^26.15.0',
					},
				},
			};
		},
		wpScripts: false,
		namespace: 'wp-block-development-examples',
		example: {},
		customPackageJSON: {
			files: [ '*' ],
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
