import React, { useContext } from 'react';
import { ViewportContext } from '../../Common/Context';
import { Tab } from 'semantic-ui-react';
import Overview from './OverviewTab/OverviewTab';
import Details from './DetailsTab/DetailsTab';


const Project = ({ project }) => {
	const { stackable } = useContext(ViewportContext);
	
	const props = { stackable, project };	

	return (				
		<Tab panes={
			[
				{
					menuItem: 'Overview',
					render: () => <Overview {...props} />
				},
				{
					menuItem: 'Details',
					render: () => <Details {...props}  /> 						
				}
			]
		} />	
	);
};

export default Project;