import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from '../store/store';

const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
};

export default ConnectedApp;
