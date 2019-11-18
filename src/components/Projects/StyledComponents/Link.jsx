import React from 'react';
import styled from 'styled-components';
import { colors } from '../../Common/Colors';
const { projectsIconColor: color } = colors;

const CustomLink = styled.a`
	display: inline-block;
	color: ${color};

	:hover, :focus, :active {
		color: #FFCD7E;
	}

	@media only screen and (min-width: 992px) {
		display: block;
	}
`;

export default CustomLink;