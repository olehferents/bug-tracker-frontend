import React from 'react';
import {Route} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Route path='/projects'/>
            <Route path='/dialogs'/>
            <Route path='/account'/>
            <Route path='/settings'/>
        </div>
    )
};

export default Dashboard;
