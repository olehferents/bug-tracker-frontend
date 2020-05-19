import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';
import {FAILED, SUCCESS} from './index';

export const moduleName = 'timeline';

export const GET_TIMELINE = `${moduleName}/GET_TIMELINE`;

export const fetchTimeline = (projectId, dateFrom, dateTo) => {
    return async dispatch => {
        try {
            const {data, status} = await axios.post(`${API_URL}/activity/${projectId}`,
                {
                    from: dateFrom,
                    to: dateTo,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`,
                        'Access-Control-Allow-Origin': '*',
                    },
                });
            console.log(data);
            if (status === 200) {
                dispatch({type: GET_TIMELINE + SUCCESS, payload: data});
            }
        } catch (e) {
            console.log(e);
            dispatch({type: GET_TIMELINE + FAILED});
        }
    }
};
