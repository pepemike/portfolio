import React from 'react';
import { List } from 'semantic-ui-react';
import ListItem from './ListItem';

const CustomList = ({horizontal, items}) => (
	<List horizontal={horizontal}>
		{items.map( item => 
			<ListItem key={item}>{item}</ListItem>
		)}
	</List>
);

export default CustomList;