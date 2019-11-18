import React from 'react';
import { keyframes } from 'styled-components';

export const fadein = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: .5;
	}
	100% {
		opacity: 1;
	}
`;

export const fadeout = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const slideup = keyframes`
	from {
		bottom: -10em;
		opacity: .5;
	}
	to {
		bottom: 0;
		opacity: 1;
	}
`;

export const slideright = keyframes`
	from {
		left: -100%;
		opacity: .5;
	}
	to {
		left: 0;
		opacity: 1;
	}
`;

export const slideleft = keyframes`
	from {
		right: -100%;
		opacity: .5;
	}
	to {
		right: 0;
		opacity: 1;
	}
`;