import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tasksReducer from './reducers/taskReducers';

const store = createStore((tasksReducer))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('roott')
);
