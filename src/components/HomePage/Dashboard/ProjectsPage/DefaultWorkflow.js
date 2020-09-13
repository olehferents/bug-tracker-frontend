import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chronology from './ChronologyTab/Chronology';
import Members from './MembersTab/Members';
import Issues from './IssuesTab/Issues';
import Repositories from './RepositoriesTab/Repositories';
import Logs from './LogsTab/Logs';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    main: {
        marginTop: '10px',
        marginLeft: '10px',
        backgroundColor: 'white',
        width: '92%',
        height: `${window.innerHeight - 85}px`,
        overflow: 'auto',
    },
    appBar: {
        backgroundColor: '#5199FF',
    }
});

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const DefaultWorkflow = () => {
    const styles = useStyles();
    const history = useHistory();

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        history.push("/projects");
    }, []);

    return (
        <Box className={styles.main}>
            <AppBar position="static" className={styles.appBar}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    centered
                >
                    <Tab label="Logs"/>
                    <Tab label="Chronology"/>
                    <Tab label="Issues"/>
                    <Tab label="Members"/>
                    <Tab label="Repositories"/>
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                <Logs/>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <Chronology/>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <Issues/>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <Members/>
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <Repositories/>
            </TabPanel>
        </Box>
    )
};

export default DefaultWorkflow;
