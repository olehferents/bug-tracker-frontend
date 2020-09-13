import {GET_ISSUES} from '../actions/issue';
import {moduleName} from '../actions/issue';
import {SUCCESS} from '../actions';

const initialState = {
    issues: [
        {
            id: '1',
            name: 'Create a user model',
            priority: 'high',
            category: 'service layer',
            status: 'to do',
            updatedAt: '05-22-2020',
            description: 'Lorem ipsum',
            assignedTo: 'olehferenc1@gmail.com',
            doneBy: 'olehferenc1@gmail.com',
        }
    ],
};

export const issue = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ISSUES + SUCCESS:
            return {
                ...state,
                issues: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getIssues = state => getState(state).issues;
export const getToDoIssues = state => getIssues(state).filter(issue => issue.status === 'to do');
