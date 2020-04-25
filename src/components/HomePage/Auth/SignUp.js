import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHeader from './FormHeader';

const useStyles = makeStyles({
    root: {
        height: '380px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
});

const SignUp = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <FormHeader title="Sign Up"/>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <FormControl required>
                    <TextField id="fname" label="First Name" variant="outlined"/>
                </FormControl>
                <FormControl required>
                    <TextField id="lname" label="Last Name" variant="outlined"/>
                </FormControl>
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
                fullWidth
                margin="normal"
            >
                <Button fullWidth variant="contained" color="primary">Submit</Button>
            </Grid>
        </div>
    )
};

export default SignUp;
