import React from 'react';
import {Route} from 'react-router-dom';
import Projects from './ProjectsPage/Projects';
import Dialogs from './DialogsPage/Dialogs';
import Account from './AccountPage/Account';
import Settings from './SettingsPage/Settings';

const Dashboard = () => {
    return (
        <>
            <Route path='/projects' component={Projects}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/account' component={Account}/>
            <Route path='/settings' component={Settings}/>
        </>
    )
};

export default Dashboard;
