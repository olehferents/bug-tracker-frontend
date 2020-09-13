import {SUCCESS, FAILED} from '../actions';
import {GET_USERS, moduleName} from '../actions/user';

const initialState = {
    users: [],
};

export const user = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USERS + SUCCESS:
            return {
                ...state,
                users: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getUsers = state => getState(state).users;
