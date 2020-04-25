import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from 'react-modal';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '100px',
        flexDirection: 'column',
    },
    title: {
        fontSize: '64px',
        color: '#7AB1FF',
    },
    authButtons: {
        marginTop: '230px',
        display: 'flex',
        justifyContent: 'space-evenly',
        '& button': {
            height: '120px',
            width: '220px',
            '& span': {
                fontWeight: 'bold',
                fontSize: '24px',
            },
        },
    },
    contentText: {
        fontSize: '32px',
        color: '#7AB1FF',
    },
});

const modalCustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const Welcome = () => {
    const styles = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const changeModal = (type) => {
        setModalType(type);
        openModal();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Fade in={true} timeout={4000}>
                <Box className={styles.root}>
                    <Box>
                    <span className={styles.title}>Bug Tracker System <br/>
                        <span className={styles.contentText}>Choose one of the options below</span>
                    </span>
                    </Box>
                    <Box className={styles.authButtons}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => changeModal('signIn')}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => changeModal('signUp')}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Fade>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalCustomStyles}
            >
                {modalType === 'signUp' ? <SignUp/> : <SignIn/>}
            </Modal>
        </div>
    )
};

export default Welcome;
