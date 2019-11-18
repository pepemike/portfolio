import React, { Fragment } from 'react';
import FormWrapper from './FormWrapper';
import Form from './Form';
import Footer from './Footer';

const ContactContent = ({data: formFields, stackable}) => (
	<Fragment>
		<FormWrapper render={params => (
			<Form formFields={formFields} stackable={stackable} {...params} />
		)}/>	
		<Footer />
	</Fragment>
);

export default ContactContent;