import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {issues} from '../../../../../const/columns';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {useSelector} from 'react-redux';
import {getIssues} from '../../../../../reducers/issue';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {green, red} from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import {EnhancedTableHead, getComparator, stableSort} from '../Table/Table';
import {modalCustomStyles} from '../../../../../const/modalStyles';
import Modal from 'react-modal';
import AddIssue from './AddIssue';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    buttonsBlock: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
});

const Issues = () => {
    const styles = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('id');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const rows = useSelector(state => getIssues(state));

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {}, [rows]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <Paper>
            <Box className={styles.buttonsBlock}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={openModal}
                >
                    Add new issue
                </Button>
            </Box>
            <TableContainer>
                <Table stickyHeader={!isModalOpen} aria-label="sticky table">
                    <EnhancedTableHead
                        classes={styles}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        columns={issues}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={row.name}
                                    >
                                        <TableCell>{row.id}</TableCell>
                                        <>
                                            {row.priority === 'normal' ? <Tooltip title="Normal">
                                                <RemoveIcon color="primary" fontSize="large"/>
                                            </Tooltip> : row.priority === 'high' ? <TableCell>
                                                <Tooltip title="High">
                                                    <ArrowDropUpIcon style={{color: red[500]}} fontSize="large"/>
                                                </Tooltip>
                                            </TableCell> : <TableCell>
                                                <Tooltip title="Low">
                                                    <ArrowDropDownIcon style={{color: green[500]}} fontSize="large"/>
                                                </Tooltip>
                                            </TableCell>}
                                        </>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.updatedAt}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={openModal}
                style={modalCustomStyles}
            >
                <AddIssue/>
            </Modal>
        </Paper>
    )
};

export default Issues;