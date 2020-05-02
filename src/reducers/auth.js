import {SIGN_UP, SIGN_IN, LOG_OUT, moduleName, SUCCESS, FAILED} from '../actions/auth';

const initialState = {
    isSignedUp: false,
    isSignedIn: false,
    isSignedOut: true,
};

export const auth = (state = initialState, action) => {
    const {payload, type} = action;

    switch (type) {
        case SIGN_UP + SUCCESS:
            return {
                ...state,
                isSignedUp: payload,
            };
        case SIGN_UP + FAILED:
            return {
                ...state,
                isSignedUp: payload,
            };
        case SIGN_IN + SUCCESS:
            return {
                ...state,
                isSignedIn: payload,
            };
        case SIGN_IN + FAILED:
            return {
                ...state,
                isSignedIn: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getIsSignedUp = state => getState(state).isSignedUp;
export const getIsSignedIn = state => getState(state).isSignedIn;
export const getIsSignedOut = state => getState(state).isSignedOut;
export const getIsLoading = state => getState(state).isLoading;
export const getIsFailed = state => getState(state).isFailed;
