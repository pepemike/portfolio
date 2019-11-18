import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const ButtonGroup = styled.div.attrs(props => ({
	className: 'buttons'
}))`
	display: flex;
	justify-content: center;
`;

export const ConsentButton = styled(Button).attrs(props => ({
	color: 'green',
	size: 'large'
}))`
	margin-right: 1em !important;
`;

export const DeclineButton = styled(Button).attrs(props => ({
	color: 'grey',
	size: 'large'
}))``;