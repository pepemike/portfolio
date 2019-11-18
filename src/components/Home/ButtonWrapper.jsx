import React from 'react';
import { Grid, Transition } from 'semantic-ui-react';

const ButtonWrapper = ({ stackable, duration, visible, children }) => (
	<Grid.Column 
		mobile="16" tablet="8"
		floated={stackable? 'right' : null}
		verticalAlign="bottom"
	>
		<Transition animation="fade down" duration={duration} visible={visible}>{children}</Transition>
	</Grid.Column>
);

export default ButtonWrapper;