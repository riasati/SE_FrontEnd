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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Material_RTL from "../../../RTL/Material_RTL";
import RTL from '../../../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SpeakerNotesOff } from '@material-ui/icons';
import { Rate } from 'antd';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import momentJalaali from "moment-jalaali";
class CommentCard extends Component {
    render() {
        const classes = this.props.classes;
        var date = momentJalaali(this.props.date.split('T')[0]);
        // var m = moment();
        // console.log(date.format('jYYYY/jMM/jDD'));
        return (
            <Grid item xs={12} className={classes.container} style={this.props.index % 2 === 0 ? {backgroundColor:"#f5f5f5"}:{backgroundColor:"#fff"}}>
                <Grid container spacing={1} style={{transition: 'all ease 0.8s',}}>
                    <Grid item xs={12} sm={2} style={{}}>
                        <div >
                            <div >
                                {
                                    this.props.avatar !== null ?
                                        <img src={this.props.avatar} className={classes.img} style={!this.props.isUpSm ? {width:"25%",height: '25%'}:{width:"75%",height: '75%'}}/>
                                        :
                                        <img src={'../../image/defaultavatar.jpg'} className={classes.img} style={!this.props.isUpSm ? {width:"25%",height: '25%'}:{width:"75%",height: '75%',}}/>
                                }
                            </div>
                            <div data-testid="fname">{this.props.userFirstName}</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} >
                        <Grid container>
                            <Grid item xs={12} style={{padding: '1% 3%'}}>
                                <div style={{direction: 'ltr',float: 'left'}}><Rate disabled allowHalf defaultValue={this.props.rate} /></div>
                                <div data-testid="date" style={{float: 'right',color: '#c8c7be'}}>{faNumber(date.format('jYYYY/jMM/jDD'))}</div>
                            </Grid>
                            <Grid item xs={12} style={{  }}>
                                <div data-testid="comment" style={{ textAlign: 'justify',padding: '20px' }}>{this.props.comment}</div>
                          </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <div className={classes.div}>
              comments
            </div> */}
            </Grid>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    div: {

    },
    a: {
        color: '#3f407d',
        textDecoration: 'none',
    },
    img: {
        marginTop: '5%',
        borderRadius: '100%',
        border: '2px solid #27bda0',
        transition: 'all ease 0.5s',
        "&:hover": {
            filter: 'drop-shadow(0px 0px 10px #27bda0)',
        },
    },
    container: {
        //   padding: '5%',
        width: '100%',
        // backgroundColor: '#f5f5f5',
        // transition: 'all ease 0.8s',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'IRANSansWeb',
    },
}));
function faNumber(n){
    const farsidigit = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹","/"];
    return n
    .toString()
    .split("")
    .map(x => x !== "/" ? farsidigit[x] : farsidigit[10])
    .join("")
}
export default (props) => {
    const classes = useStyles();
    const userFirstName = props.user_first_name;
    const userLastName = props.user_last_name;
    const avatar = props.avatar;
    const comment = props.comment;
    const rate = props.rate;
    const date = props.date;
    
    const index = props.index;
    const theme = useTheme();
    const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <CommentCard classes={classes} userFirstName={userFirstName} isUpSm={isUpSm} userLastName={userLastName} avatar={avatar} comment={comment} rate={rate} date={date} index={index} />
    )
}