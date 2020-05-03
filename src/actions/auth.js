import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';

export const moduleName = 'auth';

export const SUCCESS = '_SUCCESS';
export const FAILED = '_FAILED';

export const SIGN_UP = `${moduleName}/SIGN_UP`;
export const SIGN_IN = `${moduleName}/SIGN_IN`;
export const LOG_OUT = `${moduleName}/LOG_OUT`;

export const signUp = (formData) => {
    return async dispatch => {
        try {
            const {status} = await axios.post(`${API_URL}/auth/signUp`, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });

            if (status === 200) {
                dispatch({type: SIGN_UP + SUCCESS, payload: true});
            }
        } catch (e) {
            console.log(e);
            dispatch({type: SIGN_UP + FAILED, payload: false});
        }
    }
};

export const signIn = (formData) => {
    return async dispatch => {
        try {
            const {data, status} = await axios.post(`${API_URL}/auth/signIn`, {
                email: formData.email,
                password: formData.password
            });

            localStorage.setItem(ACCESS_TOKEN, data.token);

            if (status === 200) {
                dispatch({type: SIGN_IN + SUCCESS,payload: true});
            }
        } catch (e) {
            const {data} = e.response;

            dispatch({
                type: SIGN_IN + FAILED,
                payload: {
                    success: false,
                    error: data.message
                }
            });
        }
    }
};

export const logOut = () => {
    return async dispatch => {
        localStorage.removeItem(ACCESS_TOKEN);
        dispatch({type: LOG_OUT, payload: true})
    }
};
