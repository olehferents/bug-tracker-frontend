import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './ProjectsPage/Projects';
import Dialogs from './DialogsPage/Dialogs';
import Account from './AccountPage/Account';
import Settings from './SettingsPage/Settings';

const Dashboard = () => {
    return (
        <>
            <Switch>
                <Route path='/' component={Projects}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/account' component={Account}/>
                <Route path='/settings' component={Settings}/>
            </Switch>
        </>
    )
};

export default Dashboard;
