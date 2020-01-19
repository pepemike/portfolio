import React, { useReducer, useEffect, useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Menu, Container, Transition } from 'semantic-ui-react';
import MenuItem from './MenuItem';
//import logo from '../../images/logo1.svg';

const NavMenu = props => {
	const { stackable } = useContext(ViewportContext);
	const { items, activeItem, setMenuItemClicked, toggleMenu, invertedBg, className, animation, duration = 300, visible } = props;

	const [itemVisible, setItemVisible] = useReducer(
		(state, newState) => ({...state, ...newState}),
		{ home: false, projects: false, skills: false, about: false, contact: false }	
	);

	const toggleVisibility = (item, value) => setItemVisible({ [item] : value });
	
	const hideAll = () => {
		items.forEach( item => toggleVisibility(item, false) );
	};
	
	useEffect( () => {
		if (!stackable) return;
		const timeout = {};

		if (visible) {
			let counter = 0;				
			items.forEach(
				item => {
					timeout[item] = setTimeout( () => toggleVisibility(item, true), counter );
					counter += 300;
				}
			);
		} else {
			hideAll();
		}
		return function() {
			items.forEach(item => clearTimeout(timeout[item]));
			hideAll();
		}
	}, [visible]);

//TODO: issue menu transition when disappearing on small screens
	return (
		<Transition animation={animation} duration={duration} visible={visible}>		
			<Menu 
				className={className}  pointing secondary inverted={stackable? true : invertedBg} 
				stackable size="huge" fixed="top"
			>
				<Container> 
				{
					items.map( item => 
						<MenuItem 
							key={item}
							item={item} 
							visible={stackable? itemVisible[item] : visible} 
							active={activeItem === item}
							animation={stackable? 'fly right' : null}
							toggleMenu={toggleMenu}
							setClicked={setMenuItemClicked}
						/>
					)
				}	
				</Container>
			</Menu>
		</Transition>
	);
};

export default NavMenu;