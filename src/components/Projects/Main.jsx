import React from 'react';
import { Grid } from 'semantic-ui-react';
import Project from './Project/Project';

const Main = ({data: projects = []}) => {
	
	return (	
		
			<Grid.Column mobile="16">
				{ projects.map( project => 
					<Project key={project.id} project={project} />
				)}					
			</Grid.Column>
	);		
};

export default Main;