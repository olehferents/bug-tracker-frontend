import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';
import {FAILED, SUCCESS} from './index';

export const moduleName = 'issue';

export const GET_ISSUES = `${moduleName}/GET_ISSUES`;

export const fetchIssues = (projectId) => {
    return async dispatch => {
        try {
            const {data, status} = await axios.get(`${API_URL}/issue/${projectId}`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                }
            });

            if (status === 200) {
                dispatch({type: GET_ISSUES + SUCCESS, payload: data});
            }
        } catch (e) {
            console.log(e);
            const {data} = e.response;
            dispatch({type: GET_ISSUES + FAILED, payload: data});
        }
    }
};
