import path from 'path';
import { test, expect } from '@wordpress/e2e-test-utils-playwright';
import getBlocksRepo from '../utils/getBlocksRepo';

const PLUGINS_PATH = path.join( __dirname, '..', '..', 'plugins' );
const blocksRepo = getBlocksRepo( PLUGINS_PATH );

test.describe( 'Block added to block editor', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	blocksRepo.forEach( ( { name, parent } ) => {
		test( name, async ( { editor } ) => {
			// Blocks declaring a parent cannot be inserted at the document
			// root, so they are nested inside the block they belong to.
			await editor.insertBlock(
				parent ? { name: parent, innerBlocks: [ { name } ] } : { name }
			);
			expect( await editor.getEditedPostContent() ).toContain(
				`<!-- wp:${ name }`
			);
		} );
	} );
} );
