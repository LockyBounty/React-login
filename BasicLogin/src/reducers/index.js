import {combineReducers } from 'redux';

import authReducer from './auth.reducer';

const reducers = {
    authReducer
};

// on importe authReducer puis on le met dans le param 
// de la fct de redux

export default combineReducers(reducers);