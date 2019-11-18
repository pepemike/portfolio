import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledIcon = styled( ({color, stackable, ...rest}) => <Icon {...rest}/>)`
	color: ${props => props.color};
`;

const HeaderIcon = ({icon, size, display,  ...rest}) => (
	<span style={{display}}>
		<StyledIcon name={icon} size={size}	{...rest} />
	</span>
);

export default HeaderIcon;
{/**span to override: .ui.header > .icon {	display: table-cell; } & .ui-header > .code font-size  */}
