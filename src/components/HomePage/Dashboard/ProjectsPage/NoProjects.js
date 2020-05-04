import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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
    contentText: {
        fontSize: '42px',
        color: '#7AB1FF',
    },
    createProjectButton: {
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
    }
});

const NoProjects = () => {
    const styles = useStyles();

    const createProject = () => {

    };

    return (
        <Box className={styles.root}>
            <Box>
                <span className={styles.title}>
                You have not yet been assigned to any project <br/>
                <span className={styles.contentText}>You can create project yourself</span>
            </span>
            </Box>
            <Box className={styles.createProjectButton}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={createProject}
                >
                    Create project
                </Button>
            </Box>
        </Box>
    )
};

export default NoProjects;
