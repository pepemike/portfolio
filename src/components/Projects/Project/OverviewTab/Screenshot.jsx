import React, { useContext } from 'react';
import { ViewportContext } from '../../../Common/Context';
import { Grid, Image, Header } from 'semantic-ui-react';
import ButtonGroup from './ButtonGroup';

const Screenshot = ({ project, mobile, tablet, computer }) => {
	const { stackable, imgExtension } = useContext(ViewportContext);
	const { header, imgName, github, live, themeDirectory } = project;
	const src = require(`../../../../images/${imgName}.${imgExtension}`);
	const alt = imgName.match(/[\w]+/)[0];
	return (
		<Grid.Column mobile={mobile} tablet={tablet} computer={computer} verticalAlign="top">
			{
				stackable && 
					<Header as="h2" className="project-title">{header}</Header> 
			}
			<Image 
				src={src}
				alt={alt}
				as="a"
				href={live}
				target="_blank" 
				style={{boxShadow: '0.1em 0.1em 1.5em #bfbfbf'}}
		/>
		{stackable &&
			<ButtonGroup mobile="2" tablet="12" github={github} live={live} themeDirectory={themeDirectory} />
		}			
		</Grid.Column>
	);
}

export default Screenshot;