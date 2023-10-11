import './index.css';
import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'gutenberg-examples/counter-jquery-99def1', {
	edit: Edit,
	save: Save,
} );
