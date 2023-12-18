import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div
			{ ...useBlockProps.save() }
			style={ {
				backgroundColor: attributes.bg_color,
				color: attributes.text_color,
			} }
		>
			{ attributes.message }
		</div>
	);
}
