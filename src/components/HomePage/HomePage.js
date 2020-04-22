import React from 'react';
import {useSelector} from 'react-redux';
import {getIsSignedIn} from '../../reducers/auth';
import Welcome from './WelcomeBlock/Welcome';

const HomePage = () => {
    const isSignedIn = useSelector(state => getIsSignedIn(state));
    return (
        <div>
            {!isSignedIn && <Welcome/>}
        </div>
    );
};

export default HomePage;
