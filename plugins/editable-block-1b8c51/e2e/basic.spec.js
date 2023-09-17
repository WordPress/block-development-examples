/**
 * WordPress dependencies
 */
import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
} from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import json from '../src/block.json';
const { title, name } = json;

it( `${ title } block should be available`, async () => {
	await createNewPost();
	await insertBlock( title );

	// Check if block was inserted
	expect( await page.$( `[data-type="${ name }"]` ) ).not.toBeNull();

	expect( await getEditedPostContent() ).toMatchInlineSnapshot( `
		"<!-- wp:gutenberg-examples/editable-block-1b8c51 -->
		<p class=\\"wp-block-gutenberg-examples-editable-block-1b8c51\\"></p>
		<!-- /wp:gutenberg-examples/editable-block-1b8c51 -->"
	` );
} );
