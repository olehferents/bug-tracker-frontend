import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {getCurrentProject} from '../../../../../reducers/project';
import {getProjectReleases} from '../../../../../reducers/release';
import {getIssues} from '../../../../../reducers/issue';
import ChronologyRow from './ChronologyRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {modalCustomStyles} from '../../../../../const/modalStyles';
import Modal from 'react-modal';
import AddRelease from './AddRelease';

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

    const project = useSelector(state => getCurrentProject(state));
    const releases = useSelector(state => getProjectReleases(state));
    const issues = useSelector(state => getIssues(state));
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    }, [project, releases, issues]);

    const handleNewReleaseModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    if (releases.length === 0) {
        return (
            <>
                <Typography
                    variant="h3"
                    gutterBottom
                    className={styles.noReleases}
                >
                    There is no releases
                </Typography>
                <Grid
                    container
                    fullWidth
                    margin="normal"
                    justify="center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleNewReleaseModal}
                    >
                        Create a new release
                    </Button>
                </Grid>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleNewReleaseModal}
                    style={modalCustomStyles}
                >
                    <AddRelease/>
                </Modal>
            </>
        )
    }

    return (
        <Box>
            <Grid
                container
                fullWidth
                margin="normal"
                justify="center"
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleNewReleaseModal}
                >
                    Create a new release
                </Button>
            </Grid>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleNewReleaseModal}
                style={modalCustomStyles}
            >
                <AddRelease/>
            </Modal>
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
