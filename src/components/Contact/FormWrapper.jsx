import React, { useReducer } from 'react';

const FormWrapper = (props) => {

	const inputFields = (value) => ({
		name: value,
		email: value,
		message: value
	}); 

	const [ userInput, setUserInput ] = useReducer(
		(state, newState) => ({...state, ...newState}),
		inputFields('')
	);

	const [errors, setError] = useReducer(
		(state, newState) => ({...state, ...newState}),
		inputFields(null)
	);

	const handleChange = ({target: {name, value}}) => {
	
		setUserInput({[name]: value});

		if (errors[name] !== null) {
			validate({name, value});
		}
	};

	const handleBlur = (e) => {
		validate(e.target);			
	};

	const validate = ({name, value}) => {
		let trimmedValue = value.trim();

		if (trimmedValue) {
			validateContent({name, value: trimmedValue});
		}
		if (!trimmedValue) {
			setError({[name] : 'This field is required.'})
		}
	};

	const validateContent = ({name, value}) => {
		let regExp, message;
		switch (name) {
			case 'name':
				regExp = /^[\w\s-]+$/;
				message = 'Allowed characters: letters, numbers, underscores and dashes.'
				break;
			case 'email':
				regExp = /^[-.\w]+@([\w-]+\.)+[\w-]+$/;
				message = 'Please enter a valid email address.'
				break;
			default: 
				regExp = /^[\w\s.?,;:!%#()-]+$/;	
				message = 'Allowed characters: letters, numbers and the following special characters .?,;:!%#()-_'
		}
		if (regExp.test(value) !== true) {
			setError({ [name] : message})
		} else {
			setError({ [name] : ''})
		}
	};

	const validateBeforeSubmit = () => {
		//display all error messages if submit is clicked before any field has been focused
		Object.keys(userInput).forEach(
			(item) => {
				validate({name: item, value: userInput[item]});
			}
		);		
	};	

	const resetAll = () => {
		setUserInput(inputFields(''));
		setError(inputFields(null));
	};
	
	return (
		props.render({ validateBeforeSubmit, handleChange, handleBlur, userInput, errors, resetAll })				
	);
};

export default FormWrapper;