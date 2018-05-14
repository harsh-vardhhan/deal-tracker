//@flow
import {combineReducers} from 'redux';
import {dealReducer} from './deal';
import {dealSearchReducer} from './dealSearch';
import {dealOrderReducer} from './dealOrder';

export default combineReducers({
    dealReducer,
    dealSearchReducer,
    dealOrderReducer
});