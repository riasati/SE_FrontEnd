import React, { Component } from 'react'
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
import ConsultantCard from './ConsultantCard';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from '../../RequestConfig/TokenConfig';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPaginate from 'react-paginate';
class GroupingChannel extends Component {
  constructor() {
    super();
    this.state = {
      searchword: '',
      searchgroup: '',
      request: '',
      kindsearch: 'Channel',
      totalpage: '',
    }
  }

  componentWillMount() {
    var res = [];
    const [channelList, setChannelList] = this.props.list;
    const [pending, setPending] = this.props.pending;
    const [pending1, setPending1] = this.props.pending1;
    axios.get(serverURL() + 'channel/search-for-channel/' + '?query=&page=1', TokenConfig())
      .then(result => {
        console.log(result);
        res.push(...result.data.results);
        var ll = res.map((q) => q);
        setChannelList([...ll]);
        this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
        setPending(false)
        setPending1(false)
      })
      .catch(err => {
        console.log(err);
         setPending(false);
         setPending1(false);
      })
  }
  render() {
    const classes = this.props.classes;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [channelList, setChannelList] = this.props.list;
    const [consultantList, setConsultantList] = this.props.list;
    const [pending, setPending] = this.props.pending;
    const [pending1, setPending1] = this.props.pending1;
    var res = [];
    const handleChange = e => {
      setChannelList([])
      setConsultantList([])
      this.setState({ [e.target.name]: e.target.value });
      this.setState({ totalpage: 0 })
      setPending1(true)
    }
    const handleClick = e => {
      setPending(true)
      setPending1(false)
      setChannelList([])
      setConsultantList([])
      if (this.state.kindsearch === "Channel") {
        if (this.state.searchword === '' && (this.state.searchgroup === '' || this.state.searchgroup === 'all')) {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=&page=1', TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword === '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + '&search_category=' + this.state.searchgroup + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup === '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + this.state.searchword + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + this.state.searchword + '&search_category=' + this.state.searchgroup + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
      }


      if (this.state.kindsearch === "Consultant") {
        if (this.state.searchword === '' && (this.state.searchgroup === '' || this.state.searchgroup === 'all')) {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=&page=1', TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword === '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + '&search_category=' + this.state.searchgroup + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup === '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + this.state.searchword + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + this.state.searchword + '&search_category=' + this.state.searchgroup + "&page=1", TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
      }
    }

    const handlePageClick1 = event => {
      var page = event.selected + 1;
      setPending(true)
      setChannelList([])
      setConsultantList([])
      console.log(page)
      if (this.state.kindsearch === "Channel") {
        if (this.state.searchword === '' && (this.state.searchgroup === '' || this.state.searchgroup === 'all')) {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=&page=' + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword === '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + '&search_category=' + this.state.searchgroup + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup === '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + this.state.searchword + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'channel/search-for-channel/' + '?query=' + this.state.searchword + '&search_category=' + this.state.searchgroup + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setChannelList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
      }


      if (this.state.kindsearch === "Consultant") {
        if (this.state.searchword === '' && (this.state.searchgroup === '' || this.state.searchgroup === 'all')) {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=&page=' + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword === '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + '&search_category=' + this.state.searchgroup + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup === '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + this.state.searchword + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
        else if (this.state.searchword !== '' && this.state.searchgroup !== '') {
          axios.get(serverURL() + 'consultant/search-consultants/' + '?query=' + this.state.searchword + '&search_category=' + this.state.searchgroup + "&page=" + page, TokenConfig())
            .then(result => {
              console.log(result);
              res.push(...result.data.results);
              var ll = res.map((q) => q);
              setConsultantList([...ll]);
              // this.setState({ totalpage: Math.floor(result.data.count / 12) + 1 })
              setPending(false)
            })
            .catch(err => {
              console.log(err);
              setPending(false);
            })
        }
      }
    }
    const handlePageClick2 = event => {
      console.log("onPageActive")
      console.log(event)
    }
    return (
      <div>
        <CssBaseline />
        <Material_RTL>
          <RTL>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={fixedHeightPaper}>
                    <ValidatorForm className={classes.form} noValidate>
                      <Grid container spacing={3} component="h6">
                        <Grid item xs={0} sm={0} md={1}>

                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                          <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="searchgroup"><span style={{ fontFamily: 'IRANSansWeb' }}>نوع جستوجو</span></InputLabel>
                            <Select
                              size="normal"
                              labelId="kindsearch"
                              id="kindsearch"
                              name="kindsearch"
                              value={this.state.kindsearch}
                              onChange={handleChange}
                              required
                              label="kindsearch"
                              InputProps={{
                                style: { fontFamily: 'IRANSansWeb' },
                              }}
                            >
                              <MenuItem value={"Consultant"}><span className={classes.spanList} >مشاوره</span></MenuItem>
                              <MenuItem value={"Channel"}><span className={classes.spanList}>کانال</span></MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                          <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="searchgroup"><span style={{ fontFamily: 'IRANSansWeb' }}>حوزه مشاوره</span></InputLabel>
                            <Select
                              size="normal"
                              labelId="searchgroup"
                              id="searchgroup"
                              name="searchgroup"
                              value={this.state.searchgroup}
                              onChange={handleChange}
                              required
                              label="searchgroup"
                              InputProps={{
                                style: { fontFamily: 'IRANSansWeb' },
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
                            onChange={handleChange}
                            InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                            InputProps={{
                              style: { fontFamily: 'IRANSansWeb' },
                              endAdornment: (
                                <Button
                                  onClick={handleClick}
                                  className={classes.bottomButton}
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                >
                                  <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                                </Button>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={0} sm={0} md={1}>

                        </Grid>
                      </Grid>
                    </ValidatorForm>
                    <br />

                    <Grid container spacing={3} className={classes.container}>
                      {this.state.kindsearch === "Channel" ? (
                        pending ? (<CircularProgress className={classes.CircularProgress} />) :
                          channelList.length !== 0 ? (channelList.map((data) => {
                            // console.log(data)
                            return (
                              <ChannelCard name={data.name} consultant_first_name={data.consultant.first_name} consultant_last_name={data.consultant.last_name} invite_link={data.invite_link} avatar={data.avatar} channelID={data.channelID} />
                            )
                          })) : (<div style={{ color: '#3f407d', width: '100%', textAlign: 'center' }}>
                            <h2>
                              چیزی برای نمایش نیست!
                              </h2>
                          </div>)
                      ) : null

                      }
                      {this.state.kindsearch === "Consultant" ? (
                        pending ? (<CircularProgress className={classes.CircularProgress} />) :
                          consultantList.length !== 0 ? (consultantList.map((data) => {
                            // console.log(data)
                            return (
                              <ConsultantCard consultant_first_name={data.first_name} consultant_last_name={data.last_name} direct={data.username} avatar={data.avatar} />
                            )
                          })) : (<div style={{ color: '#3f407d', width: '100%', textAlign: 'center' }}>
                            <h2>
                              چیزی برای نمایش نیست!
                              </h2>
                          </div>)
                      ) : null

                      }
                    </Grid>
                    <br />
                    {pending1 ? null : 
                    <div>
                      <ReactPaginate
                        previousLabel={<FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '15px', }} />}
                        nextLabel={<FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: '15px', }} />}
                        breakLabel={'...'}
                        pageCount={this.state.totalpage}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick1}
                        onPageActive={handlePageClick2}

                        pageClassName={classes.pageClass}
                        pageLinkClassName={classes.pageLinkClassName}
                        containerClassName={classes.containerClassName}
                        activeClassName={classes.activeClassName}

                        previousLinkClassName={classes.previousnextbreakLinkClassName}
                        nextLinkClassName={classes.previousnextbreakLinkClassName}
                        breakLinkClassName={classes.previousnextbreakLinkClassName}
                        activeLinkClassName={classes.activeLinkClassName}

                        previousClassName={classes.previousnextbreakClassName}
                        nextClassName={classes.previousnextbreakClassName}
                        breakClassName={classes.previousnextbreakClassName}
                      />
                    </div>}
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
    '.hSiCVM:disabled': {
      display: 'none',
    },
    '.kGrYtS': {
      display: 'none !important',
    },
    '.bSWeAW:hover:enabled.bSWeAW:focus:enabled': {
      backgroundColor: '#27bda0 !important',
      color: '#ffffff !important',
    },
    '.bSWeAW': {
      backgroundColor: '#3aadd9 !important',
      color: '#ffffff !important',
    },
    '.cetQhm': {
      backgroundColor: 'rgb(58 173 217) !important',
      boxShadow: '0 0 1px 3px rgb(63 64 125) !important',
    },
    '.MuiMenuItem-root': {
      direction: 'rtl !important',
    },
  },
  CircularProgress: {
    color: '#0e918c',
    width: '100px  !important',
    height: '100px !important',
  },
  spanList: {
    fontFamily: 'IRANSansWeb',
    direction: 'rtl',
    width: '100%'
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
      backgroundColor: '#27bda0',
      color: 'white'
    },
  },
  btn: {
    fontFamily: 'IRANSansWeb',
    border: '1px solid #27bda0',
    borderRadius: '50px',
    backgroundColor: '#fff',
    color: 'black',
    transition: 'all 0.5s ease-in',
    "&:hover": {
      backgroundColor: '#27bda0',
      color: 'white'
    },
  },
  formControl: {
    minWidth: '100%',
  },
  pageClass: {
    display: 'inline-block',
    listStyle: 'none',
    border: '3px solid #2ab371',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'IRANSansWeb',
    margin: '10px',
    backgroundColor: '#f3f7fa',
  },
  pageLinkClassName: {
    width: '50px',
    height: '30px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all ease 0.5s',
    "&:hover": {
      backgroundColor: '#2ab371',
      color: 'white'
    },
  },
  previousnextbreakClassName: {
    display: 'inline-block',
    listStyle: 'none',
    cursor: 'pointer',
  },
  previousnextbreakLinkClassName: {
    width: '50px',
    height: '30px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#2ab371',
  },
  containerClassName: {
    padding: '0'
  },
  activeLinkClassName: {
    backgroundColor: '#2ab371',
    color: '#fff',
  },
}));

export default () => {
  const classes = useStyles();
  const list = React.useState([]);
  const request = React.useState('');
  const pending = React.useState(false);
  const pending1 = React.useState(false);
  return (
    <GroupingChannel classes={classes} list={list} request={request} pending={pending} pending1={pending1} />
  )
}