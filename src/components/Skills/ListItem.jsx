import React from 'react';
import { List } from 'semantic-ui-react';
import Logo from './Logo';

const ListItem = ({file, header, ...rest}) => (
	<List.Item>
		<Logo file={file} {...rest} />
		<List.Header>{header}</List.Header>
	</List.Item>
);

export default ListItem; 