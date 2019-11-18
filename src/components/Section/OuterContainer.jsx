import React, { useState, useEffect, useRef } from 'react';
import GridRow from './StyledComponents/GridRow';
import InnerContainer from './InnerContainer';

const OuterContainer = props => {
	
	const [visible, setVisible] = useState(false);
	const [minHeight, setMinHeight] = useState(0);
	const { background, name, activeItem, menuItemClicked, setMenuItemClicked } = props;
	
	const innerRef = useRef(null);	

	useEffect(
		() => {
			setHeight();
			window.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', setHeight);

			return function() {
				window.removeEventListener('scroll', handleScroll);
			};
		}, []
	);	

	const setHeight = () => {
		setMinHeight(document.documentElement.clientHeight);
	};

	useEffect(
		() => {
			//fade in 'home' section on load
			if (activeItem === name && !visible) {
				setVisible(true);
			}
			
			//remove event listener after the last section is scrolled into view
			if (activeItem === 'contact') {
				window.removeEventListener('scroll', handleScroll);
			}
		}, [activeItem]
	);

	//fade in a section after it appears for the first time
	const handleScroll = () => {
		if (visible) return;		
		const position = innerRef.current.getBoundingClientRect().top;
		if (position >= 0  && position <= document.documentElement.clientHeight  ) {
			setVisible(true);
		}
	}

	useEffect(
		() => {
			if (innerRef.current && menuItemClicked === name) {
				innerRef.current.scrollIntoView({behavior:"smooth", block: "start" });	
				setMenuItemClicked(false);			
			}
		}, [menuItemClicked]
	);

	return (				
		<GridRow ref={innerRef} 
			className={`row ${name}`} 	
			id={name}
			style={{background, visible, minHeight}}//add background and visible to style to prevent them from being written to the DOM			
		>
			<InnerContainer {...props} />
		</GridRow>
	);
}  

export default OuterContainer;