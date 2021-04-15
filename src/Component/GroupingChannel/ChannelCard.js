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
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return(
          <Grid item xs={12} md={4} lg={3} style={{border: '1px solid #ccc'}}>
            <img src={'../../image/medicalgroup.jpg'} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
            <div><h3>{this.props.name}</h3></div>
            <div>{this.props.consultant_full_name}</div>
          </Grid>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        
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
      // height: 240,
    },
  }));

export default (props) => {
    const classes = useStyles();
    const name = props.name;
    const consultant_full_name = props.consultant_full_name
    return (
        <ChannelCard classes={classes} name={name} consultant_full_name={consultant_full_name}/>
    )
}