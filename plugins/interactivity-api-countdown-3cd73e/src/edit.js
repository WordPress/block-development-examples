import { __ } from '@wordpress/i18n';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import {
	DateTimePicker,
	ToolbarGroup,
	ToolbarButton,
	Dropdown,
} from '@wordpress/components';
import { backup } from '@wordpress/icons';

const DOWN = 40;

export default function Edit( { attributes, setAttributes } ) {
	const { date } = attributes;
	if ( ! date ) {
		setAttributes( {
			date: new Date().toISOString().slice( 0, 19 ).replace( 'T', ' ' ),
		} );
	}

	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup>
					<Dropdown
						renderContent={ ( { onClose } ) => (
							<DateTimePicker
								currentDate={ date }
								onChange={ ( value ) =>
									setAttributes( { date: value } )
								}
								is12Hour={ true }
								onClose={ onClose }
							/>
						) }
						renderToggle={ ( { isOpen, onToggle } ) => {
							const openOnArrowDown = ( event ) => {
								if ( ! isOpen && event.keyCode === DOWN ) {
									event.preventDefault();
									onToggle();
								}
							};
							return (
								<ToolbarButton
									aria-expanded={ isOpen }
									icon={ backup }
									title={ __(
										'Change Date',
										'block-development-examples'
									) }
									onClick={ onToggle }
									onKeyDown={ openOnArrowDown }
								/>
							);
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<div { ...useBlockProps() }>{ date }</div>
		</>
	);
}
