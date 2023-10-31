/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function customInspectorControls( {
	showStartingYear,
	startingYear,
	setAttributes,
} ) {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
				<ToggleControl
					checked={ showStartingYear }
					label={ __( 'Show starting year', 'copyright-date-block' ) }
					onChange={ () =>
						setAttributes( {
							showStartingYear: ! showStartingYear,
						} )
					}
				/>
				{ showStartingYear && (
					<TextControl
						label={ __( 'Starting year', 'copyright-date-block' ) }
						value={ startingYear }
						onChange={ ( year ) =>
							setAttributes( { startingYear: year } )
						}
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
}
