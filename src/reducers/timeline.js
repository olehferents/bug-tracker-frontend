import {
    moduleName,
    GET_TIMELINE
} from '../actions/timeline';

const initialState = {
    logs: [],
};

export const timeline = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_TIMELINE:
            return {
                ...state,
                logs: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getLogs = state => getState(state).logs;
