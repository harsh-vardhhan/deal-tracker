//@flow
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import type {State} from '../types/State';
import type {Store} from '../types/Store';

const configureStore = (initialState: State): Store => (
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
);

export default configureStore;