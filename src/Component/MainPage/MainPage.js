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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale,faUniversity,faBrain,faUserMd, } from '@fortawesome/free-solid-svg-icons';
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
    fontSize: '25px',
  },
  CircularProgress:{
    color: '#0e918c !important',
    width: '100px !important',
    height: '100px !important',
  },
}));

export default function MainPage() {
  const [lawyerList, setLawyerList] = React.useState([]);
  const [academicAdviceList, setAcademicAdviceList] = React.useState([]);
  const [psychologyList, setPsychologyList] = React.useState([]);
  const [medicalList, setMedicalList] = React.useState([]);
  const [entranceExamList, setEntranceExamList] = React.useState([]);
  const [immigrationList, setImmigrationList] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  var tmpList = [];
  useEffect(()=>{
    axios.get(serverURL()+'channel/suggestion-channel/',TokenConfig())
      .then(result=>{
        console.log(result);

        // Lawyer
        tmpList.push(...result.data.Lawyer);
        console.log(tmpList);
        var tmp = tmpList.map((q) => q);
        setLawyerList([...tmp]);
        tmpList = []

        // AcademicAdvice
        tmpList.push(...result.data.AcademicAdvice);
        var tmp = tmpList.map((q) => q);
        setAcademicAdviceList([...tmp]);
        tmpList = []

        // Psychology
        tmpList.push(...result.data.Psychology);
        var tmp = tmpList.map((q) => q);
        setPsychologyList([...tmp]);
        tmpList = []

        // medical
        tmpList.push(...result.data.medical);
        var tmp = tmpList.map((q) => q);
        setMedicalList([...tmp]);
        tmpList = []

        // EntranceExam
        tmpList.push(...result.data.EntranceExam);
        var tmp = tmpList.map((q) => q);
        setEntranceExamList([...tmp]);
        tmpList = []

        // Immigration
        tmpList.push(...result.data.Immigration);
        var tmp = tmpList.map((q) => q);
        setImmigrationList([...tmp]);
        tmpList = []


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
              <div className={classes.title}><div><FontAwesomeIcon icon={faBalanceScale}/> وکالت </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'} style={{color:'#27bda0'}}>
                  {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  lawyerList.size !== 0 ?  (lawyerList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/lawyergroup.png'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><div><FontAwesomeIcon icon={faUniversity}/> تحصیلی </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  academicAdviceList.size !== 0 ?  (academicAdviceList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/majorgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><div><i class="fas fa-head-side-brain"></i> روانشناسی </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  psychologyList.size !== 0 ?  (psychologyList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/psychologygroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><div><FontAwesomeIcon icon={faUserMd}/> پزشکی </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  medicalList.size !== 0 ?  (medicalList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/medicalgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><div><i class="far fa-ballot-check"></i> کنکور </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  entranceExamList.size !== 0 ?  (entranceExamList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/konkorgroup.jpg'}></SuggestionChannelCard>
                    )
                    })): null
                  }
                </Carousel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <div className={classes.title}><div><i class="fas fa-globe-stand"></i> مهاجرت </div></div>
              <Paper className={fixedHeightPaper}>
                <Carousel breakPoints={breakPoints} isRTL={'true'}>
                {pending ? (<CircularProgress className={classes.CircularProgress} style={{color: '#0e918c'}}/>):
                  immigrationList.size !== 0 ?  (immigrationList.map((data)=>{
                    // console.log(data)
                    return(
                      <SuggestionChannelCard ChannelName={data.name} ConsultantName={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelId={data.channelID} image={'../../image/migrationgroup.jpg'}></SuggestionChannelCard>
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