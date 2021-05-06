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
import { SecondaryListItems } from './listItems';
import MainListItems from './listItems';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faChevronRight, faUser, faSignOutAlt,faTimesCircle,faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProfile from '../User/Profile/EditProfile';
import Profile from '../User/Profile/Profile';
import MainPage from '../MainPage/MainPage';
import Channels from '../MainPage/Channels';
import GroupingChannel from '../GroupingChannel/GroupingChannel';
import Channel from "../Channel/ChannelPage";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {signOut} from '../User/SignOut';
import { FaDivide } from 'react-icons/fa';
import Collapse from '@material-ui/core/Collapse';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiTypography-displayBlock': {
            fontFamily: 'IRANSansWeb',
        },
        '.MuiListItemIcon-root': {
            justifyContent: 'center',
            color: 'inherit',
        },
        '.fa-th-large': {
            marginLeft: '30%',
        },
        '.fa-user': {
            marginLeft: '30%',
        },
        '.fa-bullhorn': {
            marginLeft: '30%',
        },
        '.fa-layer-group': {
            marginLeft: '30%',
        },
        '.MuiToolbar-root': {
            backgroundColor: '#3aadd9',
        },
        // '.MuiDialog-paperWidthSm': {
        //     top: '35px !important',
        //     borderRadius: '7px !important',
        //     position: 'absolute',
        //     left: '1%',
        // },
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
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
        },
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
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '100%',
    },
    profileBox: {
        width: '10%',
        height: '100px',
        color: '#3f407d',
        position: 'absolute',
        display: 'none',
        zIndex: '1000',
        left: '1%',
        top: '100%',
        textAlign: 'right',
        backgroundColor: '#fff',
    },
    dialog: {
        textAlign: 'right',
        fontFamily: 'IRANSansWeb',
        position: 'absolute',
        left: '0%',
        top: '33px',
        width: '290px',
        height: '290px',
        overflow: 'hidden',
        borderRadius: '30px',
    },
    link: {
        textDecoration: 'none',
        color: '#3f407d',
    },
    divInDialog: {
        fontFamily: 'IRANSansWeb',
        display: 'grid',
        gridTemplateColumns: '80% 20%',
        padding: '20px 0px',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: 'rgba(58,173,217,1)',
            color: '#fff',
        },
    },
    buttonSignout: {
        fontFamily: 'IRANSansWeb',
        justifyContent: 'center',
    },
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userType, setUserType] = useState('');

    const [title, setTitle] = useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openSignOutDialog, setOpenSignOutDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleClickOpenSignOutDialog = () => {
        setOpenSignOutDialog(true);
        setOpenDialog(false);
    };

    const handleCloseOpenSignOutDialog = () => {
        setOpenSignOutDialog(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    useEffect(() => {
        axios.get(serverURL() + "profile/", TokenConfig())
            .then(res => {
                setFirstname(res.data.first_name);
                setLastname(res.data.last_name);
                setUsername(res.data.username);
                setAvatar(res.data.avatar)
                setUserType(res.data.user_type)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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
                                <div >
                                    {avatar !== null ?
                                        <div>
                                            <Button onClick={handleClickOpen}>
                                                <img src={avatar} className={classes.avatar} />
                                            </Button>
                                        </div> :
                                        <IconButton color="inherit" onClick={handleClickOpen}>
                                            <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: '#fff' }} />
                                        </IconButton>}
                                    <Dialog
                                        open={openDialog}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-slide-title"
                                        aria-describedby="alert-dialog-slide-description"
                                        classes={{
                                            paper: classes.dialog
                                        }}
                                    // className={classes.dialog}

                                    >
                                        <DialogTitle>
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: '75% 25%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '250px',
                                            }}>
                                                <div>
                                                    <span
                                                        style={{ fontSize: '20px', fontFamily: 'IRANSansWeb' }}>{firstname}</span>&nbsp;
                                                            <span
                                                        style={{ fontSize: '20px', fontFamily: 'IRANSansWeb' }}>{lastname}</span><br />
                                                    <span style={{ fontSize: '14px', fontFamily: 'IRANSansWeb' }}>@{username}</span>
                                                </div>
                                                <div style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'grid',
                                                }}>
                                                    {avatar !== null ?
                                                        <img src={avatar} className={classes.avatar} />
                                                        :
                                                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                                                    }
                                                </div>
                                            </div>
                                            <hr />
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                <div >
                                                    <div >
                                                        <Link to={"/Profile/" + username} className={classes.link}>
                                                            <div onClick={handleClose} className={classes.divInDialog}>
                                                                <div style={{ alignItems: 'center', display: 'grid' }}>{'پروفایل'}</div>
                                                                <div style={{ alignItems: 'center', display: 'grid', justifyContent: 'center' }}><FontAwesomeIcon icon={faUserCircle} style={{ color: 'inherit', margin: '0', fontSize: '25px' }} size="2x" /></div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <div className={classes.link}
                                                        // onClick={handleClickOpen}
                                                        >
                                                            <div onClick={handleClickOpenSignOutDialog} className={classes.divInDialog} style={{ cursor: 'pointer' }}>
                                                                <div style={{ alignItems: 'center', display: 'grid' }}>{'خروج'}</div>
                                                                <div style={{ alignItems: 'center', display: 'grid', justifyContent: 'center' }}><FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'inherit', fontSize: '25px' }} size="2x" /></div>                                                               </div>
                                                            <Dialog
                                                                open={openSignOutDialog}
                                                                onClose={handleCloseOpenSignOutDialog}
                                                                aria-labelledby="alert-dialog-title2"
                                                                aria-describedby="alert-dialog-description2"
                                                            >
                                                                <DialogTitle id="alert-dialog-title2" >
                                                                    <div className={classes.buttonSignout}>{'خروج از حساب کاربری'}</div>
                                                                </DialogTitle>
                                                                <DialogActions>
                                                                    <div style={{justifyContent: 'center',width: '100%',display: 'flex'}}>
                                                                    <Button className={classes.buttonSignout}
                                                                        onClick={()=>{
                                                                            {userType === "normal_user" ? 
                                                                            signOut("user")
                                                                            :
                                                                            signOut("consultant")
                                                                        }}}>
                                                                        <div style={{color: 'red'}}>
                                                                        <div><FontAwesomeIcon icon={faPowerOff} style={{ color: 'inherit', margin: '0', fontSize: '25px' }} size="2x" /></div>
                                                                        <div>بله</div>
                                                                        </div>
                                                                    </Button>
                                                                    <Button className={classes.buttonSignout} onClick={handleCloseOpenSignOutDialog} >
                                                                    <div style={{color: 'green'}}>
                                                                        <div><FontAwesomeIcon icon={faTimesCircle} style={{ color: 'inherit', margin: '0', fontSize: '25px' }} size="2x" /></div>
                                                                        <div>خیر</div>
                                                                        </div>
                                                                             </Button></div>
                                                                </DialogActions>
                                                            </Dialog>

                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                </div>
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
                                    <FontAwesomeIcon icon={faChevronRight}
                                        style={{ color: '#3f407d', fontSize: '25px', }} />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{<MainListItems />}</List>
                            <Divider />
                            <List>{SecondaryListItems}</List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Switch>
                                    <Route path="/EditProfile">
                                        <EditProfile title={'داشبورد'} />
                                    </Route>
                                    <Route path="/Dashboard">
                                        <MainPage title={'پروفایل'} />
                                    </Route>
                                    <Route path="/Profile/:username">
                                        <Profile title={'پروفایل'} />
                                    </Route>
                                    <Route path="/Channels">
                                        <Channels title={'کانال ها'} />
                                    </Route>
                                    <Route path="/GroupingChannel">
                                        <GroupingChannel title={'Settings'} />
                                    </Route>
                                    <Route path="/Channel/:channelId">
                                        <Channel />
                                    </Route>
                                </Switch>
                            </Container>
                        </main>
                    </Router>
                </div>
            </RTL>
        </Material_RTL>
    );
}