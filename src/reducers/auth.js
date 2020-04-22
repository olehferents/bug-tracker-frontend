import {SIGN_UP, SIGN_IN, LOG_OUT, moduleName} from '../actions/auth';

const initialState = {
    isSignedIn: false,
    isSignedOut: true,
    isLoading: false,
    isFailed: false,
};

export const auth = (state = initialState, action) => {
    const {payload, type} = action;

    switch (type) {
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getIsSignedIn = state => getState(state).isSignedIn;
export const getIsSignedOut = state => getState(state).isSignedOut;
export const getIsLoading = state => getState(state).isLoading;
export const getIsFailed = state => getState(state).isFailed;
