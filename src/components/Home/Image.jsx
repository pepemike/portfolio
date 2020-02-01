import React from 'react';
import AnimatedWrapper from './StyledComponents/AnimatedWrapper';
import { Image } from 'semantic-ui-react';

const CustomImage = ({src, setImgLoaded, ...props}) => (
	<AnimatedWrapper 
		tablet="10" 
		className="image-wrapper"
		verticalAlign="middle" 
		{...props}
	>
		<Image src={src} onLoad={() => setImgLoaded(true)} alt="macbook" />
	</AnimatedWrapper>		
);

export default CustomImage;