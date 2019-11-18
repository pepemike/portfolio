import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

const CustomModal = ({open, hide}) => (
	<Modal open={open} onClose={hide} size="tiny">
		<Modal.Actions>
			<Button color="green" onClick={hide}>
				<Icon name="remove" />Close
			</Button>
		</Modal.Actions>
		<Modal.Header>Thank you for your message. I will get back to you ASAP.</Modal.Header>
	</Modal>
);

export default CustomModal;