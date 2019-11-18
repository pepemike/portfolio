import React, { useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Image } from 'semantic-ui-react';

const Logo = ({file,  ...props}) => {
	const { breakpoint } = useContext(ViewportContext);
	const imageSize = breakpoint !== 'wideScreen' ? 'tiny' : 'small';
	const src = require(`../../images/${file}`);
	const alt = file.match(/[\w]+/)[0];

	return (
		<Image src={src} alt={alt} {...props} size={imageSize} />
	);	
};

export default Logo;