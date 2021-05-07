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
import { CgRename } from "react-icons/cg";
import { MdDescription } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdPhoto } from "react-icons/md";
import { FcInvite } from "react-icons/fc";
import { IoExitOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import photo from '../../../src/Resource/11.jpg';
import {ChevronLeft} from "@material-ui/icons";
import {ChevronRight} from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";
import TokenConfig from "../../RequestConfig/TokenConfig";
import { withRouter } from "react-router";
import Theme from "../Theme";




class Channel extends Component {
    constructor(props){
        super(props);
        this.state={
            channelName: '',
            channelMember:[],
            uploadChannelName:'',
            channelDescription:'',
            uploadChannelDescription:'',
            channelLink: '',
            loading:true,
            editChannel:false,
            consultantSubscribe:false,
            role: null,
            openDrawerRight:false,
            openDrawerLeft:false,
            smOfRight:0,
            smOfCenter:8,
            smOfLeft:0,
            selectFile:null,
            image:null,
            uploadImage:null,
            buttonDisabled:true,
            inviteUser:'',
            setErrorDialog:false,
            channelMemberFlag:false,
            changeNameFlag:false,
            changeDescriptionFlag:false,
            changeImageFlag:false,
            sendInviteIcon:false,
            deleting:false,
            editing:false,
        };
        this.initialization();
    }
    ErrorDialogText = "";
    handleStateErrorDialog = () =>{
        this.setState({setErrorDialog:!this.state.setErrorDialog})
    };
    initialization = () => {
        axios.get(serverURL() +"user/channel-role/" + this.props.match.params.channelId +"/",TokenConfig())
            .then(result => {
                //console.log(result);
                this.state.role = result.data.role;
                //console.log(this.state.role);
                //this.inviteLink = result.data.invite_link;
                this.setState({});
            })
            .catch(error => {
                console.log(error);
                this.ErrorDialogText = error.response.data?.error;
                this.setState({setErrorDialog:true});
            });
        axios.get(serverURL() + "channel/" + this.props.match.params.channelId + "/",TokenConfig())
            .then(result => {
                console.log(result);
                this.channelName = result.data.name;
                this.channelDescription = result.data.description;
                this.inviteLink = result.data.invite_link;
            })
            .catch(error => {
                console.log(error);
                this.ErrorDialogText = error.response.data?.error;
                this.setState({setErrorDialog:true});
            });
        axios.get(serverURL() + "user/channels/",TokenConfig())
            .then(result =>{
               // console.log(result);
                this.channelsList = result.data;
                for (let i in this.channelsList){
                    // if (this.channelsList[i].user_role ==="consultant"){
                    //     this.channelName = this.channelsList[i].name;
                    //     this.channelDescription = this.channelsList[i].description;
                    // }
                    if (this.channelsList[i].user_role === "subscriber"){
                        this.seeSubscriberChannels = true;
                    }
                }
                this.setState({});
            })
            .catch(error => {
                console.log(error);
                // this.ErrorDialogText = error.response.data?.error;
                // this.setState({setErrorDialog:true});
            });
        axios.get(serverURL() + "channel/channel-subscriber/"+ this.props.match.params.channelId + "/",TokenConfig())
            .then(result =>{
                this.subscribersList = result.data?.data;              
            })
            .catch(error => {
                console.log(error);
                // this.ErrorDialogText = error.response.data?.error;
                // this.setState({setErrorDialog:true});
            });
        axios.get(serverURL() + "channel/channel-admins/" + this.props.match.params.channelId + "/",TokenConfig())
            .then(result =>{
                this.adminsList.push(result.data?.consultant);
                for (let i in result.data?.admin){
                    this.adminsList.push(result.data?.admin[i]);
                }               
            })
            .catch(error => {
                console.log(error);
                // this.ErrorDialogText = error.response.data?.error;
                // this.setState({setErrorDialog:true});
            });
    };
    componentDidMount() {
        this.setState({loading:false});
        axios.get(serverURL() + "channel/" + this.props.match.params.channelId + "/",TokenConfig())
            .then(result => {
                console.log(result);
                this.setState({channelName:result.data.name});
                this.setState({uploadChannelName:result.data.name});
                this.setState({channelDescription:result.data.description});
                this.setState({uploadChannelDescription:result.data.description});
                this.setState({inviteLink:result.data.invite_link});
                this.setState({image:result.data.avatar});
                this.setState({uploadImage:result.data.avatar});
            })
            .catch(error => {
                console.log(error);
                this.ErrorDialogText = error.response.data?.error;
                this.setState({setErrorDialog:true});
            });

    }

    channelName= null;
    channelDescription = null;
    channelsList = [];
    subscribersList = [];
    adminsList = [];
    seeSubscriberChannels = false;
    inviteLink = null;

    handleRightDrawer = e => {
        this.state.openDrawerRight = !this.state.openDrawerRight;
        this.handleSms();
        this.setState({});
    };
    handleLeftDrawer = e => {
        this.state.openDrawerLeft = !this.state.openDrawerLeft;
        this.handleSms();
        this.setState({});
    };
    handleSms = () => {
        if (this.state.openDrawerRight && this.state.openDrawerLeft){
            this.state.smOfRight=3;
            this.state.smOfCenter=6;
            this.state.smOfLeft=3;
        }
        else if (this.state.openDrawerRight && !this.state.openDrawerLeft){
            this.state.smOfRight=4;
            this.state.smOfCenter=8;
            this.state.smOfLeft=0;
        }
        else if (!this.state.openDrawerRight && this.state.openDrawerLeft){
            this.state.smOfRight=0;
            this.state.smOfCenter=8;
            this.state.smOfLeft=4;
        }
        else if (!this.state.openDrawerRight && !this.state.openDrawerLeft){
            this.state.smOfRight=0;
            this.state.smOfCenter=8;
            this.state.smOfLeft=0;
        }

    };
    handleImageUpload= event=>{
        this.setState({image:event.target.files[0]})
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name," :",e.target.value)
        if(e.target.name ==="uploadChannelName")
        {
            this.setState({changeNameFlag: true});
            this.setState({buttonDisabled: false});
        }
        if(e.target.name ==="uploadChannelDescription")
        {
            this.setState({changeDescriptionFlag: true});
            this.setState({buttonDisabled: false});
        }
        if(e.target.name !== "inviteUser") {
            if (e.target.value === '') {
                if (this.state.uploadChannelName)
                {
                    if (this.state.uploadChannelName.length === 1 && e.target.name === "uploadChannelName" && e.target.value === '') {
                        this.setState({changeNameFlag: false});
                        if (!this.state.changeDescriptionFlag && !this.state.changeImageFlag) {
                            this.setState({buttonDisabled: true});
                        }
                    }
                }
                if (this.state.changeDescriptionFlag)
                {
                    if (this.state.uploadChannelDescription.length === 1 && e.target.name === "uploadChannelDescription" && e.target.value === '') {
                        this.setState({changeDescriptionFlag: false});
                        if (!this.state.changeNameFlag && !this.state.changeImageFlag) {
                            this.setState({buttonDisabled: true});
                        }
                    }
                }
            }
        }
        
        
    }
    render() {
        const classes = this.props.classes;
        const handelGetMembers=e=>{
            this.setState({deleting:true})
            axios.get(serverURL() + "channel/channel-subscriber/"+ this.props.match.params.channelId + "/",TokenConfig())
            .then(res =>{
                console.log(res);
                setTimeout(()=>{
                    this.setState({deleting:false});
                    },200)
                this.setState({channelMember:res.data?.data})
            })
            .catch(error=>{
                console.log(error);
            })
        }
        const handelUploadData = e =>{
            this.setState({editing:true});
            const formData = new FormData();
            if (this.state.uploadChannelName!=="") {
                formData.append(
                    "name",
                    this.state.uploadChannelName
                )
                this.setState({channelName:this.state.uploadChannelName})
            }
        
            if (this.state.uploadChannelDescription !=="") {
                formData.append(
                    "description",
                    this.state.uploadChannelDescription
                )
                this.setState({channelDescription:this.state.uploadChannelDescription})
            }
            if (this.state.selectFile !==null) {
                formData.append(
                    "avatar",
                    this.state.selectFile
                )
                this.setState({image:this.state.uploadImage})
            }
            console.log(formData);
            axios.put(serverURL()+"channel/update-channel-inf/"+ this.props.match.params.channelId + "/", formData,TokenConfig())
            .then(res =>{
                console.log(res);
                setTimeout(()=>{
                    this.setState({editing:false});
                    handleShowInfo()
                    },200)
            })
            .catch(err=>{
                console.log(err);
            });
            this.setState({buttonDisabled:true})
            
        }
        const handleImageUpload= event=>{
            this.setState({changeImageFlag:true})
            this.setState({selectFile:event.target.files[0]})
            let reader = new FileReader();
        reader.onload = (event) => {
        this.setState({uploadImage: event.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
        this.setState({buttonDisabled: false});
        }
        const handleEditChannel = (event) => {
            if (this.state.editChannel === false){
                this.setState({editChannel:true})
            }
            else{
                this.setState({editChannel:false})
            }
        };
        const handleShowMembers =()=>{
            if (this.state.showMembers === true){
                this.setState({showMembers:false})
            }
            else{
                this.setState({showMembers:true})
            }
            axios.get(serverURL() + "channel/channel-subscriber/"+ this.props.match.params.channelId + "/",TokenConfig())
            .then(res =>{
                console.log(res);
                this.setState({channelMember:res.data?.data})
                this.setState({channelMemberFlag:true})
            })
                .catch(error => {
                    console.log(error);
                })
        };

        const handleShowInfo=()=>{
            this.setState({uploadChannelDescription:this.state.channelDescription})
            this.setState({uploadChannelName:this.state.channelName})
            this.setState({uploadImage:this.state.image})
            this.setState({changeImageFlag:false})
            this.setState({changeDescriptionFlag:false})
            this.setState({changeNameFlag:false})
            this.setState({buttonDisabled: true});
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
        const handelInviteMember = e=>{
            this.setState({sendInviteIcon:true});
            const data={
                target_user : this.state.inviteUser,
                request_text : "درخواست عضویت در کانال" + this.state.channelName,
                request_type : "join_channel",
                channel : this.props.match.params.channelId
            };
            axios.post(serverURL()+"request/applicant/", data,TokenConfig())
            .then(res =>{
                console.log(res);
                setTimeout(()=>{
                    this.setState({sendInviteIcon:false});
                    },1000)
            })
            .catch(err=>{
                console.log(err);
                this.ErrorDialogText = err.response.data?.error;
                this.setState({setErrorDialog:true});
                this.setState({sendInviteIcon:false});
            });

            
        }
        return(
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                    {/*<Material_RTL>*/}
                        {/*<RTL>*/}
                            <div className={classes.rootDiv} >
                                <Grid container direction={"column"} justify="space-evenly" >
                                            <Dialog
                                                open={this.state.showInfo}
                                                aria-labelledby="alert-dialog-slide-title1"
                                                aria-describedby="alert-dialog-slide-description"
                                                onClose={handleShowInfo}
                                            >
                                            <LoadingOverlay active={this.state.editing} spinner text={""}>
                                                <CardContent id="alert-dialog-slide-title"  component="h1" variant="h5" style={{color: "#494949",justifyContent:'right'}}>
                                                    <Grid xs={12} container spacing={1}  direction="column" justify="flex-start" alignItems="center">
                                                     <Grid xs={9} item  justify="center">
                                                    <text style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>{'تغیر مشخصات کانال'}</text>
                                                    </Grid>
                                                    <Grid xs={9} item  justify="center">
                                                    <span><BsCardText color="#494949" style={{marginTop: '10px',justifyContent: 'center'}} fontSize="large"/></span>
                                                     </Grid>
                                                    </Grid>
                                                </CardContent>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-slide-description" style={{fontFamily: 'IRANSansWeb'}}>
                                                        <Card  className={classes.paperShowChannelInfo} >
                                                            <CardContent >
                                                                <CardMedia component="img"  className={classes.mediaChannelInfo} src={this.state.uploadImage}/>
                                                                <label htmlFor="upload-photo" spacing={1}>
                                                                <input
                                                                    style={{ display: 'none' }}
                                                                    id="upload-photo"
                                                                    name="upload-photo"
                                                                    type="file"
                                                                    onChange={handleImageUpload}
                                                                  />
                                                                  <Button color="primary" className={classes.button} variant="contained" component="span" style={{fontFamily: 'IRANSansWeb'}}  startIcon={'  '}>
                                                                    <MdPhoto fontSize='large' spacing="4%" margin="7%"/>
                                                                    <text style={{margin:'3px'}}>
                                                                    {"تغیر عکس"}
                                                                    </text>
                                                                  </Button>
                                                                </label>
                                                            </CardContent>
                                                        <CardContent>
                                                        <Grid  className={classes.rootShowMembers} spacing={2} container
                                                            alignItems="stretch"
                                                            justify="flex-end"
                                                            alignItems="stretch">
                                                                <Grid xs={12} container spacing={1} alignItems="center"  justify="flex-end" direction="row">
                                                                    <Grid xs={1} item>
                                                                        <CgRename color="#2ad981"/>
                                                                    </Grid>
                                                                    <Grid xs={11} item justify="flex-end">
                                                                    <TextField
                                                                        autoFocus
                                                                        InputLabelProps={{style: {fontFamily: 'IRANSansWeb'}}}
                                                                        InputProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                                        id="name"
                                                                        placeholder={this.state.channelName}
                                                                        label="نام جدید کانال"
                                                                        type="text"
                                                                        fullWidth
                                                                        name="uploadChannelName"
                                                                        onChange={this.handleChange}
                                                                    />
                                                                        </Grid>
                                                                </Grid>
                                                                <Grid xs={12} container spacing={1} alignItems="center" justify="flex-end" direction="row">
                                                                    <Grid xs={1} item  alignItems="center">
                                                                        <MdDescription color="#2ad981"/>
                                                                    </Grid>
                                                                    <Grid xs={11} item>
                                                                    <TextField
                                                                        InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                                        id="explain"
                                                                        label="توضیحات"
                                                                        type="text"
                                                                        placeholder={this.state.channelDescription}
                                                                        rows={3}
                                                                        fullWidth
                                                                        multiline
                                                                        name="uploadChannelDescription"
                                                                        onChange={this.handleChange}
                                                                    />
                                                                        </Grid>
                                                                </Grid>
                                                                <Grid xs={6}  item>
                                                                    <Button type="submit"  onClick={handleShowInfo}  color="primary" variant="contained" style={{ width:'100%',height:'30px',backgroundColor:'#',fontFamily: 'IRANSansWeb',margin:'5%',}} startIcon={''} >
                                                                        <IoExitOutline fontSize="large" margin="10%"   /><text style={{margin:'6%'}}>{"بستن"}</text>
                                                                    </Button>
                                                                </Grid>
                                                                <Grid xs={6}  item>
                                                                    <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-evenly",alignItems: "center",marginBottom:"5%"}}>
                                                                    <Button disabled={this.state.buttonDisabled} onClick={handelUploadData}  color={'primary'} variant="contained" style={{width:'100%',height:'30px',margin:'5%',spacing:'5%',fontFamily: 'IRANSansWeb',fontSize:'small'}} startIcon={''}>
                                                                        <CloudUploadIcon fontSize='small' />
                                                                        <text style={{margin:'6%'}}>{'اعمال تغیرات'}</text></Button>
                                                                     </div>
                                                                </Grid>

                                                        </Grid>
                                                        </CardContent>
                                                    </Card>
                                                    </DialogContentText>
                                                </DialogContent>
                                                </LoadingOverlay>
                                            </Dialog>

                                            <Dialog
                                                    open={this.state.showMembers}
                                                    aria-labelledby="alert-dialog-slide-title"
                                                    aria-describedby="alert-dialog-slide-description"
                                                    onClose={handleShowMembers}
                                                >
                                                    <LoadingOverlay active={this.state.deleting} spinner text={""}>
                                                     <CardContent id="alert-dialog-slide-title"  component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>
                                                         <Grid xs={12} container spacing={1}  direction="column" justify="flex-start" alignItems="center">
                                                            <Grid xs={9} item  justify="center">
                                                                <text style={{fontFamily: 'IRANSansWeb',color: "#494949",justifyContent:'right'}}>{'لیست اعضای گروه'}</text>
                                                            </Grid>
                                                            <Grid xs={9} item  justify="center">
                                                                <span><MdPeople color="#494949" style={{marginTop: '10px',justifyContent: 'center'}} fontSize="large"/></span>
                                                            </Grid>
                                                         </Grid>
                                                        </CardContent>
                                                        <DialogContent>
                                                        <DialogContentText id="alert-dialog-slide-description">
                                                        <div style={{minHeight:'360px',minWidth:"550px"}}>
                                                        <Grid container className={classes.rootShowMembers} spacing={2} style={{padding:30,justifyContent: 'center'}}>
                                                            <Grid  item xs={12}>
                                                                <Grid container justify="center" spacing={2}>
                                                                    {!this.state.channelMemberFlag ? null:this.state.channelMember.map((member) => (
                                                                        <Grid xs={4} key={member.id} item container   spacing={2} direction="row-reverse" justify="flex-start" alignItems="flex-start">
                                                                            <Card  className={classes.paperShowMembers} >
                                                                                <CardActionArea>
                                                                                    <CardMedia
                                                                                        component="img"
                                                                                        className={classes.mediaMembers}
                                                                                        src={member.avatar !== null ? member.avatar : photo}
                                                                                    />
                                                                                <CardContent>
                                                                                    <text color="#725b53">{member.username}</text>
                                                                                </CardContent>
                                                                                </CardActionArea>
                                                                                <CardContent>
                                                                                    <text color="#725b53">{member.user_role}</text>
                                                                                </CardContent>
                                                                                <CardActionArea >
                                                                                <button style={{width:"100%",height:"100%",backgroundColor:'#cccfc4'}} onClick={()=>{
                                                                                                console.log("hello")
                                                                                                const body={
                                                                                                        username : member.username,
                                                                                                    }
                                                                                                console.log(TokenConfig())
                                                                                                axios.delete(serverURL()+"channel/channel-subscriber/"+this.props.match.params.channelId+ "/",{headers:{Authorization : TokenConfig().headers.Authorization} ,data:{username : member.username}})
                                                                                                .then(res =>{
                                                                                                    console.log(res);
                                                                                                    handelGetMembers()
                                                                                                })
                                                                                                .catch(err=>{
                                                                                                    console.log(err);
                                                                                                    this.ErrorDialogText = err.response.data?.error;
                                                                                                    this.setState({setErrorDialog:true});
                                                                                                });
                                                                                            }
                                                                                            }>
                                                                                            <DeleteIcon   justify="right" fontSize="small"/>
                                                                                            </button>
                                                                                </CardActionArea>
                                                                            </Card>
                                                                        </Grid>
                                                                    ))}
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        </div>
                                                        </DialogContentText>
                                                        </DialogContent>
                                                        <Button onClick={handleShowMembers}  color="primary" variant="contained" style={{ width:'100%',height:'35px',backgroundColor:'#2c2d22',fontFamily: 'IRANSansWeb'}}>
                                                        <IoExitOutline fontSize="large"  /><text style={{margin:'1%'}}>{"بستن"}</text>
                                                        </Button>
                                                    </LoadingOverlay>
                                                </Dialog>
                                    <ErrorDialog open={this.state.setErrorDialog} errorText={this.ErrorDialogText} handleParentState={this.handleStateErrorDialog} />
                                    <Grid container item sm={12}>
                                        <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                            <Grid item sm={this.state.smOfRight} xs={12} className={classes.rightSection}>
                                                <Slide direction="right" in={this.state.openDrawerRight} mountOnEnter unmountOnExit>
                                                <Paper className={classes.paper}>
                                                    <Grid container direction={"column"} spacing={2} justify={"space-evenly"}>
                                                        <Grid item xs={12}>
                                                            <ChannelCardList title={"كانال هاي من"}>
                                                                {
                                                                    this.channelsList.map((value,index) =>
                                                                    {
                                                                        if (value?.user_role === "consultant" || value?.user_role === "secretary"){
                                                                            return <ChannelCard key={index} name={value?.name} id={value?.id} imageSource={value?.avatar} description={value?.description} />
                                                                        }
                                                                    })
                                                                }
                                                                {/*<ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />*/}
                                                                {/*<ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />*/}
                                                            </ChannelCardList>
                                                        </Grid>
                                                        {this.seeSubscriberChannels ?
                                                            <Grid item xs={12}>
                                                                <ChannelCardList title={"کانال های عضوشده"}>
                                                                    {
                                                                        this.channelsList.map((value, index) => {
                                                                            if (value?.user_role === "subscriber") {
                                                                                return <ChannelCard name={value?.name}
                                                                                                    imageSource={value?.avatar}
                                                                                                    key={index}
                                                                                                    id={value?.id}
                                                                                                    description={value?.description}/>
                                                                            }
                                                                        })
                                                                    }
                                                                    {/*<ChannelCard name={this.inviteLink} imageSource={""} description={"شمسین شیسنشبم شنمیسش یسبنمشسینمبتمنش شسیمنب"} number={200} />*/}
                                                                    {/*<ChannelCard name={"عنوان کانال"} imageSource={""} description={"سشینمتب شیمسنبتش یسبنمیشسنم بتشیسنمش بمسی"} number={200} />*/}
                                                                    {/*<ChannelCard name={"عنوان کانال"} imageSource={""} description={"یمنشبت شیسنمبتش یسمنبتمنشیس بتمنیشست میتمس"} number={200} />*/}
                                                                </ChannelCardList>
                                                            </Grid>
                                                                : null
                                                        }
                                                    </Grid>
                                                </Paper>
                                                </Slide>
                                                {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh',width:'50vh' }} />*/}
                                            </Grid>
                                            <Grid item sm={this.state.smOfCenter} xs={12} className={classes.centerSection}>
                                                <Paper className={classes.paper}>
                                                    <div style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems: "stretch",alignContent:"center"}}>
                                                    <IconButton style={{padding:"0", color: '#3f407d'}} onClick={this.handleLeftDrawer}>
                                                        {
                                                            this.state.openDrawerLeft ? <ChevronRight style={{fontSize:35}} /> : <ChevronLeft style={{fontSize:35}} />
                                                        }
                                                        {/*<ChevronLeft style={{fontSize:35}} />*/}
                                                    </IconButton>
                                                    <Typography variant={"h6"} style={{alignSelf:"center"}}>{this.channelName}</Typography>
                                                    <IconButton style={{padding:"0", color: '#3f407d'}} onClick={this.handleRightDrawer}>
                                                        {
                                                            this.state.openDrawerRight ? <ChevronLeft style={{fontSize:35}} /> : <ChevronRight style={{fontSize:35}} />
                                                        }
                                                    </IconButton>
                                                    </div>
                                                    <Divider className={classes.divider} />
                                                    <ChannelMessages role={this.state.role} inviteLink={this.inviteLink} channelId={this.props.match.params.channelId} />
                                                        {/*{*/}
                                                            {/*this.state.messageLables.map((value,index) => (*/}
                                                                {/*<Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>*/}
                                                            {/*))*/}
                                                        {/*}*/}
                                                        {/*<Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>*/}
                                                        {/*<Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال من</Typography>*/}
                                                        {/*<Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال تو</Typography>*/}
                                                        {/*<Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال او</Typography>*/}

                                                    {/*</ChannelMessages>*/}
                                                </Paper>
                                            </Grid>
                                            
                                            <Grid item sm={this.state.smOfLeft} xs={12} className={classes.leftSection}>
                                                <Slide direction="left" in={this.state.openDrawerLeft} mountOnEnter unmountOnExit>
                                                <Paper className={classes.paper}  >
                                                    <Card className={classes.paperShowChannelInfo}>
                                                    <CardMedia
                                                            component="img"
                                                                className={classes.mediaChannel}
                                                                src={this.state.image}
                                                    />
                                                        <CardContent>
                                                        <Grid xs={12}>
                                                                <text color="#725b53">{this.state.channelName}{console.log("this.props.role :",this.state.role)}</text>
                                                            <Grid xs={12}>
                                                                <text color="#725b53">{this.state.channelDescription}</text>
                                                            </Grid>
                                                            <Grid xs={12}>
                                                                <text color="#725b53">{this.state.channelLink}</text>
                                                            </Grid>
                                                        </Grid>
                                                        </CardContent>
                                                    </Card>
                                                    <ul/>
                                                    {(this.state.role === "consultant") && !(this.state.role === "subscriber") ? 
                                                    <Grid item >
                                                    <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-evenly",alignItems: "center",marginBottom:"5px"}}  >
                                                        <Grid item xs={17}>
                                                        <Button width= "100%" variant="contained" color={'primary'}  onClick={handleShowInfo} endIcon={<FiEdit/>} style={{fontFamily: 'IRANSansWeb',fontSize:"10px"}}>ویرایش  کانال</Button>
                                                        </Grid>
                                                    </div>
                                                    <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-evenly",alignItems: "center",marginBottom:"5px"}}  >
                                                        <Button variant="contained" color={'primary'}  onClick={handleShowMembers} endIcon={<BsFillPeopleFill />} style={{fontFamily: 'IRANSansWeb',fontSize:"10px",margin:"1%"}}>ویرایش اعضا</Button>
                                                        <Button variant="contained" color={'primary'}  onClick={handleConsultantApplySubscribe} style={{fontFamily: 'IRANSansWeb',fontSize:"10px",margin:"1%"}}  endIcon={<FcInvite/>}>{"دعوت عضو"}</Button>
                                                    </div>
                                                    <Collapse in={this.state.consultantSubscribe} timeout="auto" unmountOnExit>
                                                        <TextField fullWidth
                                                                   placeholder={"شناسه فرد مورد نظر را وارد کنید"}
                                                                   value={this.state.inviteUser}
                                                                   name="inviteUser"
                                                                   onChange={this.handleChange}
                                                                   style={{marginTop:"5px",marginBottom:"5px"}}
                                                                   InputProps={{
                                                                       style: {fontFamily: 'IRANSansWeb',textAlign:"right"},
                                                                       endAdornment: (
                                                                           <InputAdornment position="end">
                                                                               <IconButton
                                                                                   style={{padding: '0px', color: '#3f407d'}}
                                                                               //    onClick={handleSendIcon}
                                                                                   // onMouseDown={this.handleMouseDownPassword}
                                                                               >
                                                                                   {this.state.sendInviteIcon ? <RiMailSendLine style={{ fontSize: 25 }}/> : <FiMail onClick={handelInviteMember} style={{ fontSize: 25 }} />}
                                                                               </IconButton>
                                                                           </InputAdornment>)
                                                                   }}
                                                        />
                                                    </Collapse>
                                                    </Grid>
                                                    :  null }
                                                    <Button style={{color:"#3f407d",alignSelf:"baseline",marginTop:"5px"}}>
                                                        <Typography variant={"body2"} align={"left"} style={{alignSelf: "baseline"}}>ترک کانال</Typography>
                                                    </Button>
                                                    <Button style={{color:"#3f407d",alignSelf:"baseline",marginTop:"5px"}}>
                                                        <Typography variant={"body2"} align={"left"} style={{alignSelf: "baseline"}}>گزارش تخلف کانال</Typography>
                                                    </Button>
                                                </Paper>
                                                </Slide>
                                                {/*<Typography component="div" style={{ backgroundColor: '#2f18fc', height: '20vh',width:'50vh' }} />*/}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '30vh' }} />*/}
                        {/*</RTL>*/}
                    {/*</Material_RTL>*/}
                    </Theme>
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
    mediaChannelInfo:{
        maxHeight: 190,
        height: "auto",
    },
    mediaChannel:{
        maxHeight: 190,
        height: "auto",
    },
    paperShowChannelInfo:{
        height:"auto",
        width: "auto",
        variant:"outlined",
    },
    paperShowMembers: {
        backgroundColor:'#cccfc4',
        maxWidth: 150,
        maxHeight: 250,
        minWidth:150,
        minHeight: 150,
        variant:"outlined",
        margin:"10px",
        spacing:"10px",
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
function Auxiliary(props){
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <Channel classes={classes} p={p} match={props.match}/>
    )
}
export default withRouter(Auxiliary);
