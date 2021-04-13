import React, {Component} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import ChannelCard from './ChannelCard';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {Person,Search} from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-elastic-carousel';
class GroupingChannel extends Component{
    constructor(){
      super();
      this.state = {
        searchword: '',
        searchgroup: '',
      }
    }
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }
    handelClickGroup(value){
      this.setState({searchgroup: value})
    }
    render(){
        const classes = this.props.classes;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const breakPoints = [
          { width: 1, itemsToShow: 2 ,itemsToScroll: 1},
          { width: 360, itemsToShow: 4,itemsToScroll: 2 },
          { width: 550, itemsToShow: 6,itemsToScroll: 2},
          { width: 768, itemsToShow: 6,itemsToScroll: 2 },
          { width: 1200, itemsToShow: 6,itemsToScroll: 2 }
        ];
        return(
            <div>
              <CssBaseline/>
              <Material_RTL>
              <RTL>
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={fixedHeightPaper}>
                    <ValidatorForm className={classes.form} noValidate>
                      <Grid container spacing={2} component="h6">
                        <Grid item xs={0} sm={2}>

                        </Grid>
                          <Grid item xs={12} sm={8}>
                              <TextValidator
                                  size="normal"
                                  fullWidth
                                  variant="outlined"
                                  id="searchword"
                                  placeholder={"جست و جو"}
                                  name="searchword"
                                  autoComplete="searchword"
                                  type="string"
                                  value={this.state.searchword}
                                  onChange={this.handleChange}
                                  InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                  InputProps={{
                                      style: {fontFamily: 'IRANSansWeb'},
                                      endAdornment: (
                                        <Button
                                        onClick={this.handleClick}
                                        className={classes.bottomButton}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        >
                                          <FontAwesomeIcon icon={faSearch} style={{color: 'white'}}/>
                                        </Button>
                                      ),
                                  }}
                              />
                          </Grid>
                          <Grid item xs={0} sm={2}>

                          </Grid>
                        </Grid>
                      </ValidatorForm>
                      <br/>
                      <Grid container spacing={2} component="h6">
                      <Grid item xs={0} sm={2}>

                      </Grid>
                      <Grid item xs={12} sm={8} lg={8}>
                        <Carousel breakPoints={breakPoints} isRTL={'true'} pagination="false" style={{color:'#27bda0'}}>
                          <Button onClick={()=>this.handelClickGroup('Educational_immigration' )} className={classes.btn}>مهاجرت تحصیلی </Button>
                          <Button onClick={()=>this.handelClickGroup('Academic_advice'     )} className={classes.btn}>تحصیلی</Button>
                          <Button onClick={()=>this.handelClickGroup('medical'   )} className={classes.btn}>پزشکی</Button>
                          <Button onClick={()=>this.handelClickGroup('Lawyer'    )} className={classes.btn}>وکالت</Button>
                          <Button onClick={()=>this.handelClickGroup('Psychology')} className={classes.btn}>روانشناسی</Button>
                          <Button onClick={()=>this.handelClickGroup('Entrance_Exam')} className={classes.btn}>کنکور</Button>
                        </Carousel>
                      </Grid>
                      <Grid item xs={0} sm={2}>
                                              {/*  */}
                      </Grid>
                      </Grid>
                      <br/>
                      <ChannelCard/>
                      <br/>
                      <ChannelCard/>
                      <br/>
                      <ChannelCard/>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
              </RTL>
              </Material_RTL>
            </div>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.hSiCVM:disabled' : {
            display: 'none',
        },
        '.kGrYtS':{
          display: 'none !important',
        },
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
    bottomButton: {
      fontFamily: 'IRANSansWeb',
      width: '10%',
      height: '40px',
      backgroundColor: '#2ab371',
      color: 'white',
      transition: 'all 0.5s ease-in',
      "&:hover": {
          backgroundColor: '#27bda0' ,
          color: 'white'
      },
    },
    btn:{
      fontFamily: 'IRANSansWeb',
      border: '1px solid #27bda0',
      borderRadius: '50px',
      backgroundColor: '#fff',
      color: 'black',
      transition: 'all 0.5s ease-in',
      "&:hover": {
          backgroundColor: '#27bda0' ,
          color: 'white'
      },
    },
  }));

export default () => {
    const classes = useStyles();
    return (
        <GroupingChannel classes={classes}/>
    )
}