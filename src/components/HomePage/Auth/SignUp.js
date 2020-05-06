import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHeader from './FormHeader';
import {formHelperText} from '../../../const/auth';
import {validateForm} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getIsEmailValid, getIsFirstNameValid, getIsLastNameValid, getIsPasswordValid} from '../../../reducers/form';
import {
    CHANGE_IS_EMAIL_VALID,
    CHANGE_IS_FIRST_NAME_VALID,
    CHANGE_IS_LAST_NAME_VALID,
    CHANGE_IS_PASSWORD_VALID
} from '../../../actions/form';
import {signUp} from '../../../actions/auth';
import {getIsSignedUp} from '../../../reducers/auth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
    successSignUpText: {
        color: '#81c784',
        fontWeight: 'bold',
    },
});

const SignUp = () => {
    const styles = useStyles();

    const [helperText] = useState(formHelperText);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    const isFnameValid = useSelector(state => getIsFirstNameValid(state));
    const isLnameValid = useSelector(state => getIsLastNameValid(state));
    const isEmailValid = useSelector(state => getIsEmailValid(state));
    const isPasswordValid = useSelector(state => getIsPasswordValid(state));

    const isSignedUp = useSelector(state => getIsSignedUp(state));

    const handleInputs = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'fname') {
            setFirstName(value);
        } else if (name === 'lname') {
            setLastName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validate = () => {
        validateForm(dispatch, {firstName, lastName, email, password});
    };

    const submit = () => {
        validate();
        if (isFnameValid && isLnameValid && isEmailValid && isPasswordValid) {
            dispatch(signUp({firstName, lastName, email, password}))
        }
    };

    return (
        <div className={styles.root}>
            <FormHeader title="Sign Up" icon={true}/>
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
                        error={!isFnameValid}
                        helperText={!isFnameValid && helperText.fname}
                        onFocus={() => dispatch({type: CHANGE_IS_FIRST_NAME_VALID, payload: true})}
                    />
                </FormControl>
                <FormControl required>
                    <TextField
                        name="lname"
                        label="Last Name"
                        variant="outlined"
                        onChange={handleInputs}
                        error={!isLnameValid}
                        helperText={!isLnameValid && helperText.lname}
                        onFocus={() => dispatch({type: CHANGE_IS_LAST_NAME_VALID, payload: true})}
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
                        error={!isEmailValid}
                        helperText={!isEmailValid && helperText.email}
                        onFocus={() => dispatch({type: CHANGE_IS_EMAIL_VALID, payload: true})}
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
                        error={!isPasswordValid}
                        helperText={helperText.password}
                        onFocus={() => dispatch({type: CHANGE_IS_PASSWORD_VALID, payload: true})}
                    />
                </FormControl>
            </Grid>
            {isSignedUp &&
            <Grid
                container
                fullWidth
                margin="normal"
                justify="center"
                alignItems="center"
            >
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={styles.successSignUpText}
                >
                    {formHelperText.successSignUp}
                </Typography>
            </Grid>}
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
        </div>
    )
};

export default SignUp;
