import React from 'react';
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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import SuggestionChannelCard from '../GroupingChannel/SuggestionChannelCard';

import Carousel from 'react-elastic-carousel';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.bSWeAW:hover:enabled.bSWeAW:focus:enabled':{
      backgroundColor: '#27bda0 !important',
      color: '#ffffff !important',
    },
    '.bSWeAW':{
      backgroundColor: '#3aadd9 !important',
      color: '#ffffff !important',
    },
    '.cetQhm' :{
      backgroundColor: 'rgb(58 173 217) !important',
      boxShadow: '0 0 1px 3px rgb(63 64 125) !important', 
    },
  },
  root: {
    display: 'flex',
    fontFamily: 'IRANSansWeb',
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
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  title:{
    textAlign: 'left',
    color: '#3f407d',
  },
}));

export default function MainPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3},
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 }
  ];
  return (
    <div>
      <CssBaseline/>
      

    <Material_RTL>
    <RTL>
    <div >
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <div className={classes.title}><h3>مهاجرت</h3></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'} style={{color:'#27bda0'}}>
                  <SuggestionChannelCard ChannelName={'مهاجرت'} ConsultantName={''} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                  
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h3>رشته تحصیلی</h3></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                  <SuggestionChannelCard ChannelName={'رشته تحصیلی'} ConsultantName={''} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                  
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h3>روانشناسی</h3></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                  <SuggestionChannelCard ChannelName={'روانشناسی'} ConsultantName={''} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                  
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h3>وکالت</h3></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                  <SuggestionChannelCard ChannelName={'وکالت'} ConsultantName={''} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                  
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h3>پزشکی</h3></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                  <SuggestionChannelCard ChannelName={'پزشکی'} ConsultantName={''} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  <SuggestionChannelCard ChannelName={'نام کانال'} ConsultantName={'نام مشاور'} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                  
                </Carousel>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            
          </Box>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
    </RTL>
    </Material_RTL>
    </div>
  );
}