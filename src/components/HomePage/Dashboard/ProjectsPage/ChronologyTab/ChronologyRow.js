import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '20px',
    },
    issueId: {
        color: '#5199FF',
    },
    category: {},
    description: {},
    doneBy: {},
});

const ChronologyRow = (props) => {
    const styles = useStyles();

    const {issueId, category, description, doneByUser} = props;

    return (
        <Box className={styles.root}>
            <span className={styles.issueId}>{`${issueId}:`}</span>
            <span className={styles.category}>{`[${category}]`}</span>
            <span className={styles.description}>{`${description}`}</span>
            <span className={styles.doneBy}>{`(${doneByUser})`}</span>
        </Box>
    )
};

export default ChronologyRow;
