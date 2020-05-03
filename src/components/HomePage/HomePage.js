import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsSignedIn} from '../../reducers/auth';
import Welcome from './WelcomeBlock/Welcome';
import Dashboard from './Dashboard/Dashboard';
import {ACCESS_TOKEN} from '../../const/auth';
import {SIGN_IN, SUCCESS} from '../../actions/auth';

const HomePage = () => {
    const isSignedIn = useSelector(state => getIsSignedIn(state));

    const token = localStorage.getItem(ACCESS_TOKEN);
    const dispatch = useDispatch();
    if (token) {
        dispatch({type: SIGN_IN + SUCCESS, payload: true});
    }
    return (
        <div>
            {isSignedIn ? <Dashboard/> : <Welcome/>}
        </div>
    );
};

export default HomePage;
