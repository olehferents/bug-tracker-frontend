import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';
import {FAILED, SUCCESS} from './index';

export const moduleName = 'release';

export const GET_PROJECT_RELEASES = `${moduleName}/GET_PROJECT_RELEASES`;
export const CREATE_RELEASE = `${moduleName}/CREATE_RELEASE`;

export const fetchProjectReleases = (projectId) => {
    return async dispatch => {
        try {
            const {data, status} = await axios.get(`${API_URL}/release/${projectId}`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                }
            });

            if (status === 200) {
                dispatch({type: GET_PROJECT_RELEASES + SUCCESS, payload: data});
            }
        } catch (e) {
            console.log(e);
        }
    }
};

export const createRelease = (releaseData) => {
    return async dispatch => {
        try {
            const {status} = await axios.post(`${API_URL}/release`, releaseData, {
                header: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                }
            });

            if (status === 200) {
                dispatch({type: CREATE_RELEASE + SUCCESS});
            }
        } catch (e) {
            console.log(e);
            dispatch({type: CREATE_RELEASE + FAILED});
        }
    }
}
