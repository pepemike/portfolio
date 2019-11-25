import React from 'react';
import { Transition, Button } from 'semantic-ui-react';
import ButtonWrapper from './StyledComponents/AnimatedButtonWrapper';
import StyledIcon from './StyledComponents/StyledIcon';

const CustomButton = ({breakpoint, arrowMoving, setArrowMoving, setMenuItemClicked, stackable, visible}) => {

	const handleClick = (e) => {
		e.preventDefault();
		setArrowMoving(false);
		setMenuItemClicked('projects');
	};

	return (
		<ButtonWrapper stackable={stackable}>
			<Transition animation="fade" duration="1500" visible={visible}>
				<Button 
					as="a" href="#projects" inverted size={breakpoint === 'mobile-small'? 'huge' : 'massive'} fluid
					onClick={handleClick} 
				>					
					<span>View portfolio</span>
					<Transition animation="bounce" duration={1000} visible={arrowMoving}>
						<StyledIcon name="hand point down outline" />
					</Transition>	
				</Button>
			</Transition>
		</ButtonWrapper>
	);
}

export default CustomButton;