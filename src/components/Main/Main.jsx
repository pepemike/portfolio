import React from 'react';
import MainGrid from './StyledComponents/MainGrid';
import OuterContainer from '../Section/OuterContainer';
import { colors } from '../Common/Colors';

/**
 * props: {
 * 	activeItem/set..., invertedBg/set..., menuItemClicked/set..., dataLoaded, headerVisible, setSectionLoaded
 * }
 */
const Main = ({sections, ...props}) => (
	<MainGrid>			
		{sections.length > 0 && sections.map( 
			({name, position,  ...rest}) => {
				//rest: {header, subheader, icon}
				return (					
					<OuterContainer 
						key={name} 
						name={name} 
						{...rest}
						background={colors[name + 'BgColor']}
						{...props} 
					/>
				);
			})
		}			
	</MainGrid>
);

export default Main;