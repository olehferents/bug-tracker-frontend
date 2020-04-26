import {
    CHANGE_IS_EMAIL_VALID,
    CHANGE_IS_FIRST_NAME_VALID,
    CHANGE_IS_LAST_NAME_VALID,
    CHANGE_IS_PASSWORD_VALID
} from '../actions/form';

export const validateForm = (dispatch, fname, lname, email, password) => {
    if (!isNameValid(fname)) {
        dispatch({type: CHANGE_IS_FIRST_NAME_VALID, payload: false});
    } else {
        dispatch({type: CHANGE_IS_FIRST_NAME_VALID, payload: true});
    }

    if (!isNameValid(lname)) {
        dispatch({type: CHANGE_IS_LAST_NAME_VALID, payload: false});
    } else {
        dispatch({type: CHANGE_IS_LAST_NAME_VALID, payload: true});
    }

    if (!isEmailValid(email)) {
        dispatch({type: CHANGE_IS_EMAIL_VALID, payload: false});
    } else {
        dispatch({type: CHANGE_IS_EMAIL_VALID, payload: true});
    }

    if (!isPasswordValid(password)) {
        dispatch({type: CHANGE_IS_PASSWORD_VALID, payload: false});
    } else {
        dispatch({type: CHANGE_IS_PASSWORD_VALID, payload: true});
    }
};

const isEmpty = (value) => {
    if (!value) return false;

    return !!(value.trim().length !== 0 || value);
};

const isNameValid = (name) => {
    if (!isEmpty(name)) return false;

    const regex = /^[a-zA-Z]+$/;

    return regex.test(name);
};

const isEmailValid = (email) => {
    if (!isEmpty(email)) return false;

    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
};

const isPasswordValid = (password) => {
    if (!isEmpty(password)) return false;

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    return regex.test(password);
};
