/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { calendar } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: calendar,
	edit: Edit,
	save: Save,
} );
