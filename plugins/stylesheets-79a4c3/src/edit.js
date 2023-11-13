/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const customStyleUnderline = {
		textDecoration: 'green wavy underline',
	};

	const blockProps = useBlockProps( {
		style: customStyleUnderline,
		className: 'hasPerspective',
	} );

	return (
		<p { ...blockProps }>
			{ __(
				'Hello World, step 2 (from the editor, in green).',
				'block-development-examples'
			) }
		</p>
	);
}
