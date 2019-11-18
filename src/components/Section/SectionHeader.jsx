import React, { useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Grid, Header } from 'semantic-ui-react';
import HeaderIcon from './StyledComponents/HeaderIcon';

const SectionHeader = ({ 
	icon, 
	iconColor,
	iconSize,
	children
 }) => {

	const { stackable, breakpoint } = useContext(ViewportContext);
	const mobile = breakpoint === 'mobile' || breakpoint === 'mobile-small';

	return (
		<Grid.Row>
			<Grid.Column mobile="16" tablet="11" computer="10">
				<Header 
					as={stackable? 'h2' : 'h1'} 
					size={mobile? 'large' : 'huge'} 
					textAlign={'center'} 
					className="section-title"
				>
					<HeaderIcon 
						icon={icon} 
						color={iconColor} 
						size={iconSize} 
						display={mobile? 'block' : 'inline-block'} 
					/>
					{children}
				</Header>
			</Grid.Column>
		</Grid.Row>
	);
};

export default SectionHeader;