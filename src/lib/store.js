import {createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reporter from 'redux-reporter';
//import reporter from '../middleware/reporter';
import reducer from './ducks';

const appReducer = combineReducers({ chore: reducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
//export default createStore(appReducer, applyMiddleware(thunk, reporter));