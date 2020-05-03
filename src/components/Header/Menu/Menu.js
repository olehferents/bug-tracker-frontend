import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../actions/auth';

const useStyles = makeStyles({
    menu: {
        display: 'flex',
    },
    menuIcon: {
        width: 30,
        height: 30,
        fill: '#1771F1',
    },
});

const Menu = () => {
    const styles = useStyles();

    const dispatch = useDispatch();

    const handleExitButton = () => {
        dispatch(logOut());
    };

    return (
        <Box className={styles.menu}>
            <NavLink to='/projects'>
                <IconButton>
                    <GroupIcon className={styles.menuIcon}/>
                </IconButton>
            </NavLink>
            <NavLink to='/dialogs'>
                <IconButton>
                    <MessageIcon className={styles.menuIcon}/>
                </IconButton>
            </NavLink>
            <IconButton>
                <NotificationsIcon className={styles.menuIcon}/>
            </IconButton>
            <NavLink to='/settings'>
                <IconButton>
                    <SettingsIcon className={styles.menuIcon}/>
                </IconButton>
            </NavLink>
            <NavLink to='/account'>
                <IconButton>
                    <AccountCircleIcon className={styles.menuIcon}/>
                </IconButton>
            </NavLink>
            <IconButton onClick={handleExitButton}>
                <ExitToAppIcon className={styles.menuIcon}/>
            </IconButton>
        </Box>
    )
};

export default Menu;
