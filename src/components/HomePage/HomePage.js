import React from 'react';
import {useSelector} from 'react-redux';
import {getIsSignedIn} from '../../reducers/auth';
import Welcome from './WelcomeBlock/Welcome';
import Dashboard from './Dashboard/Dashboard';

const HomePage = () => {
    const isSignedIn = useSelector(state => getIsSignedIn(state));
    return (
        <div>
            {isSignedIn ? <Dashboard/> : <Welcome/>}
        </div>
    );
};

export default HomePage;
