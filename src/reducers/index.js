//@flow
import {combineReducers} from 'redux';
import {dealReducer} from './deal';
import {dealSearchReducer} from './dealSearch';

export default combineReducers({
    dealReducer,
    dealSearchReducer
});