import {SIGN_UP, SIGN_IN, LOG_OUT, moduleName} from '../actions/auth';
import {FAILED, SUCCESS} from '../actions';

const initialState = {
    isSignedUp: false,
    isSignedIn: false,
    errorMessage: '',
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
                isSignedIn: payload.signIn,
                errorMessage: payload.error,
            };
        case LOG_OUT:
            return {
                ...state,
                isSignedIn: !payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getIsSignedUp = state => getState(state).isSignedUp;
export const getIsSignedIn = state => getState(state).isSignedIn;
export const getErrorMessage = state => getState(state).errorMessage;
