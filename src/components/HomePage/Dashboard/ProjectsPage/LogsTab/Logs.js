import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {format} from 'date-fns';
import Box from '@material-ui/core/Box';
import {useSelector} from 'react-redux';
import {getLogs} from '../../../../../reducers/timeline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import {fetchTimeline} from '../../../../../actions/timeline';

const useStyles = makeStyles({
    logsItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        padding: '10px',
        fontSize: '20px',
    },
    logRow: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '20px',
        width: '100%',
    },
    dateRow: {
        display: 'flex',
        justifyContent: 'start',
        padding: '10px',
        width: '100%',
        alignItems: 'center',
    },
    username: {
        color: '#5199FF',
    },
    issueId: {
        color: '#5199FF',
    },
    date: {
        fontSize: '20px',
        color: '#777B87',
        marginLeft: '5px',
    },
    emptyLogs: {
        fontWeight: 'bold',
        color: '#052555',
        textAlign: 'center',
        marginTop: '20px',
    }
});

const Logs = () => {
    const styles = useStyles();

    const [dateFrom, setDateFrom] = useState(format(new Date(), 'MM/dd/yyyy'));
    const [dateTo, setDateTo] = useState(format(new Date(), 'MM/dd/yyyy'));

    const logs = useSelector(state => getLogs(state));

    const handleDateFrom = (date) => {
        setDateFrom(date);
    };

    const handleDateTo = (date) => {
        setDateTo(date);
    };

    useEffect(() => {
        dispatch(fetchTimeline(1, '2020-05-15', '2020-05-20'));
    }, []);

    if (logs.length === 0) {
        return (
            <Typography
                variant="h3"
                gutterBottom
                className={styles.emptyLogs}
            >
                There is no timeline yet
            </Typography>
        )
    }

    return (
        <Box>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-evenly">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-from"
                        label="Date from"
                        value={dateFrom}
                        onChange={handleDateFrom}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-to"
                        label="Date to"
                        value={dateTo}
                        onChange={handleDateTo}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <>
                {logs.map(item => {
                    const {user, issueId, action, date} = item;
                    return <Box className={styles.logsItem} boxShadow={3}>
                        <Box className={styles.logRow}>
                            <span className={styles.username}>{user.firstName + ' ' + user.lastName}</span>
                            <span>{action}</span>
                            <span className={styles.issueId}>{issueId}</span>
                        </Box>
                        <Box className={styles.dateRow}>
                            <ScheduleIcon className={styles.date}/>
                            <span className={styles.date}>{date}</span>
                        </Box>
                    </Box>
                })}
            </>
        </Box>
    )
};

export default Logs;