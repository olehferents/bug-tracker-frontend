import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    formHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    lockIconWrapper: {
        height: '40px',
        width: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: 'rgb(220, 0, 78)',
    },
    menuIcon: {
        width: '1em',
        height: '1em',
        fill: 'white',
    },
    contentText: {
        fontSize: '32px',
        color: '#0351C1',
        textAlign: 'center',
        marginBottom: '10px',
    },
});

const FormHeader = (props) => {
    const styles = useStyles();
    const {title} = props;

    return (
        <div className={styles.formHeader}>
            <div className={styles.lockIconWrapper}>
                <LockIcon className={styles.menuIcon}/>
            </div>
            <span className={styles.contentText}>{title}</span>
        </div>
    )
};

export default FormHeader;
