import {combineReducers} from 'redux';
import {auth} from './../reducers/auth';
import {moduleName as authModule} from '../actions/auth';
import {form} from './form';
import {moduleName as formModule} from '../actions/form';
import {moduleName as projectModule} from '../actions/project';
import {project} from './project';
import {moduleName as issueModule} from '../actions/issue';
import {issue} from './issue';
import {moduleName as releaseModule} from '../actions/release';
import {release} from './release';

export default combineReducers({
    [authModule]: auth,
    [formModule]: form,
    [projectModule]: project,
    [issueModule]: issue,
    [releaseModule]: release,
});
