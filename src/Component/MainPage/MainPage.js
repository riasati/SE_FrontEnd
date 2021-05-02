import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import SuggestionChannelCard from '../GroupingChannel/SuggestionChannelCard';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from '../../RequestConfig/TokenConfig';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.bSWeAW:hover:enabled.bSWeAW:focus:enabled':{
      backgroundColor: '#27bda0 !important',
      color: '#ffffff !important',
    },
    '.bSWeAW':{
      backgroundColor: '#27bda0 !important',
      color: '#ffffff !important',
    },
    '.cetQhm' :{
      backgroundColor: '#27bda0 !important',
      boxShadow: '0 0 1px 3px #27bda0 !important',
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
  CircularProgress:{
    color: '#0e918c !important',
    width: '100px !important',
    height: '100px !important',
  },
}));

export default function MainPage() {
  const [list1, setList1] = React.useState([]);
  const [list2, setList2] = React.useState([]);
  const [list3, setList3] = React.useState([]);
  const [list4, setList4] = React.useState([]);
  const [list5, setList5] = React.useState([]);
  const [list6, setList6] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  var res1 = [];
  var res2 = [];
  var res3 = [];
  var res4 = [];
  var res5 = [];
  var res6 = [];
  useEffect(()=>{
    axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=Lawyer',TokenConfig())
      .then(result=>{
        console.log(result);
        res1.push(...result.data.data);
        var ll = res1.map((q) => q);
        setList1([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
      axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=AcademicAdvice',TokenConfig())
      .then(result=>{
        console.log(result);
        res2.push(...result.data.data);
        var ll = res2.map((q) => q);
        setList2([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
      axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=Psychology',TokenConfig())
      .then(result=>{
        console.log(result);
        res3.push(...result.data.data);
        var ll = res3.map((q) => q);
        setList3([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
      axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=Immigration',TokenConfig())
      .then(result=>{
        console.log(result);
        res4.push(...result.data.data);
        var ll = res4.map((q) => q);
        setList4([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
      axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=medical',TokenConfig())
      .then(result=>{
        console.log(result);
        res5.push(...result.data.data);
        var ll = res5.map((q) => q);
        setList5([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
      axios.get(serverURL()+'channel/search-for-channel/'+'?query= '+'&search_category=EntranceExam',TokenConfig())
      .then(result=>{
        console.log(result);
        res6.push(...result.data.data);
        var ll = res6.map((q) => q);
        setList6([...ll]);
        setPending(false)
      })
      .catch(err=>{
        console.log(err)
        setPending(false)
      })
  },[])
  const classes = useStyles();
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
              <div className={classes.title}><h2><i class="fas fa-balance-scale"></i> وکالت </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'} style={{color:'#27bda0'}}>
                  {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list1.size !== 0 ?  (list1.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h2><i class="fas fa-university"></i> تحصیلی </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list2.size !== 0 ?  (list2.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h2><i class="fas fa-head-side-brain"></i> روانشناسی </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list3.size !== 0 ?  (list3.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h2><i class="fas fa-globe-stand"></i> مهاجرت </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list4.size !== 0 ?  (list4.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h2><i class="fas fa-user-md"></i> پزشکی </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list5.size !== 0 ?  (list5.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><h2><i class="far fa-ballot-check"></i> کنکور </h2></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  list6.size !== 0 ?  (list6.map((data)=>{
                    console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/konkorgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
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