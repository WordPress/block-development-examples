import './index.css';
import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'block-development-examples/counter-react-99def1', {
	edit: Edit,
	save: Save,
} );
