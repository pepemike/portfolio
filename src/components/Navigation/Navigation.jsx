import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import Menu from './Menu';
import { Responsive } from 'semantic-ui-react';
import MenuToggler from './MenuToggler';

const Navigation = props => {

	const [horizontalMenuVisible, setHorizontalMenuVisible] = useState(false);
	const [barsVisible, setBarsVisible] = useState(false);
	const [undoVisible, setUndoVisible] = useState(false);
	const [animation, setAnimation] = useState('fade down');
	const { displayHeader, dataLoaded } = props;
	const { stackable } = useContext(ViewportContext);
	const items = [ 'home', 'projects', 'skills', 'about', 'contact'];
	
	//on mobile & tablet portrait: runs if 1. bars/undo icons are clicked, 2. any menu item is clicked
	const toggleMenu = (e) => {	
		
		//if a menu item is clicked
		if (e === undefined){
			setAnimation('fade down');
			setUndoVisible(false);
			return;						
		}	
	
		//bars / undo icons is clicked
		if (e.target.id === 'bars') {
			setBarsVisible(false);
			displayHeader(false);	
		} else {
			setUndoVisible(false);
		}
	};
				
	//display the alternative icon only after the original icon animation is over	
	const handleBarsHide = () => {
		setUndoVisible(true);	
	};
	const handleUndoHide = () => {		
		setBarsVisible(true);
		displayHeader(true);
	};

	useEffect( () => {	
		if (!dataLoaded) return;

		let timer;
		setTimeout(
			() => {
				timer = setHorizontalMenuVisible(true);
			}, 1500
		);
		setBarsVisible(true);
		return () => clearTimeout(timer);
	},[dataLoaded]);

	useEffect( () => {
		if (dataLoaded) {
			displayHeader(true);
		}

        setUndoVisible(false);
		if (stackable) {
			setBarsVisible(true);		
		}		
	}, [stackable, dataLoaded]);

	useEffect( () => {
		if (stackable && animation === 'fade down'){
			setAnimation('horizontal flip');	
		}
	}, [stackable]);

	return (
		<Fragment>
			<Responsive  maxWidth={991}>				
				<MenuToggler 
					animation={animation} icon="bars" toggleMenu={toggleMenu} 
					visible={barsVisible} handleHide={handleBarsHide} 
				/>
				<MenuToggler 
					animation="horizontal flip" icon="undo" toggleMenu={toggleMenu} 
					visible={undoVisible} handleHide={handleUndoHide} 
				/> 		
				<Menu 
					items={items.filter(item => item !== 'home')}
					animation="fade" 
					duration={{show: 1200, hide: 1500}}
					visible={undoVisible} 
					toggleMenu={toggleMenu} 
					{...props} 
				/>			
			</Responsive>
			
			<Responsive minWidth={992}>
				<Menu 
					items={items}
					animation="fade down" 
					visible={horizontalMenuVisible} 
					{...props} 
				/>
			</Responsive>		
		</Fragment>
	);
};

export default Navigation;