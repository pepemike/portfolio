import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import ListItem from './ListItem';

const SkillsContent = ({ data: skills, stackable }) => (
	<Grid.Row centered>
		<Grid.Column 
			textAlign="center" mobile="16" tablet="10" computer="13" largeScreen="10" widescreen="8"
		>						
			<List horizontal relaxed={stackable? false : 'very'} size="huge">
				{
					skills.map( ({header, ...rest}) => (
						<ListItem key={header} header={header} {...rest} />
					))
				}
			</List>
		</Grid.Column>
	</Grid.Row>	 
);

export default SkillsContent; 