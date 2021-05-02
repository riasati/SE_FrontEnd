import React, {Component} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import ChannelCard from './ChannelCard';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from '../../RequestConfig/TokenConfig';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

class GroupingChannel extends Component{
    constructor(){
      super();
      this.state = {
        searchword: '',
        searchgroup: '',
        request: '',
      }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    componentWillMount() {
        var res = [];
        const [list, setList] = this.props.list;
        const [pending, setPending] = this.props.pending;
        axios.get(serverURL()+'channel/search-for-channel/'+'?query= ',TokenConfig())
            .then(result=>{
                console.log(result);
                res.push(...result.data.data);
                var ll = res.map((q) => q);
                setList([...ll]);
                setPending(false)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render(){
        const classes = this.props.classes;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const [list, setList] = this.props.list;
        const [pending, setPending] = this.props.pending;
        var res = [];
        const handleClick = e =>{
          setPending(true)
          setList([])
          if(this.state.searchword === '' && (this.state.searchgroup === '' || this.state.searchgroup === 'all') ){
            axios.get(serverURL()+'channel/search-for-channel/'+'?query= ',TokenConfig())
              .then(result=>{
                console.log(result);
                res.push(...result.data.data);
                var ll = res.map((q) => q);
                setList([...ll]);
                setPending(false)
              })
              .catch(err=>{
                console.log(err)
              })
          }
          else if(this.state.searchword === '' && this.state.searchgroup !== ''){
            axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category='+ this.state.searchgroup,TokenConfig())
              .then(result=>{
                console.log(result);
                res.push(...result.data.data);
                var ll = res.map((q) => q);
                setList([...ll]);
                setPending(false)
              })
              .catch(err=>{
                console.log(err)
              })
          }
          else if(this.state.searchword !== '' && this.state.searchgroup === ''){
            axios.get(serverURL()+'channel/search-for-channel/'+'?query='+this.state.searchword,TokenConfig())
              .then(result=>{
                console.log(result);
                res.push(...result.data.data);
                var ll = res.map((q) => q);
                setList([...ll]);
                setPending(false)
              })
              .catch(err=>{
                console.log(err)
              })
          }
          else if(this.state.searchword !== '' && this.state.searchgroup !== ''){
            axios.get(serverURL()+'channel/search-for-channel/'+'?query='+this.state.searchword+'&search_category='+ this.state.searchgroup,TokenConfig())
              .then(result=>{
                console.log(result);
                res.push(...result.data.data);
                var ll = res.map((q) => q);
                setList([...ll]);
                setPending(false)
                console.log(list);
              })
              .catch(err=>{
                console.log(err)
              })
          }
        }
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
                      <Grid container spacing={3} component="h6">
                      <Grid item xs={0} sm={0} md={2}>
                                  
                          </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                        <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="searchgroup"><span style={{fontFamily: 'IRANSansWeb'}}>حوزه مشاوره</span></InputLabel>
                              <Select
                                  size="normal"
                                  labelId="searchgroup"
                                  id="searchgroup"
                                  name="searchgroup"
                                  value={this.state.searchgroup}
                                  onChange={this.handleChange}
                                  required
                                  label="searchgroup"
                                  InputProps={{
                                      style: {fontFamily: 'IRANSansWeb'},
                                  }}
                              >
                                  <MenuItem value={"Lawyer"}>                 <span className={classes.spanList} >وکالت</span></MenuItem>
                                  <MenuItem value={"Immigration"}><span className={classes.spanList}>مهاجرت تحصیلی</span></MenuItem>
                                  <MenuItem value={"medical"}>                <span className={classes.spanList}>پزشکی</span></MenuItem>
                                  <MenuItem value={"Psychology"}>             <span className={classes.spanList}>روانشناسی</span></MenuItem>
                                  <MenuItem value={"EntranceExam"}>          <span className={classes.spanList}>کنکور</span></MenuItem>
                                  <MenuItem value={"AcademicAdvice"}>        <span className={classes.spanList}>تحصیلی</span></MenuItem>
                                  <MenuItem value={"all"}>        <span className={classes.spanList}>همه</span></MenuItem>
                              </Select>
                          </FormControl>
                        </Grid>
                          <Grid item xs={12} sm={12} md={6}>
                          
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
                                        onClick={handleClick}
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
                          <Grid item xs={0} sm={0} md={2}>
                                  
                          </Grid>
                        </Grid>
                      </ValidatorForm>
                      <br/>
                      
                      <Grid container spacing={3} className={classes.container}>
                        {pending ? (<CircularProgress className={classes.CircularProgress}/>):
                        list.length !== 0 ? (list.map((data)=>{
                          console.log(data)
                          console.log(data.name)
                                return(
                                <ChannelCard name={data.name} consultant_full_name={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelID={data.channelID}/>
                              )
                            })) : (<div style={{color:'#3f407d',width: '100%',textAlign: 'center'}}>
                              <h2>
                              چیزی برای نمایش نیست!
                              </h2>
                            </div>)
                        }
                      </Grid>
                      <br/>
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
        '.MuiMenuItem-root':{
          direction: 'rtl !important',
      },
    },
    CircularProgress:{
      color: '#0e918c',
      width: '100px  !important',
      height: '100px !important',
    },
    spanList:{
      fontFamily: 'IRANSansWeb',
      direction:'rtl',
      width:'100%'
    },
    container: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      fontFamily: 'IRANSansWeb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
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
    formControl: {
      minWidth: '100%',
    },
}));

export default () => {
    const classes = useStyles();
    const list = React.useState([]);
    const request = React.useState('');
    const pending = React.useState(false);
    return (
        <GroupingChannel classes={classes} list={list} request={request} pending={pending}/>
    )
}