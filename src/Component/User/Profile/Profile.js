import React, {Component} from "react";
import axios from "axios";
import serverURL from "../../../RequestConfig/serverURL";
import TokenConfig from "../../../RequestConfig/TokenConfig";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import { styled , makeStyles} from '@material-ui/core/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Material_RTL from "../../RTL/Material_RTL";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    AccountCircle,
    Email,
    Visibility,
    VisibilityOff,
    VpnKey,
    PhoneAndroid,
    Person,
    PermIdentity
} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileImage, faSignInAlt, faCommentAlt, faUser, faBullhorn, faInfoCircle,faThumbsUp,faChartLine,faHistory,faStar} from '@fortawesome/free-solid-svg-icons';
import IconButton from "@material-ui/core/IconButton";
import RTL from '../../RTL/M_RTL';
import LoadingButton from '@material-ui/lab/LoadingButton';
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            phoneNumber: '',
            email: '',
            password: '',
            certificate: '',
            avatar: '',
            userType: '',
        }
    }

    componentWillMount() {
        axios.get(serverURL() + "profile/" + this.props.match.params.username + "/", TokenConfig())
            .then(res => {
                this.setState({firstName: res.data.first_name})
                this.setState({lastName: res.data.last_name})
                this.setState({userName: res.data.username})
                this.setState({phoneNumber: res.data.phone_number})
                this.setState({email: res.data.email})
                this.setState({certificate: res.data.certificate})
                this.setState({avatar: res.data.avatar})
                this.setState({userType: res.data.user_type})
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const classes = this.props.classes;
        return (
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Material_RTL>
                    <RTL>
                        {this.state.userType !== "normal_user" ? 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                {/*1*/}
                                <Grid item xs={12} className={classes.info}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                            <img src={this.state.avatar} className={classes.avatar}/>
                                        </Grid>
                                        <Grid item xs={12} md={3} lg={3} className={classes.centerItem}>
                                            <div>
                                                <h2><span>{this.state.firstName}</span>&nbsp;
                                                    <span>{this.state.lastName}</span></h2>
                                                <span>متخصص{}</span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={0} md={5} lg={5} className={classes.centerItem}>
                                            {/*    empty grid*/}
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                            <div>
                                                <span>
                                                    <span style={{color: '#fff'}}><FontAwesomeIcon icon={faStar}/></span>
                                                    {'۹۹٪ رضایت از ۵۰ نظر'}
                                                </span><br/>
                                                <span>۱۳ سال تجربه کار</span></div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <br/>
                                {/*    2*/}
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={6} >
                                        <Item>
                                        <span style={{color: '#3f407d', textAlign: 'ceter'}}>
                                            <h3><FontAwesomeIcon icon={faCommentAlt}/>&nbsp;
                                            {'مشاوره آنلاین متنی'}</h3>
                                        </span>
                                        <hr/><br/>
                                        <span style={{color: '#636363', textAlign: 'right'}}>
                                            {'قابلیت ارسال صدا، تصویر و فایل برای مشاور'}
                                        </span>
                                        <br/>
                                        <br/>
                                        <span>
                                            <Button style={{
                                                backgroundColor: '#27bda0',
                                                fontFamily: 'IRANSansWeb',
                                                color: '#fff'
                                            }}>{'ارسال پیام به مشاور'}</Button>
                                        </span>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <Item>
                                        <span style={{color: '#3f407d', textAlign: 'center'}}>
                                            <h3><FontAwesomeIcon icon={faBullhorn} style={{margin: '0'}}/>&nbsp;
                                            {'کانال مشاور'}</h3>
                                        </span>
                                        <hr/><br/>
                                        <span style={{color: '#636363', textAlign: 'right'}}>
                                            {'کانال شخصی مشاور'}
                                        </span>
                                        <br/>
                                        <br/>
                                        <span>
                                            <Button style={{
                                                backgroundColor: '#27bda0',
                                                fontFamily: 'IRANSansWeb',
                                                color: '#fff'
                                            }}>{'رفتن به کانال مشاور'}</Button>
                                        </span>
                                        </Item>
                                    </Grid>
                                </Grid>
                            {/*    3*/}
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Item>
                                        <div style={{textAlign: 'right',color: '#3f407d'}}><h3>{'اطلاعات مشاور'}</h3></div>
                                        <hr/>
                                        <div>
                                            <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                    <FontAwesomeIcon icon={faInfoCircle} style={{margin: '0'}}/>&nbsp;
                                                        {'بیوگرافی'}</span></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                >
                                                    <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                    <FontAwesomeIcon icon={faHistory} style={{margin: '0'}}/>&nbsp;
                                                        {'سوابق'}</span></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                >
                                                    <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{margin: '0'}}/>&nbsp;
                                                        {'شبکه های اجتماعی'}</span></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <span style={{fontFamily: 'IRANSansWeb'}}>
                                                            {'اطلاعات به زودی وارد خواهد شد'}</span>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                >
                                                    <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                    <FontAwesomeIcon icon={faChartLine} style={{margin: '0'}}/>&nbsp;
                                                        {'فعالیت ها'}</span></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Grid> : 
                        // normal user profile
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {/*1*/}
                            <Grid item xs={12} className={classes.info}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                        <img src={this.state.avatar} className={classes.avatar}/>
                                    </Grid>
                                    <Grid item xs={12} md={3} lg={3} className={classes.centerItem}>
                                        <div>
                                            <h2><span>{this.state.firstName}</span>&nbsp;
                                                <span>{this.state.lastName}</span></h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={0} md={5} lg={5} className={classes.centerItem}>
                                        {/*    empty grid*/}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <br/>
                            {/*    2*/}
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6} >
                                    <Item>
                                    <span style={{color: '#3f407d', textAlign: 'ceter'}}>
                                        <h3><FontAwesomeIcon icon={faCommentAlt}/>&nbsp;
                                        {'ارسال پیام'}</h3>
                                    </span>
                                    <hr/><br/>
                                    <span style={{color: '#636363', textAlign: 'right'}}>
                                        {'قابلیت ارسال صدا، تصویر و فایل برای مشاور'}
                                    </span>
                                    <br/>
                                    <br/>
                                    <span>
                                        <Button style={{
                                            backgroundColor: '#27bda0',
                                            fontFamily: 'IRANSansWeb',
                                            color: '#fff'
                                        }}>{'ارسال پیام'}</Button>
                                    </span>
                                    </Item>
                                </Grid>
                            </Grid>
                        {/*    3*/}
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Item>
                                    <div style={{textAlign: 'right',color: '#3f407d'}}><h3>{'اطلاعات مشاور'}</h3></div>
                                    <hr/>
                                    <div>
                                        <Accordion defaultExpanded={true} className={classes.colorfont}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{margin: '0'}}/>&nbsp;
                                                    {'بیوگرافی'}</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion defaultExpanded={true} className={classes.colorfont}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                <FontAwesomeIcon icon={faHistory} style={{margin: '0'}}/>&nbsp;
                                                    {'سوابق'}</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion defaultExpanded={true} className={classes.colorfont}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                <FontAwesomeIcon icon={faThumbsUp} style={{margin: '0'}}/>&nbsp;
                                                    {'شبکه های اجتماعی'}</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <span style={{fontFamily: 'IRANSansWeb'}}>
                                                        {'اطلاعات به زودی وارد خواهد شد'}</span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion defaultExpanded={true} className={classes.colorfont}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>
                                                <FontAwesomeIcon icon={faChartLine} style={{margin: '0'}}/>&nbsp;
                                                    {'فعالیت ها'}</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                                        }
                    </RTL>
                </Material_RTL>
            </Container>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {},
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        fontFamily: 'IRANSansWeb',
        backgroundColor: '#f3f7fa',
    },
    info: {
        // backgroundColor: '#3f407d',
        // background: 'rgb(63,64,125)',
        background: 'linear-gradient(306deg, rgba(63,64,125,1) 0%, rgba(58,173,217,1) 53%)',
        color: '#fff',
        textAlign: 'left',
        borderRadius: '10px',
        padding: '1%',
    },
    avatar: {
        width: '8.5rem',
        height: '8.5rem',
        borderRadius: '100%',
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
    },
    colorfont: {
        fontFamily: 'IRANSansWeb',
        color: '#3f407d',
        border: '1px solid #dfdfe8',
    },
}))
const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    fontFamily: 'IRANSansWeb',
}))
function Auxiliary(props) {
    const classes = useStyles();
    return (
        <Profile classes={classes} match={props.match}/>
    )
}

export default withRouter(Auxiliary);