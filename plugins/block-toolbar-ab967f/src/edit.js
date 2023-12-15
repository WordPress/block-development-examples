import {
	useBlockProps,
	RichText,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { external } from '@wordpress/icons';

import './editor.scss';

const urlBlockDevelopmentExamples = `https://github.com/wptrainingteam/block-development-examples`;
const redirectToMoreExamples = () =>
	window.confirm( 'Want to redirect to "Block Development Examples" repo?' ) // eslint-disable-line no-alert
		? ( window.location = urlBlockDevelopmentExamples )
		: null;

export default function Edit( { className, attributes: attr, setAttributes } ) {
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={ attr.alignment }
						onChange={ onChangeAlignment }
					/>
					<ToolbarButton
						icon={ external }
						label="Redirect to more examples"
						onClick={ redirectToMoreExamples }
					/>
				</ToolbarGroup>
			</BlockControls>

			<RichText
				className={ className }
				style={ { textAlign: attr.alignment } }
				tagName="p"
				onChange={ onChangeContent }
				value={ attr.content }
			/>
		</div>
	);
}
