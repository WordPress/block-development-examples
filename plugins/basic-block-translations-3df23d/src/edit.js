/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { blockStyle } from './index';

const Edit = () => {
	const blockProps = useBlockProps( { style: blockStyle } );
	return (
		<div { ...blockProps }>
			{ __(
				'Hello World!! (from the editor).',
				'block-development-examples'
			) }
		</div>
	);
};
export default Edit;
