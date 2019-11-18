import React from 'react';
import styled from 'styled-components';
import { slideup } from '../../Common/Animations';

const CookieConsentWrapper = styled.div`
	position: fixed;
	width: 100%;
	bottom: -2.5em;
	opacity: .5;
	animation: ${slideup} 2s ease-in forwards;
	font-size: 1.3em;
`;

export default CookieConsentWrapper;