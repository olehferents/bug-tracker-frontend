import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        width: '1500px',
        height: '800px',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1771F1',
    },
    icon: {
        width: 30,
        height: 30,
        fill: '#1771F1',
    },
    details: {

    },
    status: {
        width: '85px',
        display: 'flex',
        flexDirection: 'column',
    }
});

const Issue = (props) => {
    const styles = useStyles();

    const {issue} = props;

    const [status, setStatus] = useState(issue.status);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Box className={styles.root}>
            <Box className={styles.header} borderBottom={2}>
                <Typography variant="h6" gutterBottom>
                    {issue.name}
                </Typography>
            </Box>
            <Box className={styles.details}>
                <Box className={styles.status}>
                    <FormControl
                        required
                        margin="normal"
                    >
                        <InputLabel id="statusLabel">Status</InputLabel>
                        <Select
                            id="status"
                            value={status}
                            onChange={handleStatusChange}
                            label={issue.status}
                        >
                            <MenuItem value={issue.status}>
                                {issue.status}
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
};

export default Issue;
