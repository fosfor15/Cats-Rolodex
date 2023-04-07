import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './state/store';


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <Provider store={ store } >
            <App store={ store }/>
        </Provider>
    </React.StrictMode>
);
