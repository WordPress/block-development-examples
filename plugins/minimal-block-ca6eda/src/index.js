import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'gutenberg-examples/minimal-block-ca6eda', {
    edit: function () {
        return <p>Hello World - Block Editor</p>;
    },
    save: function () {
        return <p>Hello World - Frontend</p>;
    },
} );
