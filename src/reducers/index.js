import {combineReducers} from 'redux';
import {auth} from './../reducers/auth';
import {moduleName as authModule} from '../actions/auth';

export default combineReducers({
    [authModule]: auth,
});
