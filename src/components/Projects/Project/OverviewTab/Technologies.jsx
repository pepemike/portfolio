import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import List from '../../List';

const Technologies = ({project}) => (
	<Fragment>
		<Header size="tiny">Technologies:</Header>

		<Header as="h4">Front-end:</Header>
		<List horizontal items={project.frontEnd} />

		<Header as="h4">Back-end:</Header>
		<List horizontal items={project.backEnd} />
	</Fragment>
); 

export default Technologies;