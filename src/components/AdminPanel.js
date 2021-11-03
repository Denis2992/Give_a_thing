import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {makeStyles} from "@mui/styles";
import {HashRouter, NavLink, Route, useHistory, Switch} from "react-router-dom";
import getFirebase from "./firebase";
import {useContext} from "react";
import {CurrentUserContext} from "../App";
import UserData from "./adminPanel_components/UserData";
import GivenThings from "./adminPanel_components/GivenThings";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    navLink: {
        textDecoration: "none",
        color: theme.palette.text.primary,
    }
}));

export default function PanelDrawer() {
    const classes = useStyles();
    const history = useHistory();
    const firebase = getFirebase();
    const {setCurrentUser} = useContext(CurrentUserContext);

    const signOut = async () => {
        try {
            if (firebase) {
                await firebase.auth().signOut();
            }
            setCurrentUser(null);
            history.push("/wylogowano");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Panel użytkownika
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <NavLink
                            exact to="/panel"
                            className={classes.navLink}
                            activeStyle={{fontWeight: 600}}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    <ManageAccountsIcon/>
                                </ListItemIcon>
                                Dane użytkownika
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to="/panel/oddane-rzeczy"
                            className={classes.navLink}
                            activeStyle={{fontWeight: 600}}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    <Inventory2OutlinedIcon/>
                                </ListItemIcon>
                                Oddane rzeczy
                            </ListItem>
                        </NavLink>
                    </List>
                    <Divider />
                    <List>
                        <ListItem
                            button
                            onClick={() => history.push("/")}
                        >
                            <ListItemIcon>
                                <HomeIcon color="info"/>
                            </ListItemIcon>
                            <ListItemText>Strona główna</ListItemText>
                        </ListItem>
                        <ListItem button
                                  onClick={() => history.push("/oddaj-rzeczy")}
                        >
                            <ListItemIcon>
                                <AddCircleIcon color="success"/>
                            </ListItemIcon>
                            <ListItemText>Oddaj rzeczy</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            onClick={signOut}
                        >
                            <ListItemIcon>
                                <LogoutIcon color="error"/>
                            </ListItemIcon>
                            <ListItemText>Wyloguj</ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <HashRouter>
                    <Switch>
                        <Route exact path="/panel" component={UserData}/>
                        <Route path="/panel/oddane-rzeczy" component={GivenThings}/>
                    </Switch>
                </HashRouter>
            </Box>

        </Box>
    );
}