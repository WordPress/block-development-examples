import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

registerBlockType( metadata.name, {
    edit: function () {
        return <p>Hello World - Block Editor</p>;
    },
    save: function () {
        return <p>Hello World - Frontend</p>;
    },
} );
