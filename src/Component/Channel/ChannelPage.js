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
import backgroundChannel from "../../Resource/backgroundChannel.jpg";
import { Scrollbars } from 'rc-scrollbars';
import Menu from '@material-ui/core/Menu';
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import InputAdornment from '@material-ui/core/InputAdornment';
import {Done} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import DragAndDrop from './DragAndDrop';
import FileViewer from 'react-file-viewer';
import Avatar from "@material-ui/core/Avatar";
import Collapse from '@material-ui/core/Collapse';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChannelCard from "./ChannelCard";
import ChannelCardList from "./ChannelCardList";
import ChannelMessages from "./ChannelMessages";

const MenuItem = withStyles({
    root: {
        justifyContent: "flex-end"
    }
})(MuiMenuItem);

// const theme = createMuiTheme();

class Channel extends Component {
    constructor(){
        super();
        this.state={
            loading:true,
            mouseX: null,
            mouseY: null,
            fileState:false,
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
    handleRightClick = (event) => {
        event.preventDefault();
        this.setState({mouseX:event.clientX,mouseY:event.clientY})
    };
    handleDrop = (files) => {
        const classes = this.props.classes;
    //    let filesArray = [];
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
          //  let newUrl = URL.createObjectURL(files[i]);
            console.log(files[i].type);
            if (files[i].type.split("/")[0] === "audio"){
                this.filesArray.push(
                    <Paper style={{margin:10,padding:"7px 10px 0px 10px"}} className={classes.paper} onContextMenu={this.handleRightClick}  aria-haspopup="true" >
                        <audio src={URL.createObjectURL(files[i])} controls style={{height:"100%",width:"100%"}} />
                    </Paper>
                );
            }
            else if (files[i].type.split("/")[0] === "image"){
                this.filesArray.push(
                    <Paper style={{margin:10,padding:"7px 10px 0px 10px"}} className={classes.paper} onContextMenu={this.handleRightClick} aria-haspopup="true" >
                        <img src={URL.createObjectURL(files[i])} height={"100%"} width={"100%"} />
                    </Paper>
                );
            }
            else if (files[i].type.split("/")[0] === "video"){
                this.filesArray.push(
                    <Paper style={{margin:10,padding:"7px 10px 0px 10px"}} className={classes.paper} onContextMenu={this.handleRightClick} aria-haspopup="true" >
                        <video src={URL.createObjectURL(files[i])} height={"100%"} width={"100%"} controls />
                    </Paper>
                );
            }
            else if (files[i].type.split("/")[0] === "application" || files[i].type.split("/")[0] === "text"){
                this.filesArray.push(
                    <Paper style={{margin:10,padding:"7px 10px 0px 10px"}} className={classes.paper} onContextMenu={this.handleRightClick} aria-haspopup="true" >
                        {files[i].name}
                        <FileViewer
                            fileType={files[i].name.split('.')[files[i].name.split('.').length-1]}
                            filePath={URL.createObjectURL(files[i])}
                        />
                    </Paper>
                );
            }
        }
        this.setState({fileState: true})
    };
    render() {
        const classes = this.props.classes;
        //const anchorEl = this.state.anchorEl;
        //const states = this.state;
        // const theme = useTheme();
        // const matches = useMediaQuery(theme.breakpoints.up('sm'));
        const options = [
            'رونوشت',
            'ویرایش',
            'حذف',
        ];
        //const [anchorEl, setAnchorEl] = React.useState(null);

        // const handleClick = (event) => {
        //     this.setState({anchorEl:event.currentTarget})
        //     //setAnchorEl(event.currentTarget);
        // };

        const handleClose = () => {
            this.setState({mouseX: null, mouseY: null,})
            //setAnchorEl(null);
        };
        // const handleRightClick = (event) => {
        //     event.preventDefault();
        //     this.setState({mouseX:event.clientX,mouseY:event.clientY})
        // };
        const handleSendIcon = (event) => {
        };
        const handleOptions = (event,index) => {
            if (index === 0)
            {
                console.log("here i have to copy");
            }
            if (index === 1)
            {
                console.log("here i have to edit");
            }
            if (index === 2)
            {
                console.log("here i have to delete");
            }
            this.setState({mouseX: null, mouseY: null,})
        };
        const handleEditChannel = (event) => {
            if (this.state.editChannel === false){
                this.setState({editChannel:true})
            }
            else{

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
                                        {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh',width:'100vh' }} />*/}
                                    </Grid>
                                    <Grid container item sm={12}>
                                        <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                            <Grid item sm={3} xs={12} className={classes.rightSection}>
                                                <Paper className={classes.paper}>
                                                    <Grid container direction={"column"} spacing={2} justify={"space-evenly"}>
                                                        {/*<Grid item xs={12}>*/}
                                                            {/*/!*<Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >کانال های مشاوری من</Typography>*!/*/}
                                                        {/*</Grid>*/}
                                                        <Grid item xs={12}>
                                                            {/*<List dense subheader={*/}
                                                                {/*<ListSubheader disableGutters>*/}
                                                                    {/*<Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >کانال های مشاوری من</Typography>*/}
                                                                {/*</ListSubheader>}*/}
                                                            {/*>*/}
                                                                {/*<ListItem button divider dense >*/}
                                                                    {/*<ListItemAvatar>*/}
                                                                        {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>*/}
                                                                            {/*/!*<Done />*!/*/}
                                                                        {/*</Avatar>*/}
                                                                    {/*</ListItemAvatar>*/}
                                                                    {/*<ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال من</Typography>}*/}
                                                                                  {/*secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />*/}

                                                                    {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>20</Avatar>*/}
                                                                {/*</ListItem>*/}
                                                                {/*<ListItem button divider dense>*/}
                                                                    {/*<ListItemAvatar>*/}
                                                                        {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>*/}
                                                                            {/*/!*<Done />*!/*/}
                                                                        {/*</Avatar>*/}
                                                                    {/*</ListItemAvatar>*/}
                                                                    {/*<ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال من</Typography>}*/}
                                                                                  {/*secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />*/}
                                                                    {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>20</Avatar>*/}
                                                                {/*</ListItem>*/}
                                                                {/*<ListItem button divider dense>*/}
                                                                    {/*<ListItemAvatar>*/}
                                                                        {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>*/}
                                                                            {/*/!*<Done />*!/*/}
                                                                        {/*</Avatar>*/}
                                                                    {/*</ListItemAvatar>*/}
                                                                    {/*<ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال من</Typography>}*/}
                                                                                  {/*secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />*/}
                                                                    {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>120</Avatar>*/}
                                                                {/*</ListItem>*/}
                                                                {/*<ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />*/}
                                                            {/*</List>*/}
                                                            <ChannelCardList title={"كانال هاي عضو شده من"}>
                                                                <ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />
                                                                <ChannelCard name={"عنوان کانال من"} imageSource={""} description={"من تو او ما شما ایشان حتی اگر اما"} number={200} />
                                                            </ChannelCardList>
                                                        </Grid>
                                                        {/*<Grid item xs={12}>*/}
                                                            {/*<Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>کانال های عضوشده</Typography>*/}
                                                        {/*</Grid>*/}
                                                        <Grid item xs={12}>
                                                            <List dense subheader={
                                                                <ListSubheader disableGutters>
                                                                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >کانال های عضوشده</Typography>
                                                                </ListSubheader>}
                                                            >
                                                                <ListItem button divider dense >
                                                                    <ListItemAvatar>
                                                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>
                                                                            {/*<Done />*/}
                                                                        </Avatar>
                                                                    </ListItemAvatar>
                                                                    <ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال</Typography>}
                                                                                  secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />

                                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>20</Avatar>
                                                                </ListItem>
                                                                <ListItem button divider dense>
                                                                    <ListItemAvatar>
                                                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>
                                                                            {/*<Done />*/}
                                                                        </Avatar>
                                                                    </ListItemAvatar>
                                                                    <ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال</Typography>}
                                                                                  secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />
                                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>20</Avatar>
                                                                </ListItem>
                                                                <ListItem button divider dense>
                                                                    <ListItemAvatar>
                                                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelsAvatar}>
                                                                            {/*<Done />*/}
                                                                        </Avatar>
                                                                    </ListItemAvatar>
                                                                    <ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >عنوان کانال</Typography>}
                                                                                  secondary={<Typography display={"inline-block"} component={"h4"} noWrap variant={"body2"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >آخرین مطلب کانال شسمینت شیسنمبت شیسنمتبشسی منشسیتب مسشینت شیسنتبنمشیست من</Typography>} />
                                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>120</Avatar>
                                                                </ListItem>
                                                            </List>

                                                            {/*<Paper className={classes.paper} square>*/}
                                                                {/*salam*/}
                                                                {/*<Divider style={{margin:5}} />*/}
                                                                {/*<br />*/}
                                                                {/*<br />*/}
                                                                {/*<br />*/}
                                                                {/*<br />*/}
                                                                {/*<br />*/}
                                                                {/*<Divider style={{margin:5}} />*/}
                                                                {/*salam*/}
                                                                {/*<Scrollbars style={{width:"200",height:"200"}}*/}
                                                                            {/*autoHide*/}
                                                                            {/*autoHideTimeout={1000}*/}
                                                                            {/*autoHideDuration={200}*/}
                                                                {/*>*/}
                                                                    {/*dsafdsfadsfa*/}
                                                                    {/*dsfadsfads*/}
                                                                    {/*fadsfadsf*/}
                                                                    {/*adsfadsfasd*/}
                                                                    {/*fads*/}
                                                                    {/*<Paper className={classes.paper}>*/}
                                                                        {/*<Typography component={"h2"} variant={"body1"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>سلام نه جشسیه یسنم شمنیستب شنمیستب شمنسیبت شمنسیبت شمینستب  شمنسیتب شمسی تبمشتیس مب تشیسنم</Typography>*/}
                                                                    {/*</Paper>*/}
                                                                {/*</Scrollbars>*/}
                                                            {/*</Paper>*/}
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                                {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh',width:'50vh' }} />*/}
                                            </Grid>
                                            <Grid item sm={6} className={classes.centerSection}>
                                                <Paper className={classes.paper}>
                                                    <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>
                                                    <Divider style={{margin:5}} />
                                                    <ChannelMessages>
                                                        <Button>salam</Button>
                                                        <p>asdfadsf</p>
                                                        <Divider style={{margin:5}} />
                                                        <Typography component={"h2"} variant={"body1"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>عنوان کانال</Typography>
                                                    </ChannelMessages>
                                                    {/*<DragAndDrop handleDrop={this.handleDrop}>*/}
                                                    {/*<div style={{ width: "100%",*/}
                                                        {/*overflowY:"auto",*/}
                                                        {/*maxWidth: "100%",*/}
                                                        {/*overflowX:"hidden",*/}
                                                        {/*scrollBehavior: "smooth",*/}
                                                        {/*height: "570px",*/}
                                                        {/*backgroundPosition: 'center',*/}
                                                        {/*backgroundAttachment: "fixed",*/}
                                                        {/*backgroundImage: `url(${backgroundChannel})`}}>*/}
                                                        {/*<Paper className={classes.paper} style={{margin:10}} onContextMenu={this.handleRightClick}  aria-haspopup="true" >*/}
                                                            {/*<Typography component={"h2"} variant={"body1"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>سلام نه جشسیه یسنم شمنیستب شنمیستب شمنسیبت شمنسیبت شمینستب  شمنسیتب شمسی تبمشتیس مب تشیسنم</Typography>*/}
                                                        {/*</Paper>*/}
                                                        {/*{this.filesArray.map((value,index) =>(*/}
                                                            {/*value*/}
                                                        {/*))}*/}
                                                        {/**/}
                                                        {/**/}
                                                        {/**/}
                                                        {/*{this.filePaper}*/}
                                                        {/*{this.filesArray.map((value,index) => (*/}
                                                            {/*<Paper id={index} className={classes.paper} style={{margin:10}} onContextMenu={handleRightClick}  aria-haspopup="true" onClick={handleClick}>*/}
                                                                {/*/!*<Typography component={"h2"} variant={"body1"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>سلام نه جشسیه یسنم شمنیستب شنمیستب شمنسیبت شمنسیبت شمینستب  شمنسیتب شمسی تبمشتیس مب تشیسنم</Typography>*!/*/}
                                                                {/*<img src={value} height={"100%"} width={"100%"} />*/}
                                                                {/*<video src={value} height={"100%"} width={"100%"} controls />*/}
                                                                {/*<audio src={value} controls />*/}
                                                            {/*</Paper>*/}
                                                            {/*))}*/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                        {/*<Menu*/}
                                                            {/*id="simple-menu"*/}
                                                            {/*keepMounted*/}
                                                            {/*open={this.state.mouseY !== null}*/}
                                                            {/*onClose={handleClose}*/}
                                                            {/*anchorReference="anchorPosition"*/}
                                                            {/*anchorPosition={*/}
                                                                {/*this.state.mouseY !== null && this.state.mouseX !== null*/}
                                                                    {/*? { top: this.state.mouseY, left: this.state.mouseX }*/}
                                                                    {/*: undefined*/}
                                                            {/*}*/}
                                                            {/*disableAutoFocusItem*/}
                                                            {/*MenuListProps={{textAlign:"center"}}*/}
                                                        {/*>*/}
                                                            {/*{options.map((option, index) => (*/}
                                                                {/*<MenuItem*/}
                                                                    {/*key={index}*/}
                                                                    {/*style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign: "center"}}*/}
                                                                    {/*onClick={(event) => handleOptions(event,index)}*/}
                                                                {/*>*/}
                                                                    {/*{option}*/}
                                                                {/*</MenuItem>*/}
                                                            {/*))}*/}
                                                        {/*</Menu>*/}
                                                        {/*salam adsafdsjl;fkajdskl*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}
                                                        {/*<br />*/}


                                                        {/*salam*/}
                                                    {/*</div>*/}
                                                    {/*</DragAndDrop>*/}
                                                    <Divider style={{marginTop:10}} />
                                                    {this.state.admin ?
                                                    <TextField id="standard-basic" multiline fullWidth
                                                               placeholder={"پیام خود را وارد کنید"}
                                                               InputProps={{
                                                                   style: {fontFamily: 'IRANSansWeb'},
                                                                   endAdornment: (
                                                                       <InputAdornment position="end">
                                                                           <IconButton
                                                                               style={{padding: '0px', color: '#3f407d'}}
                                                                               onClick={handleSendIcon}
                                                                              // onMouseDown={this.handleMouseDownPassword}
                                                                           >
                                                                               <Done style={{ fontSize: 35 }} />
                                                                           </IconButton>
                                                                       </InputAdornment>)
                                                               }}
                                                    /> :
                                                        this.state.isJoined ? null :
                                                        <Button variant="contained" fullWidth color={'primary'} onClick={handleEditChannel}>پیوستن به کانال</Button>
                                                    }
                                                    {/*<img src={backgroundChannel} />*/}
                                                </Paper>
                                                {/*<Typography component="div" style={{ backgroundColor: '#cf18fc', height: '20vh',width:'100vh' }} />*/}
                                            </Grid>
                                            <Grid item sm={3} xs={12} className={classes.leftSection}>
                                                <Paper className={classes.paper} style={{display: "flex",flexDirection:"column", }} >
                                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelInfoAvatar} />
                                                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d',alignSelf: "baseline",marginBottom: "10px"}}>توضیحات </Typography>
                                                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign:"right",alignSelf: "baseline",marginBottom: "10px"}}>channelID</Typography>
                                                    <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-evenly",alignItems: "center"}}  >
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
                                                                                   onClick={handleSendIcon}
                                                                                   // onMouseDown={this.handleMouseDownPassword}
                                                                               >
                                                                                   <Done style={{ fontSize: 30 }} />
                                                                               </IconButton>
                                                                           </InputAdornment>)
                                                                   }}
                                                        />
                                                    </Collapse>
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
}));
export default () =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <Channel classes={classes} p={p}/>
    )
}