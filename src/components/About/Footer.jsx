import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const Footer = ({breakpoint}) => (
	<Grid.Row>
		<Grid.Column textAlign="center">
			<a href="https://github.com/alexcodes-portfolio" style={{color: 'rgb(255, 248, 126)'}} >
				<Icon name="github" size="huge" />
				{(breakpoint !== 'mobile' && breakpoint !== 'mobile-small') &&
					<span>github.com/alexcodes-portfolio</span>
				}
			</a>
		</Grid.Column>
	</Grid.Row>
);

export default Footer;