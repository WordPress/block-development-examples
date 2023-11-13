import { useSelect, useDispatch } from '@wordpress/data';
import PageForm from './PageForm';
import { store as coreDataStore } from '@wordpress/core-data';

export default function EditPageForm( { pageId, onCancel, onSaveFinished } ) {
	const { editEntityRecord } = useDispatch( coreDataStore );
	const handleChange = ( title ) =>
		editEntityRecord( 'postType', 'page', pageId, { title } );
	const { saveEditedEntityRecord } = useDispatch( coreDataStore );
	const handleSave = async () => {
		const updatedRecord = await saveEditedEntityRecord(
			'postType',
			'page',
			pageId
		);
		if ( updatedRecord ) {
			onSaveFinished();
		}
	};
	const { lastError, page, isSaving, hasEdits } = useSelect(
		( select ) => ( {
			page: select( coreDataStore ).getEditedEntityRecord(
				'postType',
				'page',
				pageId
			),
			lastError: select( coreDataStore ).getLastEntitySaveError(
				'postType',
				'page',
				pageId
			),
			isSaving: select( coreDataStore ).isSavingEntityRecord(
				'postType',
				'page',
				pageId
			),
			hasEdits: select( coreDataStore ).hasEditsForEntityRecord(
				'postType',
				'page',
				pageId
			),
		} ),
		[ pageId ]
	);

	return (
		<PageForm
			title={ page.title }
			onChangeTitle={ handleChange }
			hasEdits={ hasEdits }
			lastError={ lastError }
			isSaving={ isSaving }
			onCancel={ onCancel }
			onSave={ handleSave }
		/>
	);
}
