import {moduleName} from '../actions/release';
import {GET_PROJECT_RELEASES} from '../actions/release';
import {SUCCESS} from '../actions';

const initialState = {
    releases: [],
};

export const release = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_PROJECT_RELEASES + SUCCESS:
            return {
                ...state,
                releases: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getProjectReleases = state => getState(state).releases;
