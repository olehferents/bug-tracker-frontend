import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';
import {SUCCESS, FAILED} from './index';

export const moduleName = 'user';

export const GET_USERS = `${moduleName}/GET_USERS`;

export const fetchAllUsers = () => {
    return async dispatch => {
        try {
            const {data, status} = await axios.get(`${API_URL}/user`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                },
            });

            if (status === 200) {
                dispatch({type: GET_USERS + SUCCESS, payload: data});
            }
        } catch (e) {
            console.log(e);
        }
    }
};
