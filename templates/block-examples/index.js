const { join } = require( 'path' );
const getRandomHexCode = require( '../../bin/randomHexCode' );

module.exports = {
	defaultValues: {
		transformer: ( view ) => {
			const hex = getRandomHexCode();
			return {
				...view,
				slug: `${ view.slug }-${ hex }`,
				title: `${ view.title } ${ hex }`,
				textdomain: 'block-development-examples',
				customBlockJSON: {
					...view.customBlockJSON,
					keywords: [ hex ],
				},
				customPackageJSON: {
					...view.customPackageJSON,
					name: `@block-development-examples/${ view.slug }-${ hex }`,
					scripts: {
						build: 'wp-scripts build',
						start: 'wp-scripts start',
						'plugin-zip': 'wp-scripts plugin-zip',
					},
					devDependencies: {
						'@wordpress/scripts': '^26.15.0',
					},
				},
			};
		},
		wpScripts: false,
		namespace: 'block-development-examples',
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
