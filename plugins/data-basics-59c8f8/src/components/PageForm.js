import { Spinner, Button, TextControl } from '@wordpress/components';

export default function PageForm( {
	title,
	onChangeTitle,
	hasEdits,
	lastError,
	isSaving,
	onCancel,
	onSave,
} ) {
	return (
		<div className="my-gutenberg-form">
			<TextControl
				label="Page title:"
				value={ title }
				onChange={ onChangeTitle }
			/>
			{ lastError ? (
				<div className="form-error">Error: { lastError.message }</div>
			) : (
				false
			) }
			<div className="form-buttons">
				<Button
					onClick={ onSave }
					variant="primary"
					disabled={ ! hasEdits || isSaving }
				>
					{ isSaving ? (
						<>
							<Spinner />
							Saving
						</>
					) : (
						'Save'
					) }
				</Button>
				<Button
					onClick={ onCancel }
					variant="tertiary"
					disabled={ isSaving }
				>
					Cancel
				</Button>
			</div>
		</div>
	);
}
