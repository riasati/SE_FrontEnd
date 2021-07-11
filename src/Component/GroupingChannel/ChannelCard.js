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
              <a href={"/Channel/"+ this.props.channelID} className={classes.a}>
                { 
                  this.props.avatar !== null ? 
                    <img src={this.props.avatar} className={classes.img}/>
                    : 
                    <img src={'../../image/defaultavatar.jpg'} className={classes.img}/>
                }
                <div data-testid="pn"><div style={{fontSize: '20px',marginTop: '5px'}} >{this.props.name}</div></div>
                <div><span data-testid="cfn">{this.props.consultant_first_name}</span>&nbsp;<span data-testid="cln">{this.props.consultant_last_name}</span></div>
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
      border: '1px solid #27bda0',
      backgroundColor:'#fff',
      transition:'all ease 0.5s',
      "&:hover": {
          // boxShadow: '1px 1px 10px 0px #2ab371',
          backgroundColor: '#f3f7fa',
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
        border: '1px solid #27bda0',
        transition:'all ease 0.5s',
        "&:hover": {
            filter: 'drop-shadow(0px 0px 10px #27bda0)',
        },
    },
    container: {
      padding: '5%',
      backgroundColor: '#f3f7fa',
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
    const consultant_first_name = props.consultant_first_name;
    const consultant_last_name = props.consultant_last_name;
    const invite_link = props.invite_link;
    const channelID = props.channelID;
    const avatar = props.avatar;
    return (
        <ChannelCard classes={classes} name={name} consultant_first_name={consultant_first_name} consultant_last_name={consultant_last_name} avatar={avatar} channelID={channelID} invite_link={invite_link}/>
    )
}