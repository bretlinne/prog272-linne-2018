import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const sideBarItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>
    </div>
);

export const demoItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/get-file">
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Get File"/>
        </ListItem>

    </div>
);