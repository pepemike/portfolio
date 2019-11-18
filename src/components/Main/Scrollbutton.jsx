import React from 'react';
import { goToTop } from 'react-scrollable-anchor';
import { Icon } from 'semantic-ui-react';
import FixedButton from './StyledComponents/FixedButton';

const Scrollbutton = ({activeItem, setActiveItem}) => {

	const handleClick = () => {
		setActiveItem('home');
		goToTop();
	}

	return (
		activeItem !== 'home' && 
			<FixedButton icon className="scroll" onClick={handleClick}>
				<Icon name="arrow circle up" size="huge" />
			</FixedButton>	
	);
};

export default Scrollbutton;