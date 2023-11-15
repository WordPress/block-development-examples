import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import PageForm from './PageForm';

export default function CreatePageForm( { onCancel, onSaveFinished } ) {
	const [ title, setTitle ] = useState();
	const { saveEntityRecord } = useDispatch( coreDataStore );
	const handleSave = async () => {
		const savedRecord = await saveEntityRecord( 'postType', 'page', {
			title,
			status: 'publish',
		} );
		if ( savedRecord ) {
			onSaveFinished();
		}
	};
	const { lastError, isSaving } = useSelect(
		( select ) => ( {
			// Notice the missing pageId argument:
			lastError: select( coreDataStore ).getLastEntitySaveError(
				'postType',
				'page'
			),
			// Notice the missing pageId argument
			isSaving: select( coreDataStore ).isSavingEntityRecord(
				'postType',
				'page'
			),
		} ),
		[]
	);
	return (
		<PageForm
			title={ title }
			onChangeTitle={ setTitle }
			hasEdits={ !! title }
			lastError={ lastError }
			isSaving={ isSaving }
			onSave={ handleSave }
			onCancel={ onCancel }
		/>
	);
}
