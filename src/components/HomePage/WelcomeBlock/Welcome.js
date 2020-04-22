import React from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '100px',
        flexDirection: 'column',
    },
    title: {
        fontSize: '64px',
        color: '#7AB1FF',
    },
    authButtons: {
        marginTop: '230px',
        display: 'flex',
        justifyContent: 'space-evenly',
        '& button': {
            height: '120px',
            width: '220px',
            '& span': {
                fontWeight: 'bold',
                fontSize: '24px',
            },
        },
    },
    contentText: {
        fontSize: '32px',
        color: '#7AB1FF',
    },
});

const Welcome = () => {
    const styles = useStyles();
    return (
        <div>
            <Box className={styles.root}>
                <Box>
                    <Fade in={true} timeout={4000}>
                        <span className={styles.title}>Bug Tracker System <br/>
                            <span className={styles.contentText}>Choose one of the options below</span>
                        </span>
                    </Fade>
                </Box>
                <Box className={styles.authButtons}>
                    <Button variant="contained" color="primary" size="large">
                        Sign In
                    </Button>
                    <Button variant="contained" color="primary" size="large">
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </div>
    )
};

export default Welcome;
