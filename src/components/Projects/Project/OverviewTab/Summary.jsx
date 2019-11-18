import React from 'react';
import { Grid } from 'semantic-ui-react';
import Wrapper from '../../StyledComponents/Wrapper';
import Technologies from './Technologies';

const Summary = ({mobile, tablet, computer, largeScreen, project}) => {

	return (
		<Grid.Column 
			className="summary-container"
			mobile={mobile} tablet={tablet} computer={computer} largeScreen={largeScreen} 
			textAlign="left" verticalAlign="top"
		>
			<Wrapper>
				<p>{project.summary}</p>
				<Technologies project={project} />
			</Wrapper>			
		</Grid.Column>
	);
}

export default Summary;