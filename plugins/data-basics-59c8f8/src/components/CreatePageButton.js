import { useState } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';
import CreatePageForm from './CreatePageForm';

export default function CreatePageButton() {
	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );
	return (
		<>
			<Button onClick={ openModal } variant="primary">
				Create a new Page
			</Button>
			{ isOpen && (
				<Modal onRequestClose={ closeModal } title="Create a new page">
					<CreatePageForm
						onCancel={ closeModal }
						onSaveFinished={ closeModal }
					/>
				</Modal>
			) }
		</>
	);
}
