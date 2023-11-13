/**
 * WordPress Dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const customStyleUnderline = {
		textDecoration: 'red underline',
		textDecorationThickness: '3px',
	};

	const blockProps = useBlockProps.save( {
		style: customStyleUnderline,
		className: 'hasPerspective',
	} );

	return (
		<p { ...blockProps }>
			{ __(
				'Hello World, step 2 (from the frontend, in red).',
				'block-development-examples'
			) }
		</p>
	);
}
