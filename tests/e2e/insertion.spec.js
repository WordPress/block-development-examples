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
];

test.describe( 'Block added to block editor', () => {
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
		test( block, async ( { editor } ) => {
			// Insert a block
			await editor.insertBlock( { name: block } );

			if (
				block !==
				'block-development-examples/interactivity-api-countdown-3cd73e'
			) {
				// Test that post content matches snapshot
				expect( await editor.getEditedPostContent() ).toMatchSnapshot();
			} else {
				// This block contains dynamic content, so we can't match the snapshot.
				expect( await editor.getEditedPostContent() ).toContain(
					`<!-- wp:${ block }`
				);
			}
		} );
	} );
} );
