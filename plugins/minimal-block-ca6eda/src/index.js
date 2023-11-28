import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType( metadata.name, {
	Edit() {
		return <p { ...useBlockProps() }>Hello World - Block Editor</p>;
	},
	Save() {
		return <p { ...useBlockProps.save() }>Hello World - Frontend</p>;
	},
} );
