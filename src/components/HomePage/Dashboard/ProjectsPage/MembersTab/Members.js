import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useSelector} from 'react-redux';
import MaterialTable from 'material-table';
import {modalCustomStyles} from '../../../../../const/modalStyles';
import Modal from 'react-modal';
import AddMember from './AddMember';
import {getCurrentProject} from '../../../../../reducers/project';
import {membersColumns} from '../../../../../const/columns';

const useStyles = makeStyles({
    buttonsBlock: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
});

const Members = () => {
    const styles = useStyles();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const currentProject = useSelector(state => getCurrentProject(state));
    const members = currentProject.members;
    return (
        <Box>
            <Box className={styles.buttonsBlock}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={openModal}
                >
                    Add new member
                </Button>
            </Box>
            <MaterialTable
                title="Members"
                columns={membersColumns}
                data={members}
            />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={openModal}
                style={modalCustomStyles}
            >
                <AddMember/>
            </Modal>
        </Box>
    )
};

export default Members;
