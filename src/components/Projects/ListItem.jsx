import React from 'react';
import { List } from 'semantic-ui-react';

const ListItem = ({children}) => (
	<List.Item>
		<List.Icon name="check" color="green" />
		<List.Content><p>{children}</p></List.Content>
	</List.Item>
);

export default ListItem;