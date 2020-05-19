import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import FormHeader from '../../Auth/FormHeader';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
    projectTypeControl: {
        marginTop: '10px',
    },
});

const CreateProject = () => {
    const styles = useStyles();

    const [projectType, setProjectType] = useState('default');

    const handleType = (event) => {
        setProjectType(event.target.value);
    };

    const submit = () => {

    };

    return (
        <div className={styles.root}>
            <FormHeader title="Create project" icon={false}/>
            <Grid
                container
                justify="center"
            >
                <FormControl required fullWidth>
                    <TextField
                        name="projectName"
                        label="Project name"
                        variant="outlined"
                        // onChange={}
                        // error={}
                        // helperText={}
                        // onFocus={}
                    />
                </FormControl>
            </Grid>
            <Grid
                container
                justify="center"
            >
                <FormControl component="fieldset" required className={styles.projectTypeControl}>
                    <FormLabel component="legend">Choose project type</FormLabel>
                    <RadioGroup aria-label="projectType" name="type" value={projectType} onChange={handleType}>
                        <FormControlLabel value="default" control={<Radio color="primary"/>} label="Default workflow"/>
                        <FormControlLabel value="scrum" control={<Radio color="primary"/>} label="Scrum workflow"/>
                        <FormControlLabel value="kanban" control={<Radio color="primary"/>} label="Kanban board only"/>
                        <FormControlLabel value="scrumKanban" control={<Radio color="primary"/>}
                                          label="Scrum with kanban board"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid
                container
                fullWidth
                margin="normal"
                justify="center"
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submit}
                    width={300}
                >
                    Submit
                </Button>
            </Grid>
        </div>
    )
};

export default CreateProject;
