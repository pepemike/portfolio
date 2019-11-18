import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Section from './Section';

const InnerContainer = ({ name, setSectionLoaded, headerVisible, setMenuItemClicked, ...rest }) => {
	
	const [ data, setData ] = useState([]);

	useEffect(
		() => { 
			const abortController = new AbortController();
			
			fetch(`https://portfolio-json-server.herokuapp.com/${name}`, { signal: abortController.signal })
					.then(response => response.json())
					.then(items => setData(items))
					.catch(err => console.log(err)); 

					return () => abortController.abort();
		}, [name]
	);

		return (							
			<Grid.Column 
				mobile="14" computer="16" 
				style={{display: 'flex', justifyContent: 'center'}}
			>
				<Section 
					name={name}
					data={data} 
					className={data.length? 'wrapper ' + name + '-wrapper' : null}  
					headerVisible={headerVisible}
					setMenuItemClicked={setMenuItemClicked} 
					setSectionLoaded={setSectionLoaded}
					{...rest}
				/>
			</Grid.Column>
	);
}

export default InnerContainer;