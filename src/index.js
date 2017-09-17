import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'roboto-npm-webfont';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
