import axios from 'axios';
import {API_URL} from '../const/api';
import {ACCESS_TOKEN} from '../const/auth';
import {FAILED, SUCCESS} from './index';

export const moduleName = 'project';

export const GET_USER_PROJECTS = `${moduleName}/GET_USER_PROJECTS`;
export const CREATE_PROJECT = `${moduleName}/CREATE_PROJECT`;
export const CHANGE_CURRENT_PROJECT = `${moduleName}/CHANGE_CURRENT_PROJECT`;

export const fetchUserProjects = (userId) => {
    return async dispatch => {
        try {
            const {data, status} = await axios.get(`${API_URL}/project/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                }
            });
            if (status === 200) {
                dispatch({type: GET_USER_PROJECTS + SUCCESS, payload: data});
            }
        } catch (e) {
            console.log(e);
        }
    }
};

export const createProject = (projectData) => {
    return async dispatch => {
        try {
            const {name, type} = projectData;

            const {status} = await axios.post(`${API_URL}/project`, {
               name: name,
               type: type
            }, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                }
            });

            if (status === 200) {
                dispatch({type: CREATE_PROJECT + SUCCESS, payload: true});
            }
        } catch (e) {
            console.log(e);
            dispatch({type: CREATE_PROJECT + FAILED, payload: false});
        }
    }
};
