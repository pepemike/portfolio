import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import DetailsWrapper from '../../StyledComponents/DetailsWrapper';
import Features from './Features';
import FadeIn from '../../StyledComponents/FadeIn';

const DetailsTab = ({ project }) => {
	const { details, features } = project;
	return (
		<Tab.Pane>
			<FadeIn>
				<Grid.Column mobile="16" tablet="12" computer="14" largeScreen="12">
					<DetailsWrapper>	
						<div>				
							{details.map(item => 
								<p key={item}>{item}</p>
							)}						
							<Features features={features} />	
						</div>					
					</DetailsWrapper>	
				</Grid.Column>
			</FadeIn>
		</Tab.Pane> 
	);	
}

export default DetailsTab;