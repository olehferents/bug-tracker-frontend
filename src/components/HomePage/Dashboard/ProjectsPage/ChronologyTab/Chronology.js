import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {getCurrentProject} from '../../../../../reducers/project';
import {getProjectReleases} from '../../../../../reducers/release';
import {getIssues} from '../../../../../reducers/issue';
import ChronologyRow from './ChronologyRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTimeline} from '../../../../../actions/timeline';

const useStyles = makeStyles({
    root: {
        padding: '15px',
        marginTop: '25px',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerText: {
        fontWeight: 'bold',
        color: '#052555',
    },
    noReleases: {
        fontWeight: 'bold',
        color: '#052555',
        textAlign: 'center',
        marginTop: '20px',
    },
});

const Chronology = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const project = useSelector(state => getCurrentProject(state));
    const releases = useSelector(state => getProjectReleases(state));
    const issues = useSelector(state => getIssues(state));

    useEffect(() => {
        dispatch(fetchTimeline(1, '2020-05-15', '2020-05-20'));
    }, []);

    useEffect(() => {}, [project, releases, issues]);

    if (releases.length === 0) {
        return (
            <Typography
                variant="h3"
                gutterBottom
                className={styles.noReleases}
            >
                There is no releases
            </Typography>
        )
    }

    return (
        <Box>
            {releases.map(item => {
                return <Paper className={styles.root} elevation={5}>
                    <Box className={styles.header}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={styles.headerText}
                        >
                            {`Test project ${item.name}`}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            className={styles.headerText}
                        >
                            {item.date}
                        </Typography>

                    </Box>
                    <Box>
                        {issues.map(issue => {
                            return <ChronologyRow
                                issueId={issue.id}
                                category={issue.category}
                                description={issue.description}
                                doneByUser={issue.doneBy}
                            />
                        })}
                    </Box>
                </Paper>
            })}
        </Box>
    )
};

export default Chronology;
