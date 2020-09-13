import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import {format} from "date-fns";
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentProject} from '../../../../../reducers/project';
import {createIssue} from '../../../../../actions/issue';
import FormHeader from '../../../Auth/FormHeader';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import {getToDoIssues} from '../../../../../reducers/issue';

const useStyles = makeStyles({
    formControl: {
        minWidth: 120,
        maxWidth: 300,
        marginBottom: '10px',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AddRelease = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [date] = useState(format(new Date(), 'MM/dd/yyyy'));
    const currentProject = useSelector(state => getCurrentProject(state));
    const projectId = currentProject.id;
    const issues = useSelector(state => getToDoIssues(state));
    const [selectedIssues, setIssues] = useState([]);

    const handleInputs = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'name') {
            setName(value);
        }
    };

    const handleChange = (event) => {
        setIssues(event.target.value);
    };

    const submit = () => {
        dispatch(createIssue({name, date, projectId}));
    };

    return (
        <Box>
            <FormHeader title='Create a new release' icon={false}/>
            <Grid container direction="column" justify="center" alignItems="center">
                <FormControl required fullWidth margin="normal">
                    <TextField id="name" name="name" autoComplete="name" variant="outlined" label="Release name" onChange={handleInputs}/>
                </FormControl>
                <FormControl className={styles.formControl} fullWidth>
                    <InputLabel id="release-issued">Issues</InputLabel>
                    <Select id="issue-chip" multiple value={selectedIssues} onChange={handleChange} input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={styles.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={styles.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {issues.map((issue) => (
                            <MenuItem key={issue.id} value={issue.name}>
                                {issue.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid container fullWidth margin="normal">
                <Button fullWidth variant="contained" color="primary" onClick={submit}>
                    Submit
                </Button>
            </Grid>
        </Box>
    )
};

export default AddRelease;
