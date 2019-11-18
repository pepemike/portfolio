import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
	color: #${props => props.textColor? props.textColor : 'fff'};

	@media only screen and (min-width: 768px) and (max-width: 991px) {
		margin-left: ${props => props.margin? props.margin : 0}em;
	}
`;

export default StyledSpan;