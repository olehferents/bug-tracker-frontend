import {
    CHANGE_IS_EMAIL_VALID,
    CHANGE_IS_FIRST_NAME_VALID,
    CHANGE_IS_LAST_NAME_VALID,
    CHANGE_IS_PASSWORD_VALID,
    moduleName, REFRESH_FORM
} from '../actions/form';

const initialState = {
    isFirstNameValid: true,
    isLastNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
};

export const form = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_IS_FIRST_NAME_VALID:
            return {
                ...state,
                isFirstNameValid: payload,
            };
        case CHANGE_IS_LAST_NAME_VALID:
            return {
                ...state,
                isLastNameValid: payload,
            };
        case CHANGE_IS_EMAIL_VALID:
            return {
                ...state,
                isEmailValid: payload,
            };
        case CHANGE_IS_PASSWORD_VALID:
            return {
                ...state,
                isPasswordValid: payload,
            };
        case REFRESH_FORM:
            return {
                ...state,
                isFirstNameValid: payload,
                isLastNameValid: payload,
                isEmailValid: payload,
                isPasswordValid: payload,
            };
        default:
            return state;
    }
};

export const getState = state => state[moduleName];
export const getIsFirstNameValid = state => getState(state).isFirstNameValid;
export const getIsLastNameValid = state => getState(state).isLastNameValid;
export const getIsEmailValid = state => getState(state).isEmailValid;
export const getIsPasswordValid = state => getState(state).isPasswordValid;
