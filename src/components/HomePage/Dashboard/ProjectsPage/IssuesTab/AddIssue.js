import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import FormHeader from '../../../Auth/FormHeader';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {createIssue} from '../../../../../actions/issue';
import {getCurrentProject} from '../../../../../reducers/project';

const AddIssue = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const currentProject = useSelector(state => getCurrentProject(state));
    const projectId = currentProject.id;

    const handleInputs = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'name') {
            setName(value);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleAssignedChange = (event) => {
        setAssignedTo(event.target.value);
    };

    const submit = () => {
        dispatch(createIssue({name, category, assignedTo, projectId}));
    };

    return (
        <Box>
            <FormHeader title='Create a new issue' icon={false}/>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <FormControl
                    required
                    fullWidth
                    margin="normal"
                >
                    <TextField
                        id="name"
                        name="name"
                        autoComplete="name"
                        variant="outlined"
                        label="Issue name"
                        onChange={handleInputs}
                    />
                </FormControl>
                <FormControl
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                >
                    <InputLabel id="categoryInputLabel">Issue category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Issue category"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                >
                    <TextField
                        id="description"
                        name="category"
                        autoComplete="category"
                        variant="outlined"
                        label="Issue category"
                        multiline
                        rows={5}
                    />
                    <FormControl
                        required
                        fullWidth
                        margin="normal"
                    >
                        <InputLabel id="assignedToInputLabel">Assigned to</InputLabel>
                        <Select
                            labelId="assignedTo"
                            id="assignedTo"
                            value={assignedTo}
                            onChange={handleAssignedChange}
                            label="Assigned to"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </FormControl>
            </Grid>
            <Grid
                container
                fullWidth
                margin="normal"
            >
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={submit}
                >
                    Submit
                </Button>
            </Grid>
        </Box>
    )
};

export default AddIssue;
