import React, { useState, useEffect } from 'react';
import Main from './Main';
import * as _ from 'underscore';

const MainContainer = props => {
	const { setActiveItem, setInvertedBg, dataLoaded } = props;
	const [ sections, setSections ] = useState([]);

	useEffect(
		() => {
			const abortController = new AbortController();
			fetch('https://portfolio-json-server.herokuapp.com/sections/', {signal: abortController.signal})
				.then(response => response.json())
				.then(items => {
					//items: objects {name: ..., header: ..., subheader: ..., icon: ...}
					let sections = [...items];
					sections.forEach(
						item => {								
							item.position = null;
						}
					)
					setSections(sections);
				})
				.catch(err => console.log(err)); 
				return () => abortController.abort();
		}, []
	);

	//determine position of the anchors on the page after the data has been loaded
	const getAnchorPoints = () => {
		const curScroll = window.scrollY;
		sections.forEach(section => section.position = document.getElementById(section.name).getBoundingClientRect().top + curScroll -10)
		
		setSections(sections);
		handleScroll();
	}
	
	useEffect(() => {	
		
		if (dataLoaded) {			
			getAnchorPoints();
			window.addEventListener('scroll', handleScrollThrottled);
			window.addEventListener('resize', getAnchorPoints);
		}	

		return function() {
			window.removeEventListener('scroll', handleScrollThrottled);
			window.removeEventListener('resize', getAnchorPoints);
		}
	}, [dataLoaded]);	

	const handleScroll = () => {

		if (!dataLoaded) return;
		
		const curPos = parseInt(window.scrollY);
		
		/* From bottom to top, determine which section we're in */
		for (let i = sections.length - 1; i >= 0; i--) {
			const { name, position } = sections[i];
			if (curPos >= position) {
				setActiveItem(name);
				break;
			}
		}	
		
		//determine background color of the navigation bar
		if (curPos === 0) {
			setInvertedBg(true);
		} else {
			setInvertedBg(false);
		}
	} 

	const handleScrollThrottled = _.throttle(handleScroll, 50);
		
	return (
		<Main sections={sections} {...props}  />
	);

};

export default MainContainer;