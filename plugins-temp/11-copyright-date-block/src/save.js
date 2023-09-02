/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( props ) {
	const { attributes } = props;
	const { showStartingYear, startingYear } = attributes;

	const currentYear = new Date().getFullYear();
	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + currentYear;
	} else {
		displayDate = currentYear;
	}

	return <p { ...useBlockProps.save() }>© { displayDate }</p>;
}
