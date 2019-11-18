import React from 'react';
import styled from 'styled-components';
import { fadein, fadeout } from '../../Common/Animations';

const GridRow = styled.div`
	
	background: ${props => props.style.background};
	min-height: ${props => props.style.minHeight}px;
	padding: ${props => props.className.includes('home')? '0 0 1rem' : '2rem 0 3rem'} !important;
	opacity: 0;
	animation: ${props => props.style.visible ? fadein  : fadeout} 1s ease-in .5s forwards;

	@media only screen and (min-width: 768px) {
		padding-top: ${props => props.className.includes('home')? '0' : '5.5rem'} !important;
	}

	@media only screen and (min-width: 992px) {
		padding: ${props => props.className.includes('home')? '0' : '8rem 0 5rem'} !important;
	}

	@media only screen and (min-width: 1600px) {
		padding: ${props => props.className.includes('home')? '0' : '10rem 0 7rem'} !important;
	}

	@media only screen and (min-width: 2560px) {
		padding: ${props => props.className.includes('home')? '0' : '12rem 0 5rem'} !important;
	}
`;

export default GridRow;