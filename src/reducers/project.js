import {
    moduleName,
    GET_USER_PROJECTS,
    CREATE_PROJECT,
    CHANGE_CURRENT_PROJECT,
} from '../actions/project';
import {FAILED, SUCCESS} from '../actions';

const initialState = {
    userProjects: [],
    isCreated: false,
    errorMessage: '',
    currentProject: {},
};

export const project = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USER_PROJECTS + SUCCESS:
            return {
                ...state,
                userProjects: payload,
            };
        case CREATE_PROJECT + SUCCESS:
            return {
                ...state,
                isCreated: payload,
            };
        case CREATE_PROJECT + FAILED:
            return {
                ...state,
                isCreated: payload.success,
                errorMessage: payload.error,
            };
        case CHANGE_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getUserProjects = state => getState(state).userProjects;
export const getCurrentProject = state => getState(state).currentProject;
