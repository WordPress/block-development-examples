import './index.css';
import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'gutenberg-examples/counter-web-component-99def1', {
	edit: Edit,
	save: Save,
} );
