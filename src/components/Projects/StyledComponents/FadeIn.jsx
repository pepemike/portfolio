import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { fadein } from '../../Common/Animations';

const FadeIn = styled(Grid).attrs(props => ({
	centered: true
}))`
	animation: ${fadein} 2s ease-in forwards;
`;

export default FadeIn;