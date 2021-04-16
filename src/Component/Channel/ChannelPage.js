import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Material_RTL from "../RTL/Material_RTL";
import axios from 'axios';
import RTL from '../RTL/M_RTL';
import serverURL from "../../RequestConfig/serverURL";
import ErrorDialog from '../../RequestConfig/ErrorDialog';
import LoadingOverlay from 'react-loading-overlay';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import InputAdornment from '@material-ui/core/InputAdornment';
import {Done} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Collapse from '@material-ui/core/Collapse';
import ChannelCard from "./ChannelCard";
import ChannelCardList from "./ChannelCardList";
import ChannelMessages from "./ChannelMessages";
import ChannelMemberCard from "./ChannelMemberCard";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { BsCardText } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import DeleteIcon from '@material-ui/icons/Delete';
import photo from '../../../src/Resource/11.jpg';

class Channel extends Component {
    constructor(){
        super();
        this.state={
            loading:true,
            editChannel:false,
            consultantSubscribe:false,
            admin:true,
            isJoined:false,
        }
    }
    componentDidMount() {
        this.setState({loading:false});
    }
    filesArray = [];
    render() {
        const classes = this.props.classes;

        const handleEditChannel = (event) => {
            if (this.state.editChannel === false){
                this.setState({editChannel:true})
            }
            else{
                this.setState({editChannel:true})
            }
        };
        const handleShowMembers=()=>{
            if (this.state.editChannel === true){
                this.setState({editChannel:false})
            }
            if (this.state.showMembers === true){
                this.setState({showMembers:false})
            }
            else{
                this.setState({showMembers:true})
            }
        };
        const handleShowInfo=()=>{
            if (this.state.editChannel === true){
                this.setState({editChannel:false})
            }
            if (this.state.showInfo === true){
                this.setState({showInfo:false})
            }
            else{
                this.setState({showInfo:true})
            }
        };
        const handleConsultantApplySubscribe = (event) => {
            if (this.state.consultantSubscribe === false){
                this.setState({consultantSubscribe:true})
            }
            else{
                this.setState({consultantSubscribe:false})
            }
        };
        return(
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg">
                    <CssBaseline/>
                    <Material_RTL>
                        <RTL>
                            <div className={classes.rootDiv} >
                                <Grid container direction={"column"} spacing={2} justify="space-evenly" >
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            Up
                                        </Paper>
                                    </Grid>
                                    <Dialog onBackdropClick={handleEditChannel}  open={this.state.editChannel} style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>
                                                <Grid container className={classes.rootShowMembers} spacing={2} style={{padding:30,justifyContent: 'center'}}>
                                                    <Grid  item xs={16}>
                                                        <Grid container justify="center" spacing={1}>
                                                            <Grid xs={6}  item>
                                                                <Button onClick={handleShowMembers}  color="primary" variant="contained" style={{ width:'190px',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                                    {'ویرایش اعضا'}
                                                                </Button>
                                                            </Grid>
                                                        <Grid xs={6} item>
                                                            <Button onClick={handleShowInfo}  color="primary" variant="contained" style={{ width:'190px',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                                {'ویرایش وضعیت کانال'}
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                </Grid>
                                            </Dialog>

                                            <Dialog
                                                open={this.state.showInfo}
                                                aria-labelledby="alert-dialog-slide-title1"
                                                 aria-describedby="alert-dialog-slide-description"
                                            >
                                                <DialogTitle id="alert-dialog-slide-title"  component="h1" variant="h5" style={{color: "#494949",justifyContent:'right'}}>
                                                    <text style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>{'تغیر مشخصات کانال'}</text>
                                                    <br/>
                                                    <span><BsCardText color="#494949" style={{marginTop: '10px',justifyContent: 'center'}} fontSize="large"/></span>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-slide-description" style={{fontFamily: 'IRANSansWeb'}}>
                                                        <Grid  className={classes.rootShowMembers} spacing={2} container
                                                            alignItems="stretch"
                                                            justify="flex-end"
                                                            alignItems="stretch">
                                                                <Grid xs={3}  >
                                                                    <TextField
                                                                        InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                                        id="name"
                                                                        value={this.state.channelName}
                                                                        placeholder="نام قبلی"
                                                                        label="نام جدید کانال"
                                                                        type="text"
                                                                        onChange={''}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12}  >
                                                                    <TextField
                                                                        InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                                        id="explain"
                                                                        label="توضیحات"
                                                                        type="text"
                                                                        placeholder="توضیحات قبلی"
                                                                        rows={3}
                                                                        fullWidth
                                                                        multiline
                                                                        onChange={''}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={5}  item>
                                                                    <Button onClick={handleShowInfo}  color="primary" variant="contained" style={{ width:'190px',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                                        {'بستن'}
                                                                    </Button>
                                                                </Grid>
                                                                <Grid xs={5}  item>
                                                                    <Button onClick={''}  color="primary" variant="contained" style={{ width:'190px',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                                        {'اعمال تغیرات'}
                                                                    </Button>
                                                                </Grid>
                                                        </Grid>
                                                    </DialogContentText>
                                                </DialogContent>

                                            </Dialog>

                                            <Dialog
                                                    open={this.state.showMembers}
                                                    aria-labelledby="alert-dialog-slide-title"
                                                    aria-describedby="alert-dialog-slide-description"
                                                >
                                                     <DialogTitle id="alert-dialog-slide-title"  component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>
                                                         <text style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>{'لیست اعضای گروه'}</text>
                                                        <br/>
                                                        <span><MdPeople color="#494949" style={{marginTop: '10px',justifyContent: 'center'}} fontSize="large"/></span>
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <Grid  item xs={12} containerdirection="row-reverse" justify="flex-start" alignItems= "flex-start">
                                                                <Grid container xs={12} justify="center" >
                                                                <button onClick={handleShowMembers}   style={{width:'auto',height:'auto',backgroundColor:'#d33d38',fontFamily: 'IRANSansWeb',fontsize:'10px'}}>
                                                                    {"حذف گروهی اعضا"}
                                                                </button>
                                                                </Grid>
                                                            </Grid>
                                                        <DialogContentText id="alert-dialog-slide-description">
                                                        <Grid container className={classes.rootShowMembers} spacing={2} style={{padding:30,justifyContent: 'center'}}>
                                                            <Grid  item xs={12}>
                                                                <Grid container justify="center" spacing={3}>
                                                                    {[0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29].map((value) => (
                                                                        <Grid xs={4} key={value} item  direction="row-reverse" justify="flex-start" alignItems="flex-start">
                                                                            <Card  className={classes.paperShowMembers} >
                                                                                <CardActionArea>
                                                                                    <CardMedia
                                                                                        component="img"
                                                                                        className={classes.mediaMembers}
                                                                                        image={photo}
                                                                                    />
                                                                                <CardContent>
                                                                                    <text color="#725b53">username</text>
                                                                                </CardContent>
                                                                                </CardActionArea>
                                                                                <CardActionArea >
                                                                                    <Grid container justify="center" backgroundColor="#ff7063">
                                                                                            <DeleteIcon justify="right" fontSize="small"/>
                                                                                    </Grid>
                                                                                </CardActionArea>
                                                                            </Card>
                                                                        </Grid>
                                                                    ))}
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        </DialogContentText>
                                                        </DialogContent>
                                                        <Button onClick={handleShowMembers}  color="primary" variant="contained" style={{ width:'auto',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                        {'بستن'}
                                                        </Button>
                                                </Dialog>
                                    <Grid container item sm={12}>
                                        <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                            <Grid item sm={3} xs={12} className={classes.rightSection}>
                                                <Paper className={classes.paper}>
                                                    <Grid container direction={"column"} spacing={2} justify={"space-evenly"}>
                                                        <Grid item xs={12}>
                                                            <ChannelCardList title={"كانال هاي من"}>
                                                                <ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />
                                                                <ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />
                                                            </ChannelCardList>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <ChannelCardList title={"کانال های عضوشده"}>
                                                                <ChannelCard name={"عنوان کانال"} imageSource={""} description={"شمسین شیسنشبم شنمیسش یسبنمشسینمبتمنش شسیمنب"} number={200} />
                                                                <ChannelCard name={"عنوان کانال"} imageSource={""} description={"سشینمتب شیمسنبتش یسبنمیشسنم بتشیسنمش بمسی"} number={200} />
                                                                <ChannelCard name={"عنوان کانال"} imageSource={""} description={"یمنشبت شیسنمبتش یسمنبتمنشیس بتمنیشست میتمس"} number={200} />
                                                            </ChannelCardList>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                                {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh',width:'50vh' }} />*/}
                                            </Grid>
                                            <Grid item sm={6} className={classes.centerSection}>
                                                <Paper className={classes.paper}>
                                                    <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>
                                                    <Divider className={classes.divider} />
                                                    <ChannelMessages admin={this.state.admin} isJoined={this.state.isJoined}>

                                                        <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>
                                                        <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال من</Typography>
                                                        <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال تو</Typography>
                                                        <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال او</Typography>

                                                    </ChannelMessages>
                                                </Paper>
                                            </Grid>
                                            <Grid item sm={3} xs={12} className={classes.leftSection}>
                                                <Paper className={classes.paper}  >
                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelInfoAvatar} />
                                                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d',alignSelf: "baseline",marginBottom: "10px"}}>توضیحات </Typography>
                                                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign:"right",alignSelf: "baseline",marginBottom: "10px"}}>channelID</Typography>
                                                    <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-evenly",alignItems: "center",marginBottom:"10px"}}  >
                                                        <Button variant="contained" color={'primary'} onClick={handleEditChannel}>ویرایش کانال</Button>
                                                        <Button variant="contained" color={'secondary'}  onClick={handleConsultantApplySubscribe}>درخواست عضویت</Button>
                                                    </div>
                                                    <Collapse in={this.state.consultantSubscribe} timeout="auto" unmountOnExit>
                                                        <TextField fullWidth
                                                                   placeholder={"شناسه فرد مورد نظر را وارد کنید"}
                                                                   style={{marginTop:"10px"}}
                                                                   InputProps={{
                                                                       style: {fontFamily: 'IRANSansWeb',textAlign:"right"},
                                                                       endAdornment: (
                                                                           <InputAdornment position="end">
                                                                               <IconButton
                                                                                   style={{padding: '0px', color: '#3f407d'}}
                                                                               //    onClick={handleSendIcon}
                                                                                   // onMouseDown={this.handleMouseDownPassword}
                                                                               >
                                                                                   <Done style={{ fontSize: 30 }} />
                                                                               </IconButton>
                                                                           </InputAdornment>)
                                                                   }}
                                                        />
                                                    </Collapse>
                                                    <ChannelCardList title={"اعضای کانال"}  >
                                                        <ChannelMemberCard name={"آیدی عضو"} imageSource={""} />
                                                        <ChannelMemberCard name={"آیدی عضو"} imageSource={""} />
                                                        <ChannelMemberCard name={"آیدی عضو"} imageSource={""} />
                                                        <ChannelMemberCard name={"آیدی عضو"} imageSource={""} />
                                                        <ChannelMemberCard name={"آیدی عضو"} imageSource={""} />
                                                    </ChannelCardList>
                                                    <Button style={{color:"#3f407d",alignSelf:"baseline",marginTop:"5px"}}>
                                                        <Typography component={"h2"} variant={"body1"} align={"left"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d',alignSelf: "baseline"}}>ترک کانال</Typography>
                                                    </Button>
                                                    <Button style={{color:"#3f407d",alignSelf:"baseline",marginTop:"5px"}}>
                                                        <Typography component={"h2"} variant={"body1"} align={"left"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d',alignSelf: "baseline"}}>گزارش تخلف کانال</Typography>
                                                    </Button>
                                                </Paper>
                                                {/*<Typography component="div" style={{ backgroundColor: '#2f18fc', height: '20vh',width:'50vh' }} />*/}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '30vh' }} />*/}
                        </RTL>
                    </Material_RTL>
                </Container>
            </LoadingOverlay>
        )
    }

}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
    },
    rootDiv:{
        padding:theme.spacing(2),
        flexGrow: 1,
    },
    pageEdit :{
    width: "300px",
    height: "100%",
    min_height : "5em",
    margin_right: "auto",
    margin_left: "auto",
    margin_top: "5em",
    padding: "2em",
    z_index: 15000,
    },
    rootShowMembers: {
    flexGrow: 1,
    },
    mediaMembers: {
        maxWidth: 150,
        maxHeight: 80,
        height: "auto",

    },
    paperShowMembers: {
        backgroundColor:'#cccfc4',
        maxWidth: 150,
        maxHeight: 160,
        height: "auto",
        width: "auto",
        variant:"outlined",
    },
    button: {
    margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
    rightSection:{
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
        [theme.breakpoints.up('sm')]: {
            order: 1,
        },
    },
    centerSection:{
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
        [theme.breakpoints.up('sm')]: {
            order: 1,
        },
    },
    leftSection:{
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
        [theme.breakpoints.up('sm')]: {
            order: 1,
        },
    },
    channelInfoAvatar:{
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginBottom: theme.spacing(1),
    },
    channelsAvatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    channelNumberMessage:{
        width: theme.spacing(4),
        height: theme.spacing(3),
    },
    divider:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));
export default () =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <Channel classes={classes} p={p}/>
    )
}