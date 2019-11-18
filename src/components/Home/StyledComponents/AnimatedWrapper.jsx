import React from 'react';
import styled from 'styled-components';
import { slideright, slideleft } from '../../Common/Animations';
import { Grid, Transition } from 'semantic-ui-react';

const Wrapper = styled(Grid.Column)`

	@media only screen and (min-width: 992px) {
		${props => props.className === 'image-wrapper'? 'right' : 'left'} : -100%;
		opacity: .5;
		animation: ${props => props.className === 'image-wrapper'? slideleft : slideright} 2s ease-in-out forwards;
	}
`;

const AnimatedWrapper = ({
	stackable, 
	tablet, 
	verticalAlign = stackable? 'bottom' : 'middle',
	className,
	duration, 
	visible, 
	changeDuration, 
	children
}) =>  (
	<Wrapper
		className={className}
		mobile="15" tablet={tablet} computer="7" 
		verticalAlign={verticalAlign}
		floated={stackable? null : 'right'} 
	>{
		!stackable && visible &&
			children
	}
	{	stackable && 
			<Transition 
				animation={'fade down'} 
				duration={duration} 
				visible={visible}
				onComplete={changeDuration}
				children={children}
			/>
	}
	</Wrapper>
);

export default AnimatedWrapper;