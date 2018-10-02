import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
