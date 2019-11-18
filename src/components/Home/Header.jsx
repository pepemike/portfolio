import React from 'react';
import { Header as SURHeader } from 'semantic-ui-react';
import AnimatedWrapper from './StyledComponents/AnimatedWrapper';
import StyledSpan from './StyledComponents/StyledSpan';

const Header = props => {
	const { stackable, breakpoint } = props;
	const mobile = breakpoint === 'mobile' || breakpoint === 'mobile-small';
	return (
		<AnimatedWrapper tablet="12" className="header-wrapper" {...props}>
			<SURHeader 
				as={mobile? 'h2' : 'h1'} 
				inverted textAlign="left" 
				size={stackable? ( breakpoint === 'mobile-small'? null : 'large' ): 'huge'}
			>
				<StyledSpan textColor="FFAA25">Hello,</StyledSpan>		
				<br/>					
				<StyledSpan margin="1">I am Alexandra,</StyledSpan>
				<br/>
				<StyledSpan margin="2">Front-end </StyledSpan>
				{stackable && <br />}
				<StyledSpan textColor="FFAA25" margin="3">Web Developer</StyledSpan>
			</SURHeader>
		</AnimatedWrapper>
	);
};

export default Header;