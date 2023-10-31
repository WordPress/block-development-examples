/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import getDisplayDate from './utils/getDisplayDate';

export default function Save( props ) {
	const { attributes } = props;
	const { showStartingYear, startingYear } = attributes;
	const displayDate = getDisplayDate( { showStartingYear, startingYear } );

	return <p { ...useBlockProps.save() }>© { displayDate }</p>;
}
