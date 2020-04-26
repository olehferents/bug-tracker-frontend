import {combineReducers} from 'redux';
import {auth} from './../reducers/auth';
import {moduleName as authModule} from '../actions/auth';
import {form} from './form';
import {moduleName as formModule} from '../actions/form';

export default combineReducers({
    [authModule]: auth,
    [formModule]: form,
});
