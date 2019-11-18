import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const SubheaderContent = styled.div`
	font-size: 1.4rem;
	margin-top: 1rem;
`;

const Subheader = ({children}) => (
	<Header.Subheader>
		<SubheaderContent>{children}</SubheaderContent>
	</Header.Subheader>
);

export default Subheader;