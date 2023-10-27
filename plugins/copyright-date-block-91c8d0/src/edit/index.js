/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import CustomInspectorControls from './customInspectorControls';
import getDisplayDate from '../utils/getDisplayDate';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { showStartingYear, startingYear } = attributes;
	const displayDate = getDisplayDate( { showStartingYear, startingYear } );

	const propsCustomInspectorControls = {
		showStartingYear,
		startingYear,
		setAttributes,
	};
	return (
		<>
			<CustomInspectorControls { ...propsCustomInspectorControls } />
			<p { ...useBlockProps() }>© { displayDate }</p>
		</>
	);
}
