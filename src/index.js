import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/combineReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleware);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
