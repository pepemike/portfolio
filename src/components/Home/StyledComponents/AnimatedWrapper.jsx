import React, {useState} from 'react';
import styled from 'styled-components';
import { slideright, slideleft } from '../../Common/Animations';
import { Grid, Transition } from 'semantic-ui-react';
import { fadedown } from '../../Common/Animations';

const Wrapper = styled(Grid.Column)`
	opacity: 0;
	animation: ${fadedown} 1.5s linear 1.5s forwards;

	@media only screen and (min-width: 992px) {
		${props => props.className === 'image-wrapper'? 'right' : 'left'} : -100%;
		opacity: .5;
		animation: ${props => props.className === 'image-wrapper'? slideleft : slideright} 2.5s ease-in-out forwards;
	}
`;

const AnimatedWrapper = ({
	stackable, 
	tablet, 
	verticalAlign = stackable? 'bottom' : 'middle',
	className,
	visible, 
	children
}) => {

	const [transitionActive, activateTransition] = useState(false);

	return (
		<Wrapper
			className={className}
			mobile="15" tablet={tablet} computer="7" 
			verticalAlign={verticalAlign}
			floated={stackable? null : 'right'} 
			onAnimationEnd={() => activateTransition(true)}
		>{
			!stackable && children
		}
		{	
			stackable && !transitionActive && children 
		}

		{	
			stackable && 
			transitionActive && 
			<Transition 
				animation={'fade down'} 
				duration={1000} 
				visible={visible}
				children={children}
			/>
		} 
		</Wrapper>
	);
}

export default AnimatedWrapper;