import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormHeader from './FormHeader';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    root: {
        height: '350px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
});

const SignIn = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <FormHeader title="Sign In"/>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
            </Grid>
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
                        id="email"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        label="Email"
                    />
                </FormControl>
                <FormControl
                    required
                    fullWidth
                    margin="normal"
                >
                    <TextField
                        id="password"
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                    />
                </FormControl>
            </Grid>
            <Grid
                container
                alignItems="center"
                fullWidth
            >
                <FormControlLabel
                    label="Remember me"
                    control={
                        <Checkbox
                            name="rememberMe"
                            color="primary"
                        />
                    }
                >
                </FormControlLabel>
            </Grid>
            <Grid
                container
                fullWidth
                margin="normal"
            >
                <Button fullWidth variant="contained" color="primary">Submit</Button>
            </Grid>
        </div>
    )
};

export default SignIn;
