import React from 'react';
import { Tab } from 'semantic-ui-react';
import FadeIn from '../../StyledComponents/FadeIn';
import Header from './Header';
import Screenshot from './Screenshot';
import Summary from './Summary';
import ButtonGroup from './ButtonGroup';


const OverviewTab = ({ stackable, project }) => {
	const { header, github, live, themeDirectory } = project;

	return (
		<Tab.Pane>
			<FadeIn>		
			{!stackable && 
				<Header
					mobile="16" tablet="12"  
					header={header} 
				/>	
			}				
				<Screenshot 
					mobile="16" tablet="12" computer="5"  
					project={project} live={live}
				/>
				
				<Summary 
					mobile="16" tablet="12" computer="6" largeScreen="7"
					project={project} 
				/>
			{!stackable && 
				<ButtonGroup 
					computer="4" largeScreen="3" 
					github={github} live={live} themeDirectory={themeDirectory}
				/>
			}
			</FadeIn>
		</Tab.Pane> 
	)

}

	/* return (
		<Tab.Pane>
			<FadeIn>		
			{!stackable && 
				<Header
					mobile="16" tablet="12"  
					header={header} 
				/>	
			}				
				<Screenshot 
					mobile="16" tablet="12" computer="5"  
					src={imgSrc} header={header}
				/>
				
				<Summary 
					mobile="16" tablet="12" computer="6" largeScreen="7"
					header={header} summary={summary} 
				/>

			{!stackable && 
				<ButtonGroup 
					computer="4" largeScreen="3" 
					urlCode={urlCode} urlLive={urlLive}
				/>
			}
			</FadeIn>
		</Tab.Pane> 
	);
}*/

export default OverviewTab;  