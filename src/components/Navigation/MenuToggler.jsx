import React from 'react';
import { Transition, Icon } from 'semantic-ui-react';

const MenuToggler = ({animation, visible, icon, handleHide, toggleMenu}) => (
	<Transition 
		animation={animation} 
		duration={1000} 
		visible={visible} 
		onHide={handleHide} 
	>
		<Icon  size="huge" name={icon} id={icon} onClick={toggleMenu} style={{top: '.1em'}} />
	</Transition>
);

export default MenuToggler;