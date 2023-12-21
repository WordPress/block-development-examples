import { test, expect } from '@wordpress/e2e-test-utils-playwright';
/**
 * Internal dependencies
 */
import examples from '../../_data/examples.json';

const nestedBlocks = [
	'block-development-examples/counter-alpine-99def1',
	'block-development-examples/counter-jquery-99def1',
	'block-development-examples/counter-js-99def1',
	'block-development-examples/counter-react-99def1',
	'block-development-examples/counter-web-component-99def1',
];

const blocksToRemove = [
	'interactive-blocks-demos-99def1', // this contains nested blocks that are being added above.
	'interactivity-api-countdown-3cd73e', // This one is dynamically generating text. It will always fail so we need a different test for it.
];

test.describe( 'All blocks are inserted', () => {
	test.beforeEach( async ( { admin } ) => {
		// Create a new post before each test
		await admin.createNewPost();
	} );

	const blocks = [
		...nestedBlocks,
		...examples
			.filter( ( example ) => ! example.tags.includes( 'no-block' ) )
			.filter( ( example ) => ! blocksToRemove.includes( example.slug ) )
			.map(
				( example ) => `block-development-examples/${ example.slug }`
			),
	];

	blocks.forEach( async ( block ) => {
		test( `${ block } is inserted`, async ( { editor } ) => {
			// Insert a block
			await editor.insertBlock( { name: block } );
			// Test that post content matches snapshot
			expect( await editor.getEditedPostContent() ).toMatchSnapshot();
		} );
	} );
} );
