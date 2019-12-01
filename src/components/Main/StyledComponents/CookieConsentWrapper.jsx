import React from 'react';
import styled from 'styled-components';
import { slideup } from '../../Common/Animations';

const CookieConsentWrapper = styled.div`
	position: fixed;
	width: 100%;
	bottom: -15.5em;
	opacity: 0;
	animation: ${slideup} 2s ease-in 4s forwards;
	font-size: 1.3em;
	text-align: center;
`;

export default CookieConsentWrapper;