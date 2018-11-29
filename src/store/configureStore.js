//@flow
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import type {State} from '../types/State';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const initalState: State = {
    dealReducer: [],
    dealSearchReducer: '',
    dealOrderReducer: false
};

export const store = createStore(
    rootReducer,
    initalState,

    //$FlowFixMe
    composeWithDevTools(applyMiddleware(thunk, logger))
);