import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const ProjectHeader = ({header, mobile, tablet}) => (
	<Grid.Column 
		mobile={mobile} tablet={tablet} textAlign="center"
	>
		<Header  as="h2" className="project-title">{header}</Header>
	</Grid.Column>	
);

export default ProjectHeader;