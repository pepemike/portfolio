import React, { useState, useEffect } from 'react';
import { Transition, Icon } from 'semantic-ui-react';
import CustomLink from '../../StyledComponents/Link';

//icon colors defined in less in icon.overrides
const Button = ({url, name, inverted, msg, stackable, breakpoint}) => {
	const [ visible, setVisible ] = useState(true);
	const [ animation, setAnimation ] = useState(null);

	useEffect(
		() => {
			if(!animation) setAnimation('shake');
			setVisible(false)
		}, [animation]
	);

	const handleMouseEnter = () => {		
		if (animation) setVisible(true);
	};

	const handleComplete = () => {
		if (visible) setVisible(false);
	};

	return (
		<Transition animation={stackable? null : animation} duration={{show: 1000, hide:100}} visible={visible} onComplete={handleComplete}>
			<CustomLink href={url? url : '#'} onMouseEnter={handleMouseEnter}>
				<Icon 
					name={name} inverted={inverted} circular size={stackable || breakpoint === 'computer'? 'large' : 'big'} 	 
				/> 
				{!stackable && <span>{msg}</span>}
			</CustomLink>
		</Transition>	
	);
};

export default Button;