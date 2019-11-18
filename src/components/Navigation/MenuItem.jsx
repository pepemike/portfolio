import React from 'react';
import { Transition, Menu } from 'semantic-ui-react';

const MenuItem = ({ item, active, animation, visible, toggleMenu, setClicked }) => {

	const handleClick = (e) => {
		e.preventDefault();
		setClicked(item);
		//hide menu on small screens
		if (toggleMenu) toggleMenu();		
	}

	return (
		<Transition 
			animation={animation}  
			duration="1500"  
			mountOnShow={false}
			visible={visible} 
		>
			<Menu.Item name={item} active={active} href={`#${item}`} onClick={handleClick}/>
		</Transition>
	);
};

export default MenuItem;