import React, { useState } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import Modal from './Modal';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

const CustomForm = ({formFields, stackable, validateBeforeSubmit, handleChange, handleBlur, userInput, errors, resetAll }) => {

	const [displayModal, setDisplayModal] = useState(false);

	const sendEmail = (templateId, variables) => {
		window.emailjs.send(
		  'gmail', templateId,
		  variables
		).then(res => {
			console.log('Email successfully sent!')
		})
		.catch(err => console.error('Error: ', err))
	};

	const hasError = () => Object.values(errors).every( value => value === '') !== true;
	
	const handleFormSubmit = () => {
		validateBeforeSubmit();
		if (hasError()) return false;		
		sendEmail('my_template_id', {message_html: userInput.message, from_name: userInput.name, reply_to: userInput.email});
		resetAll();
		setDisplayModal(true);
		hideModal();
	};

	const hideModal = () => {
		setTimeout(
			() => {
				setDisplayModal(false);
			}, 4000
		);
	}

	return (
		<Grid.Row centered>
			<Grid.Column mobile="16" tablet="9" computer="8" largeScreen="9">

				<Form size={stackable? 'large' : 'massive'} onSubmit={handleFormSubmit} noValidate error>
					{formFields.map( field => 
						<FormInput 
							key={field.name} name={field} userInput={userInput} 
							error={errors[field.name]}
							handleChange={handleChange} 
							handleBlur={handleBlur}
						/>
					)}
					<SubmitButton />
				</Form>
								
				<Modal open={displayModal} hide={() => {setDisplayModal(false)}} />
				
			</Grid.Column>
		</Grid.Row>
	);
};

export default CustomForm;