import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import ConnectedApp from './app/ConnectedApp';

ReactDOM.render(
    <React.StrictMode>
        <ConnectedApp />
    </React.StrictMode>,
    document.querySelector('#root'),
);
