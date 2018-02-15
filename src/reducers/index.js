import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mailsdata } from './mailData';

export const rootReducer = combineReducers({mailsdata, routing: routerReducer});
