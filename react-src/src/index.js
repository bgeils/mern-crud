import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

// import App from './components/App/App';
import Higher from './components/Higher/Higher';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Higher />, document.getElementById('root'));
registerServiceWorker();
