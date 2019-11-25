import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const MainGrid =  styled( props => <Grid padded textAlign="center"  {...props} /> )`
	margin-top: 0!important;
`;

export default MainGrid;