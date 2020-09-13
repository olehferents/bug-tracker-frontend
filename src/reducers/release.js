import {moduleName} from '../actions/release';
import {GET_PROJECT_RELEASES} from '../actions/release';
import {SUCCESS} from '../actions';

const initialState = {
    releases: [
        {
            id: 1,
            name: '0.0.1',
            date: '05-26-2020',
            projectId: 1
        }
    ],
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
