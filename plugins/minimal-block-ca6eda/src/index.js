import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit() {
		return <p>Hello World - Block Editor</p>;
	},
	save() {
		return <p>Hello World - Frontend</p>;
	},
} );
