import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import FormHeader from '../../../Auth/FormHeader';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector} from 'react-redux';
import {getUsers} from '../../../../../reducers/user';

const useStyles = makeStyles({
    searchBar: {
        marginTop: '10px',
    }
});

const AddMember = () => {
    const styles = useStyles();

    const users = useSelector(state => getUsers(state));

    return (
        <Box>
            <FormHeader title='Add a new member' icon={false}/>
            <Box className={styles.searchBar}>
                <Autocomplete
                    id="free-solo-demo"
                    userSearch
                    options={users.map((option) => `${option.firstName} ${option.lastName} - ${option.email}`)}
                    renderInput={(params) => (
                        <TextField {...params} label="users" margin="normal" variant="outlined" />
                    )}
                />
            </Box>
        </Box>
    )
};

export default AddMember;
