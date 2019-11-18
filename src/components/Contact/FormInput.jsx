import React from 'react';
import { Form } from 'semantic-ui-react';

const FormInput = ({ userInput, handleChange, handleBlur, error, name: {name, input, ...rest} }) => {
	const Component = Form[input];
	const errorContent = error !== ''? error : false;

	return (		
		<Component
			label={name[0].toUpperCase() + name.slice(1)} 
			name={name}
			value={userInput[name]}
			onChange={handleChange} 
			onBlur={handleBlur}
			required
			error={errorContent}
			{...rest}
		/>
	);
};

export default FormInput;