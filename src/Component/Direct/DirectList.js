import React, { Component, Fragment } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SpeakerNotesOff } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
class DirectList extends Component {
    render() {
        const classes = this.props.classes;
        var fullName = this.props.first_name + ' ' + this.props.last_name;
        const hc = q =>{
            // alert(q)
        }
        return (
            <Link to={"/Direct/"+ this.props.username} style={{color: '#3f407d',textDecoration: 'none',}}>
            
                <div style={{ display: 'grid', gridTemplateColumns: '20% 80%', height: '75px', color: '#3f407d' }}>
                    <div style={{ backgroundColor: '#fff', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <img src={this.props.avatar} style={{ width: '50px', height: '50px', borderRadius: '100%' }} /> */}
                        {this.props.avatar !== null ?
                            (
                                <Avatar alt={this.props.last_name} src={this.props.avatar} style={{ width: '50px', height: '50px', }}/>
                            ) : (

                                <Avatar {...stringAvatar(fullName)} style={{ fontFamily: 'IRANSansWeb',backgroundColor:  stringToColor(fullName),width: '50px', height: '50px'}} />
                            )
                        }
                    </div>
                    <div style={{ backgroundColor: '#fff', textAlign: 'right', display: 'grid', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0px 0px -20px 0' }}><span>{this.props.first_name}</span>&nbsp;<span>{this.props.last_name}</span></h3>
                        </div>
                        <div>
                            جهت پر کردن فضا
                        </div>
                    </div>
                </div>
                
            </Link>
        )
    }
}
function stringAvatar(name) {
    return {
        sx: {
            // bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`,
    };
}
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
        
    }
    /* eslint-enable no-bitwise */
    console.log(color)
    return color;
}
const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiAvatar-colorDefault':{
            backgroundColor: 'green !important',
        },
    },
    div: {
        borderRadius: '10px',
        border: '3px solid #27bda0',
        backgroundColor: '#f3f7fa',
        transition: 'all ease 0.5s',
        "&:hover": {
            boxShadow: '1px 1px 10px 0px #2ab371',
        },
    },
    a: {
        color: '#3f407d',
        textDecoration: 'none',
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        marginTop: '10%',
        border: '2px solid #27bda0',
        transition: 'all ease 0.5s',
        "&:hover": {
            filter: 'drop-shadow(0px 0px 10px #27bda0)',
        },
    },
    container: {
        padding: '5%',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'IRANSansWeb',
    },
}));

export default (props) => {
    const classes = useStyles();
    const last_name = props.last_name;
    const first_name = props.first_name;
    const userID = props.userID;
    const avatar = props.avatar;
    const username = props.username;
    const pending = props.pending;
    return (
        <DirectList classes={classes} last_name={last_name} first_name={first_name} avatar={avatar} userID={userID} username={username} pending={pending}/>
    )
}