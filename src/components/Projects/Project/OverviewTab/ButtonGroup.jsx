import React, { useContext } from 'react';
import { ViewportContext } from '../../../Common/Context';
import { Grid } from 'semantic-ui-react';
import Button from './Button';
//icon colors defined in less in icon.overrides

const ButtonGroup = ({ mobile, tablet, computer, largeScreen, github, live, themeDirectory }) => {
	const { stackable, breakpoint } = useContext(ViewportContext);

	const stackableStyle = {
		position: 'absolute',
    	bottom: '-.5rem',//padding of parent container: 1rem, so 50% of the btn group is inside the img
    	right: '10%',
	};

	return (
		<Grid.Column className="btn-group" mobile={mobile} tablet={tablet} computer={computer}
			largeScreen={largeScreen}  verticalAlign="top" 
			textAlign={stackable? 'right' : 'left'} style={stackable? stackableStyle : {}}
		>
			<Button stackable={stackable} breakpoint={breakpoint} name="github" inverted msg="View code" url={github} />
			<Button stackable={stackable} breakpoint={breakpoint} name="external alternate" msg="Visit site" url={live} />
		{themeDirectory &&
			<Button stackable={stackable} breakpoint={breakpoint} name="wordpress" inverted msg="Theme directory" url={themeDirectory} />
		}
		</Grid.Column>
	);
}

export default ButtonGroup;