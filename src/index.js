import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState(), 'updated-state')
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
