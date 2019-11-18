import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Grid } from 'semantic-ui-react';
import Button from './Button';
import Header from './Header';
import Image from './Image';

const Main = ({ headerVisible, setMenuItemClicked, data}) => {
	const [imgSrc, setImgSrc] = useState('');
	const [arrowMoving, setArrowMoving] = useState(true);
	const [duration, setDuration] = useState(1500);
	const { stackable, breakpoint } = useContext(ViewportContext);

	//move arrow up and down
	useEffect(() => {	
		if (!headerVisible) return;
		
		const timeout = setTimeout( () => {
			setArrowMoving(!arrowMoving);	
		}, 1500); 

		return () => clearTimeout(timeout);

	}, [arrowMoving, headerVisible]);

	useEffect(
		() => {
			if (data.length === 0) return;
			const [{imgName}] = data;
			const img = require(`../../images/${imgName}.jpg`); 
			//setTimeout( () => setImgSrc(img), 1500)
			setImgSrc(img)
		}, [data]
	);

	const changeDuration = () => {
		if (stackable && duration === 1500){
			setDuration(1000);			
		}	
	};

	const props = {
		duration,
		visible: imgSrc? headerVisible : false,
		changeDuration,
		stackable,
		breakpoint
	};
		
	const buttonProps = {
		...props,
		duration: stackable? duration : {hide: 500, show: 2000},
		arrowMoving,
		setArrowMoving,
		setMenuItemClicked
	};

	return (
		<Fragment>
			<Grid.Row> {/**logo coming soon */}</Grid.Row>
				
			<Header {...props} />							
				
			<Image {...props} src={imgSrc} />
					
			<Button {...buttonProps} />	
		</Fragment>		
	);
}

export default Main;