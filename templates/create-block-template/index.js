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
			};
		},
		namespace: 'gutenberg-examples',
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
