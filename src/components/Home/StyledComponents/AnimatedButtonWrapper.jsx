import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { slideup } from '../../Common/Animations';

const AnimatedButtonWrapper = styled(({stackable, ...props}) => <Grid.Column {...props} />).attrs(props => ({
	mobile: 16,
	tablet: 8,
	floated: props.stackable? 'right' : null,
	verticalAlign: 'bottom'
}))`
	bottom: -10em;
	opacity: 0;
	animation: ${slideup} 1s ease-in 2s forwards; 
`;

export default AnimatedButtonWrapper;