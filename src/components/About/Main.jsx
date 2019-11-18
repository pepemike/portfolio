import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import Footer from './Footer';
import Wrapper from '../Projects/StyledComponents/Wrapper';

const Content = ({data: paragraphs, breakpoint}) => (
	<Fragment>
		<Grid.Row>
			<Grid.Column mobile="16" tablet="11" computer="10" textAlign="justified" as={Wrapper}>
				{paragraphs.map( paragraph => 
					<p key={paragraph}>{paragraph}</p>
				)}
			</Grid.Column>
		</Grid.Row>	
		<Footer breakpoint={breakpoint} />
	</Fragment>
);

export default Content;