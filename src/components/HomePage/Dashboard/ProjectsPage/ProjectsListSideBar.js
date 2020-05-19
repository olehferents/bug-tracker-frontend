import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useDispatch, useSelector} from 'react-redux';
import {getUserProjects} from '../../../../reducers/project';
import {CHANGE_CURRENT_PROJECT} from '../../../../actions/project';
import Button from '@material-ui/core/Button';
import {modalCustomStyles} from '../../../../const/modalStyles';
import CreateProject from './CreateProject';
import Modal from 'react-modal';

const useStyles = makeStyles({
    sideBar: {
        display: 'flex',
    },
    projectsList: {
        display: 'flex',
        width: '100%',
        maxWidth: 230,
        overflow: 'auto',
        maxHeight: `${window.innerHeight}px`,
        height: `${window.innerHeight - 105}px`,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '10px',
        marginLeft: '5px',
        padding: '10px',
    },
    ul: {
        backgroundColor: 'white',
        padding: 0,
        pointer: 'cursor',
        width: '100%',
    },
    listItem: {
        '& span': {
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
});

const ProjectsListSideBar = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const projects = useSelector(state => getUserProjects(state));

    const changeProject = (project) => {
        dispatch({type: CHANGE_CURRENT_PROJECT, payload: project});
    };

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Box className={styles.sideBar}>
            <Box boxShadow={3} className={styles.projectsList}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleModal}
                >
                    Create new
                </Button>
                <Typography variant="h6" gutterBottom>Projects list</Typography>
                <List>
                    <ul className={styles.ul}>
                        {projects.map(item => (
                            <ListItem button className={styles.listItem} onClick={() => changeProject(item)}>
                                <ListItemText primary={`${item.name}`}/>
                            </ListItem>
                        ))}
                    </ul>
                </List>
            </Box>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModal}
                style={modalCustomStyles}
            >
                <CreateProject/>
            </Modal>
        </Box>
    )
};

export default ProjectsListSideBar;
