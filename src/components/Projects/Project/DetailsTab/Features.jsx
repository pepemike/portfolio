import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import List from '../../List';

const Features = ({features}) => (
	<Fragment>
		<Header size="tiny">Features</Header>
		<List items={features} />
	</Fragment>
);
export default Features;