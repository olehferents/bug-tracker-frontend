import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NoProjects from './NoProjects';
import ProjectsListSideBar from './ProjectsListSideBar';
import DefaultWorkflow from './DefaultWorkflow';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentProject} from '../../../../reducers/project';
import {fetchUserProjects} from '../../../../actions/project';
import {USER_ID} from '../../../../const/auth';
import {fetchIssues} from '../../../../actions/issue';
import {fetchProjectReleases} from '../../../../actions/release';

const useStyles = makeStyles(({
    root: {
        display: 'flex',
    },
}));

const Projects = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const projects = useSelector(state => fetchUserProjects(state));
    const projectCount = projects.length;
    const currentProject = useSelector(state => getCurrentProject(state));
    const projectType = currentProject.type;
    // const projectCount = 1;
    const userId = localStorage.getItem(USER_ID);

    useEffect(() => {
        dispatch(fetchUserProjects(userId));
        dispatch(fetchIssues(currentProject.id));
        dispatch(fetchProjectReleases(currentProject.id));
    }, []);



    return (
        <>
            {projectCount === 0 ?
                <NoProjects/>
                : <Box className={styles.root}>
                    <ProjectsListSideBar/>
                    <DefaultWorkflow/>
                </Box>
            }
        </>
    )
};

export default Projects;
