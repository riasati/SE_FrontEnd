import React, { Component } from "react";
import axios from "axios";
import serverURL from "../../../RequestConfig/serverURL";
import TokenConfig from "../../../RequestConfig/TokenConfig";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { styled, makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Material_RTL from "../../RTL/Material_RTL";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Reservation from '../../Reservation/ReservationPage';
import { Rate } from 'antd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    AccountCircle,
    Email,
    Visibility,
    VisibilityOff,
    VpnKey,
    PhoneAndroid,
    Person,
    PermIdentity,
    FormatListNumbered
} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faSignInAlt, faCommentAlt, faCalendarAlt, faUser, faBullhorn, faInfoCircle, faThumbsUp, faChartLine, faHistory, faStar } from '@fortawesome/free-solid-svg-icons';
import IconButton from "@material-ui/core/IconButton";
import RTL from '../../RTL/M_RTL';
//import LoadingButton from '@material-ui/lab/LoadingButton';
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Collapse from "@material-ui/core/Collapse";
import CommentCard from  './Comments/CommentCard'
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
            id: null,
            isReservationOpen: false,
            rate: 0,
            satisfactionPercentage: 0,
            commentsCount: 0,
            nextpage: '',
            channelId: '',
        }
    }

    componentWillMount() {
        axios.get(serverURL() + "profile/" + this.props.match.params.username + "/", TokenConfig())
            .then(res => {
                this.setState({ firstName: res.data.first_name })
                this.setState({ lastName: res.data.last_name })
                this.setState({ userName: res.data.username })
                this.setState({ phoneNumber: res.data.phone_number })
                this.setState({ email: res.data.email })
                this.setState({ certificate: res.data.certificate })
                this.setState({ avatar: res.data.avatar })
                this.setState({ userType: res.data.user_type })
                this.setState({ id: res.data.id })
                this.setState({ channelId: res.data.channel_id })
            })
            .catch(err => {
                console.log(err)
            })
        const [commentList,setCommentList] = this.props.commentList;
        var res = []
        
        axios.get(serverURL() + "consultant/comment/" + this.props.match.params.username + "/", TokenConfig())
            .then(result => {
                console.log('11111')
                console.log(result)
                this.setState({ nextpage: result.data.next })
                this.setState({ rate: result.data.satisfaction_percentage / 20 })
                this.setState({ satisfactionPercentage: result.data.satisfaction_percentage })
                this.setState({ commentsCount: result.data.count_of_all_comments })
                res.push(...result.data.results);
                var ll = res.map((q) => q);
                setCommentList([...ll]);
                console.log(this.state.rate)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const classes = this.props.classes;
        const [commentList,setCommentList] = this.props.commentList;
        const handelShowMore = e =>{
        var res = []
        res.push(...commentList)
        console.log("--------------")
        console.log(res)
        console.log("--------------")
        axios.get(this.state.nextpage, TokenConfig())
            .then(result => {
                console.log('11111')
                console.log(result)
                this.setState({ nextpage: result.data.next })
                res.push(...result.data.results);
                var ll = res.map((q) => q);
                setCommentList([...ll]);
                console.log(commentList)
            })
            .catch(err => {
                console.log(err)
            })
        }
        //console.log(this.state.id);
        return (
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Material_RTL>
                    <RTL>
                        {this.state.userType !== "normal_user" ?
                            <Grid container spacing={3} >
                                <Grid item xs={12} >
                                    {/*1*/}
                                    <Grid item xs={12} className={classes.info}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                                {this.state.avatar !== null ? 
                                                <img src={this.state.avatar} className={classes.avatar} />
                                                :
                                                <img src={'../../image/defaultavatar.jpg'} className={classes.avatar} />
                                                }
                                            </Grid>
                                            <Grid item xs={12} md={3} lg={3} className={classes.centerItem}>
                                                <div >
                                                    <h2 style={{color: '#fff'}}><span>{this.state.firstName}</span>&nbsp;
                                                    <span>{this.state.lastName}</span></h2>
                                                    <span>متخصص{ }</span>
                                                </div>
                                            </Grid>
                                            <Grid item xs={0} md={5} lg={5} className={classes.centerItem}>
                                                {/*    empty grid*/}
                                            </Grid>
                                            <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                                <div>
                                                    <span>
                                                        <span style={{ color: 'rgb(250 219 20)' }}><FontAwesomeIcon icon={faStar} /></span>
                                                        
                                                    <span>{faNumber(this.state.satisfactionPercentage)}</span>
                                                    <span>{"٪ رضایت از"}</span>&nbsp;
                                                    <span>{faNumber(this.state.commentsCount)}</span>&nbsp;
                                                    <span>{"نظر"}</span>
                                                    </span><br />
                                                    <span>۱۳ سال تجربه کار</span></div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    {/*    2*/}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} lg={6} >
                                            <Item>
                                                <span style={{ color: '#3f407d', textAlign: 'ceter' }}>
                                                    <div style={{fontSize: '20px'}}><FontAwesomeIcon icon={faCommentAlt} />&nbsp;
                                            {'مشاوره آنلاین متنی'}</div>
                                                </span>
                                                <hr /><br />
                                                <span style={{ color: '#636363', textAlign: 'right' }}>
                                                    {'قابلیت ارسال صدا، تصویر و فایل برای مشاور'}
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                    <Link to={"/Direct/" + this.state.userName} style={{textDecoration: 'none',}}>
                                                        <Button style={{
                                                            backgroundColor: '#27bda0',
                                                            fontFamily: 'IRANSansWeb',
                                                            color: '#fff',
                                                            
                                                        }}>{'ارسال پیام به مشاور'}</Button></Link>
                                                </span>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <Item>
                                                <span style={{ color: '#3f407d', textAlign: 'center' }}>
                                                    <div style={{fontSize: '20px'}}><FontAwesomeIcon icon={faBullhorn} style={{ margin: '0' }} />&nbsp;
                                            {'کانال مشاور'}</div>
                                                </span>
                                                <hr /><br />
                                                <span style={{ color: '#636363', textAlign: 'right' }}>
                                                    {'کانال شخصی مشاور'}
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                <Link to={"/Channel/" + this.state.channelId} style={{textDecoration: 'none',}}>
                                                    <Button style={{
                                                        backgroundColor: '#27bda0',
                                                        fontFamily: 'IRANSansWeb',
                                                        color: '#fff'
                                                    }}>{'رفتن به کانال مشاور'}</Button></Link>
                                                </span>
                                            </Item>
                                        </Grid>

                                        <Grid item xs={12} lg={6} >
                                            <Item>
                                                <span style={{ color: '#3f407d', textAlign: 'ceter' }}>
                                                    <div style={{fontSize: '20px'}}><FontAwesomeIcon icon={faCalendarAlt} style={{ margin: "0px" }} />&nbsp;
                                                {'تقويم مشاوره'}</div>
                                                </span>
                                                <hr /><br />
                                                <span style={{ color: '#636363', textAlign: 'right' }}>
                                                    {'قابلیت رزرو زمان براي مشاوره'}
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                    <Button onClick={event => this.setState({ isReservationOpen: !this.state.isReservationOpen })} style={{
                                                        backgroundColor: '#27bda0',
                                                        fontFamily: 'IRANSansWeb',
                                                        color: '#fff'
                                                    }}>{'ديدن زمان هاي مشاوره'}</Button>
                                                </span>
                                            </Item>
                                        </Grid>


                                    </Grid>
                                    {/*    3*/}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Collapse in={this.state.isReservationOpen} timeout="auto" unmountOnExit>
                                                <Reservation consultantID={this.state.id} isInlineClass={true} />
                                            </Collapse>
                                            <Item>
                                                <div style={{ textAlign: 'right', color: '#3f407d' }}><div style={{fontSize: '20px'}}>{'اطلاعات مشاور'}</div></div>
                                                <hr />
                                                <div>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faInfoCircle} style={{ margin: '0' }} />&nbsp;
                                                        {'بیوگرافی'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faHistory} style={{ margin: '0' }} />&nbsp;
                                                        {'سوابق'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faThumbsUp} style={{ margin: '0' }} />&nbsp;
                                                        {'شبکه های اجتماعی'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>
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
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faChartLine} style={{ margin: '0' }} />&nbsp;
                                                        {'فعالیت ها'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    {/* 4 */}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} >
                                            <Item>
                                                <div style={{ textAlign: 'right', color: '#3f407d' }}>
                                                    <div style={{color: '#3f407d',display:'inline-block' }}>
                                                        <span>{'نظرات در مورد'}</span>
                                                        &nbsp;
                                                        <span>{this.state.firstName}</span>
                                                        &nbsp;
                                                        <span>{this.state.lastName}</span>
                                                    </div>&nbsp;
                                                    <strong><span style={{direction: 'ltr'}}><Rate disabled allowHalf value={parseInt(this.state.rate)} /></span>&nbsp;&nbsp;
                                                    <span>{"("}</span>&nbsp;
                                                    <span>{faNumber(this.state.satisfactionPercentage)}</span>&nbsp;
                                                    <span>{"٪ رضایت از"}</span>&nbsp;
                                                    <span>{faNumber(this.state.commentsCount)}</span>&nbsp;
                                                    <span>{"نظر"}</span>&nbsp;
                                                    <span>{")"}</span>&nbsp;</strong>
                                                </div>
                                                <hr/>
                                                {/* <div  >
                                                <CommentCard user_first_name={'عباس'} user_last_name={'بوعذار'} avatar={null} comment={'مشاور خوبیه'} rate={3} date={'۱۴۰۰/۳/۲۷'} index={1}/>
                                                <CommentCard user_first_name={'علی'} user_last_name={'علیان'} avatar={null} comment={'خیلی عالی عالی. پاسخگویی عالی. ممنونم ازشون مشاوره خوب بود نوع درمان انتخاب شده جواب بده که عالی میشه بسیار دکتر خوش اخلاق و.مودبی بودن و با حوصله پاسخ دادن. حتما پیشنهاد میشود. بسیار عالی و باحوصله هستن.حتما پیشنهاد میکنم. بسیار عالی. من واسه دفعه دوم وقت گرفتم. عالی مثل همیشه عالی هستن. خدا خیرشان دهد. پاسخ گویی کامل .صبر و حوصله بسیار خوب بهترین دکتری که دیدم. تشخیص عالی. خدا حفظشان کند.'} rate={1} date={'۱۴۰۰/۳/۲۸'} index={2}/>
                                                <CommentCard user_first_name={'رضا'} user_last_name={'جعفری'} avatar={null} comment={'عالی عالی. پس از مدتها مشکلم حل شد ممنونم'} rate={2} date={'۱۴۰۰/۲/۱۴'} index={3}/>
                                                <CommentCard user_first_name={'حسین'} user_last_name={'رحیمی'} avatar={null} comment={'عالی باسواد خوش خلق باحوصله'} rate={5} date={'۱۴۰۰/۲/۷'} index={4}/>
                                                <CommentCard user_first_name={'مصطفی'} user_last_name={'غلامی فر'} avatar={null} comment={'خیلی عالی.اینهمه مراجعات حضوری داشتم ولی اینجا مشکلم حل شد'} rate={3} date={'۱۴۰۰/۱/۱۷'} index={5}/>
                                                <CommentCard user_first_name={'محمدجواد'} user_last_name={'سلطانی'} avatar={null} comment={'خدا ایشان را برای مردم ایران حفظ کند.مشکلم پس از مدتها حل شد.راضی ام از ایشون. خدا خیرشان دهد'} rate={4} date={'۱۴۰۰/۱/۲۱'} index={6}/>
                                                </div> */}
                                                <div>
                                                    {commentList.length !== 0 ? (
                                                        commentList.map((comment,index) => {
                                                            return(
                                                                <CommentCard user_first_name={comment.user.first_name} user_last_name={comment.user.last_name} avatar={comment.user.avatar} comment={comment.user_comment} rate={comment.user_grade} date={comment.user_grade_date} index={index}/>
                                                            )
                                                        })
                                                    ) : null}
                                                </div>
                                                <div>
                                                    {
                                                        this.state.nextpage !== null ? (
                                                            <Button onClick={handelShowMore} style={{fontFamily: 'IRANSansWeb'}}>نمایش بیشتر</Button>
                                                        ) : null
                                                    }
                                                </div>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                    <br />
                                </Grid>
                            </Grid> :
                            // normal user profile
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    {/*1*/}
                                    <Grid item xs={12} className={classes.info}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                            {this.state.avatar !== null ? 
                                                <img src={this.state.avatar} className={classes.avatar} />
                                                :
                                                <img src={'../../image/defaultavatar.jpg'} className={classes.avatar} />
                                                }
                                            </Grid>
                                            <Grid item xs={12} md={3} lg={3} className={classes.centerItem}>
                                                <div>
                                                    <div style={{fontSize: '20px'}}><span>{this.state.firstName}</span>&nbsp;
                                                <span>{this.state.lastName}</span></div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={0} md={5} lg={5} className={classes.centerItem}>
                                                {/*    empty grid*/}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    {/*    2*/}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} lg={6} >
                                            <Item>
                                                <span style={{ color: '#3f407d', textAlign: 'ceter' }}>
                                                    <div style={{fontSize: '20px'}}><FontAwesomeIcon icon={faCommentAlt} />&nbsp;
                                        {'ارسال پیام'}</div>
                                                </span>
                                                <hr /><br />
                                                <span style={{ color: '#636363', textAlign: 'right' }}>
                                                    {'قابلیت ارسال صدا، تصویر و فایل '}
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                <Link to={"/Direct/" + this.state.userName} style={{textDecoration: 'none',}}>
                                                    <Button style={{
                                                        backgroundColor: '#27bda0',
                                                        fontFamily: 'IRANSansWeb',
                                                        color: '#fff'
                                                    }}>{'ارسال پیام'}</Button></Link>
                                                </span>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                    {/*    3*/}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Item>
                                                <div style={{ textAlign: 'right', color: '#3f407d' }}><div style={{fontSize: '20px'}}>{'اطلاعات کاربر'}</div></div>
                                                <hr />
                                                <div>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faInfoCircle} style={{ margin: '0' }} />&nbsp;
                                                    {'بیوگرافی'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faHistory} style={{ margin: '0' }} />&nbsp;
                                                    {'سوابق'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion defaultExpanded={true} className={classes.colorfont}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faThumbsUp} style={{ margin: '0' }} />&nbsp;
                                                    {'شبکه های اجتماعی'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>
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
                                                            <Typography><span style={{ fontFamily: 'IRANSansWeb', fontWeight: '700' }}>
                                                                <FontAwesomeIcon icon={faChartLine} style={{ margin: '0' }} />&nbsp;
                                                    {'فعالیت ها'}</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <span style={{ fontFamily: 'IRANSansWeb' }}>{'اطلاعات به زودی وارد خواهد شد'}</span>
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
    comments: {
        textAlign: 'left',
        borderRadius: '10px',
        backgroundColor: '#fff',
    },
}))
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    fontFamily: 'IRANSansWeb',
}))
var useranswer=[]
function faNumber(n){
    const farsidigit = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹","٫"];
    return n
    .toString()
    .split("")
    .map(x => x !== "." ? farsidigit[x] : farsidigit[10])
    .join("")
}
function Auxiliary(props) {
    const classes = useStyles();
    const commentList = React.useState([])
    return (
        <Profile classes={classes} match={props.match} commentList={commentList} />
    )
}

export default withRouter(Auxiliary);