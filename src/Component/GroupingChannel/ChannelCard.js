import React, {Component} from 'react'
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
class ChannelCard extends Component{
    render(){
        const classes = this.props.classes;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return(
            <div>
              <CssBaseline/>
              {/* <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={fixedHeightPaper}> */}
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4} lg={4} style={{border: '1px solid #ccc'}}>
                      <img src={'../../image/medicalgroup.jpg'} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
                        {/* <img src={"/image/lawyergroup.png"} /> */}

                        <div><h3>{'نام کانال'}</h3></div>
                        <div>{'نام مشاور'}</div>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} style={{border: '1px solid #ccc'}}>
                      <img src={'../../image/medicalgroup.jpg'} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
                        {/* <img src={"/image/lawyergroup.png"} /> */}

                        <div><h3>{'نام کانال'}</h3></div>
                        <div>{'نام مشاور'}</div>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} style={{border: '1px solid #ccc'}}>
                      <img src={'../../image/medicalgroup.jpg'} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
                        {/* <img src={"/image/lawyergroup.png"} /> */}

                        <div><h3>{'نام کانال'}</h3></div>
                        <div>{'نام مشاور'}</div>
                      </Grid>
                    </Grid>
                      {/* <Grid item xs={12} md={4} lg={6} style={{border: '1px solid #ccc'}}>
                        44444444
                      </Grid>
                      <Grid item xs={12} md={4} lg={6} style={{border: '1px solid #ccc'}}>
                        5555555
                      </Grid> */}
                    {/* </Paper>
                  </Grid>
                </Grid>
              </Container>  */}
            </div>
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

export default () => {
    const classes = useStyles();
    return (
        <ChannelCard classes={classes}/>
    )
}