import React, {Component, Fragment} from 'react'
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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { SpeakerNotesOff } from '@material-ui/icons';
class ChannelCard extends Component{
    render(){
        const classes = this.props.classes;
        return(
          <Grid item xs={12} md={4} lg={3} className={classes.container}>
            <div className={classes.div}>
              <a href={"/Channel/"+ this.props.invite_link} className={classes.a}>
                { 
                  this.props.avatar !== null ? 
                    <img src={this.props.avatar} className={classes.img}/>
                    : 
                    <img src={'../../image/medicalgroup.jpg'} className={classes.img}/>
                }
                <div><h3>{this.props.name}</h3></div>
                <div>{this.props.consultant_full_name}</div>
                <br/>
              </a>
            </div>
          </Grid>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        
    },
    div:{
      borderRadius: '10px',
      border: '3px solid #27bda0',
      backgroundColor:'#f3f7fa',
      transition:'all ease 0.5s',
      "&:hover": {
          boxShadow: '1px 1px 10px 0px #2ab371',
      },
    },
    a:{
      color: '#3f407d',
       textDecoration: 'none',
    },
    img:{
        width:'100px',
        height:'100px',
        borderRadius: '100%',
        marginTop:'10%',
        border: '2px solid #27bda0',
        transition:'all ease 0.5s',
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
    const name = props.name;
    const consultant_full_name = props.consultant_full_name;
    const invite_link = props.invite_link;
    const avatar = props.avatar;
    return (
        <ChannelCard classes={classes} name={name} consultant_full_name={consultant_full_name} avatar={avatar} invite_link={invite_link}/>
    )
}