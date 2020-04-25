import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHeader from './FormHeader';
import {formErrorText} from '../../../const/auth';

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

    const [isValid, setIsValid] = useState(true);
    const [errorHelperText] = useState(formErrorText);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputs = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'fname') {

        } else if (name === 'lname') {

        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validate = () => {

    };

    const submit = () => {

    };

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
                    <TextField
                        name="fname"
                        label="First Name"
                        variant="outlined"
                        onChange={handleInputs}
                        error={!isValid}
                        helperText={!isValid && errorHelperText.fname}
                    />
                </FormControl>
                <FormControl required>
                    <TextField
                        name="lname"
                        label="Last Name"
                        variant="outlined"
                        onChange={handleInputs}
                        error={!isValid}
                        helperText={!isValid && errorHelperText.lname}
                    />
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
                        onChange={handleInputs}
                        error={!isValid}
                        helperText={!isValid && errorHelperText.email}
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
                        onChange={handleInputs}
                        error={!isValid}
                        helperText={!isValid && errorHelperText.password}
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
