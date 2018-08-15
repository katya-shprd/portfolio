import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Typekit from 'react-typekit';

ReactDOM.render(
    <App>
        <Typekit kitId="oiv0uix"/>    
    </App>, 
    document.getElementById('root'));
registerServiceWorker();
