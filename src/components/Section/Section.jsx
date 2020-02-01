import React, { useState, useEffect, useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Grid } from 'semantic-ui-react';
import SectionHeader from './SectionHeader';
import Subheader from './StyledComponents/Subheader';
import { colors } from '../Common/Colors';

const Section = props => {

	const { 
		name, 
		data = [], 
		className = '', 
		header = '', 
		subheader = '', 
		icon = '',
		iconSize = null,
		setSectionLoaded,
		setImgLoaded,
		setMenuItemClicked,
		headerVisible
	} = props;

	const { stackable, breakpoint } = useContext(ViewportContext);
	const [module, setModule] = useState(false);
	const Main = module? module.default : null;

	useEffect(
		() => {
			if (!name) return;
			const upperCasedName = name[0].toUpperCase() + name.slice(1);
			import(`../${upperCasedName}/Main`)
				.then(module => setModule(module)); 	
		}, [name]
	);

	useEffect(
		() => {
			if (Main && data.length > 0) {
				setSectionLoaded({[name] : true});
			}
			return () =>  setSectionLoaded({[name] : false});			
		}, [Main, data]
	);	
	
	return (
		<Grid 
			className={className} 
			textAlign="center" 
			padded="vertically" 
		>
		{className && !className.includes('home-wrapper') && 
			<SectionHeader
				icon={icon}
				iconSize={iconSize}
				iconColor={colors[name + 'IconColor']}
			>
				{header}
				<Subheader>{subheader}</Subheader>
			</SectionHeader> 
		}
		{Main &&
			<Main 
				data={data} 
				stackable={stackable}
				breakpoint={breakpoint}
				headerVisible={headerVisible}
				setMenuItemClicked={setMenuItemClicked}
				setImgLoaded={setImgLoaded}
			/>
		}
		</Grid>
	);
};

export default Section;

