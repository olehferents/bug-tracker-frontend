import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormHeader from './FormHeader';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {formHelperText} from '../../../const/auth';
import {useDispatch, useSelector} from 'react-redux';
import {getIsEmailValid, getIsPasswordValid} from '../../../reducers/form';
import {validateForm} from '../../../utils';
import {CHANGE_IS_EMAIL_VALID, CHANGE_IS_PASSWORD_VALID} from '../../../actions/form';

const useStyles = makeStyles({
    root: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
});

const SignIn = () => {
    const styles = useStyles();

    const [helperText] = useState(formHelperText);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();

    const isEmailValid = useSelector(state => getIsEmailValid(state));
    const isPasswordValid = useSelector(state => getIsPasswordValid(state));

    const handleInputs = (event, isChecked) => {
        const {name, value} = event.currentTarget;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'rememberMe') {
            setRememberMe(isChecked);
        }
    };

    const validate = () => {
        validateForm(dispatch, {email, password});
    };

    const submit = () => {
        validate();
    };

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
                            onChange={handleInputs}
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

export default SignIn;
