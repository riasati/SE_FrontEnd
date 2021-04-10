import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Profile from '../User/Profile/Profile';
import MainPage from '../MainPage/MainPage';
import Channels from '../MainPage/Channels';
import TitleDictionary from './TitleDictionary';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  '@global': {
      '.MuiTypography-displayBlock': {
          fontFamily: 'IRANSansWeb',
      },
      '.MuiListItemIcon-root':{
          justifyContent: 'center',
      },
      '.fa-th-large':{
        marginLeft: '30%',
      },
      '.fa-user':{
        marginLeft: '30%',
      },
      '.fa-bullhorn':{
        marginLeft: '30%',
      },
      '.MuiToolbar-root':{
        backgroundColor:'#3aadd9',
      },
  },
  root: {
    display: 'flex',
    fontFamily: 'IRANSansWeb',
  },
  toolbar: {
    paddingLeft: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'IRANSansWeb',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(9),
      display: 'none',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    fontFamily: 'IRANSansWeb',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    fontFamily: 'IRANSansWeb',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState('');
    const item = TitleDictionary();
   
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
  return (
    <Material_RTL>
    <RTL>
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            
            {/* {props.title} */}
          </Typography>
          <IconButton color="inherit">
            
            <FontAwesomeIcon icon={faUserCircle} size="2x" style={{color: '#fff'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
          <FontAwesomeIcon icon={faChevronRight}  style={{color: '#3f407d',fontSize:'25px',}}/>
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/Profile" >
                <Profile title={'داشبورد'}/>
              </Route>
              <Route path="/Dashboard" >
                <MainPage title={'پروفایل'}/>
              </Route>
              <Route path="/Channels">
                <Channels title={'کانال ها'}/>
              </Route>
              {/* <Route path="/Settings" onClick={()=>{setTitle('کانال ها')}}>
                <Channels title={'Settings'}/>
              </Route> */}
            </Switch>
          </Container>
      </main>
      </Router>
    </div>
    </RTL>
    </Material_RTL>
  );
}