import {GET_ISSUES} from '../actions/issue';
import {moduleName} from '../actions/issue';
import {SUCCESS} from '../actions';

const initialState = {
    issues: [],
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
