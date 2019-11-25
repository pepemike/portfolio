import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.getElementById('root')
);

serviceWorker.unregister();