import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import BugReportIcon from '@material-ui/icons/BugReport';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from "./Menu/Menu";
import {useSelector} from 'react-redux';
import {getIsSignedIn} from '../../reducers/auth';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: '#E5F0FF',
        width: '100%',
        height: '65px',
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    logoIcon: {
        fill: '#7EB3FF',
    },
    authFalse: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const Header = () => {
    const styles = useStyles();
    const isAuth = useSelector(state => getIsSignedIn(state));
    return (
        <div>
            <AppBar position="static" className={styles.root}>
                <Toolbar>
                    <Box flexGrow={1} className={!isAuth && styles.authFalse}>
                        <NavLink to='/'>
                            <BugReportIcon className={`${styles.largeIcon} ${styles.logoIcon}`}/>
                        </NavLink>
                    </Box>
                    {isAuth && <Menu/>}
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
