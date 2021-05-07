import React, { Component } from "react";
import backgroundChannel from "../../Resource/backgroundChannel.jpg";
import DragAndDrop from "./DragAndDrop";
import {makeStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import MuiMenuItem from "@material-ui/core/MenuItem/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Add, Done, Send} from "@material-ui/icons";
import {AssignmentSharp} from "@material-ui/icons";
import {CloudUpload} from "@material-ui/icons";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import ScrollArea from  'react-scrollbar';
import LoadingOverlay from 'react-loading-overlay';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";
import ErrorDialog from "./ChannelPage";

const MenuItem = withStyles({
    root: {
        justifyContent: "flex-end"
    }
})(MuiMenuItem);

class ChannelMessages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseX: null,
            mouseY: null,
            isTextSelected:false,
            editing:false,
            needEndMessages:false,
            loading:true,
            role:this.props.role,
            textOptions:[],
            fileOptions:[],
            enableDragAndDrop:false,
            setErrorDialog:false,
        };
       // console.log(this.state.role);
        this.myRef = [];
        this.initialization();
    }
    newMessageFile = [];
    // textOptions = [];
    // fileOptions = [];
    indexSelected = -1;
    messageText = "";
    classes = this.props.classes;
    newMessagesList = [];
    //messageCount = 0;
    //previousLink = "";
    nextLink= "";
    counter = 0;
    link = "";
    //messagesEnd2 = null;
    ErrorDialogText = "";
    initialization = () => {
        axios.get(serverURL() + "channel-message/" + this.props.channelId + "/?query=" + "&page=" + 1,TokenConfig())
            .then(result => {
                console.log(result);
               // this.messageCount = result.data.count;
                //this.previousLink = result.data.previous;
                this.nextLink = result.data.next;
                this.newMessagesList = result.data.results;
                this.newMessagesList = [...this.newMessagesList].reverse();
                this.newMessageFile = this.newMessagesList.map((value,index) => {
                    if (value?.message_type === "t") {
                        return <Typography
                                           key={value?.id}
                                           variant={"body1"}
                                            >{value?.text}</Typography>
                    } else if (value?.message_type === "i") {
                        return <img key={value?.id} src={value?.message_file}
                                    height={"100%"} width={"100%"}/>
                    } else if (value?.message_type === "a") {
                        return <audio key={value?.id} src={value?.message_file} controls
                                      style={{
                                          height: "100%",
                                          width: "100%"
                                      }}/>
                    } else if (value?.message_type === "v") {
                        return <video key={value?.id} src={value?.message_file}
                                      height={"100%"} width={"100%"}
                                      controls/>
                    }
                });
                this.state.needEndMessages = true;
                this.setState({loading:false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
                this.ErrorDialogText = error.response.data?.error;
                this.setState({setErrorDialog:true});
            })
    };
    handleGetNewMessages = (value) => {
        if (value.topPosition === 0){
            if (this.counter === 0){
                this.counter++;
               // console.log("one time");
            }
            else {
                if (this.counter === 1){
                    this.counter++;
                   // console.log("two time");
                    this.setState({loading:true});
                    axios.get(this.nextLink,TokenConfig())
                        .then(result => {
                           // console.log(result);
                           // this.messageCount = result.data.count;
                           // this.previousLink = result.data.previous;
                            this.nextLink = result.data.next;
                            if (this.nextLink === null){
                                this.counter = -1;
                            }
                            let newMessagesList2 = result.data.results;
                            this.newMessagesList = [...newMessagesList2].reverse();
                            let newMessageFile2 = this.newMessagesList.map((value,index) => {
                                if (value?.message_type === "t") {
                                    return <Typography
                                                       key={value?.id}
                                                       variant={"body1"}
                                                       >{value?.text}</Typography>
                                } else if (value?.message_type === "i") {
                                    return <img key={value?.id} src={value?.message_file}
                                                height={"100%"} width={"100%"}/>
                                } else if (value?.message_type === "a") {
                                    return <audio key={value?.id} src={value?.message_file} controls
                                                  style={{
                                                      height: "100%",
                                                      width: "100%"
                                                  }}/>
                                } else if (value?.message_type === "v") {
                                    return <video key={value?.id} src={value?.message_file}
                                                  height={"100%"} width={"100%"}
                                                  controls/>
                                }
                            });
                            this.newMessageFile = newMessageFile2.concat(this.newMessageFile);
                            if (this.counter !== -1){
                                this.counter = 0;
                            }
                         //   this.messagesEnd2.scrollArea.refresh();
                            this.setState({loading:false});
                        })
                        .catch(error => {
                            console.log(error);
                            if (this.counter !== -1){
                                this.counter = 0;
                            }
                            this.setState({loading:false});
                            // this.ErrorDialogText = error?.response?.data?.error;
                            // this.setState({setErrorDialog:true});
                        })
                }
            }
        }
    };
    handleDrop = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            //console.log(files[i].type);
            let uri = URL.createObjectURL(files[i]);
            const formData = new FormData();
            formData.append(
                "message_file",
                files[i]
            );
            this.setState({loading:true});
            if (files[i].type.split("/")[0] === "audio"){
                formData.append(
                    "message_type",
                    "a"
                );
                axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
                    .then(result => {
                        //console.log(result);
                        this.newMessageFile.push(
                            <audio key={result.data.id} src={uri} controls style={{height:"100%",width:"100%"}} />
                        );
                        this.setState({loading:false});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.setState({loading:false});
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });
            }
            else if (files[i].type.split("/")[0] === "image"){
                formData.append(
                    "message_type",
                    "i"
                );
                axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
                    .then(result => {
                        //console.log(result);
                        this.newMessageFile.push(
                            //style={{maxHeight:"500px"}}
                            <img key={result.data.id} src={uri} height={"100%"} width={"100%"} />
                        );
                        this.setState({loading:false});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.setState({loading:false});
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });
            }
            else if (files[i].type.split("/")[0] === "video"){
                formData.append(
                    "message_type",
                    "v"
                );
                axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
                    .then(result => {
                        //console.log(result);
                        this.newMessageFile.push(
                            <video key={result.data.id} src={uri} height={"100%"} width={"100%"} controls />
                        );
                        this.setState({loading:false});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.setState({loading:false});
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });
            }
            else if (files[i].type.split("/")[0] === "application" || files[i].type.split("/")[0] === "text"){
                formData.append(
                    "message_type",
                    "t"
                );
                axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
                    .then(result => {
                        //console.log(result);
                        this.newMessageFile.push(
                            <div key={result.data.id} aria-label={uri}>
                                <IconButton disabled
                                            style={{padding: '0px', color: '#3f407d',display: "block", margin: "auto",}}
                                >
                                    <AssignmentSharp style={{ fontSize: 35 }} />
                                </IconButton>
                                <Typography variant={"body1"} dir={"ltr"} className={this.classes.blueFontStyle}>{files[i].name}</Typography>
                            </div>
                        );
                        this.setState({loading:false});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.setState({loading:false});
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });

            }
        }
     //   this.setState({});
    };
    handleRightClick = (event,isText,index) => {
        event.preventDefault();
        this.setState({mouseX:event.clientX,mouseY:event.clientY});
        isText ? this.setState({isTextSelected:true}) : this.setState({isTextSelected:false});
        this.indexSelected = index;
    };
    handleTextFieldChange = (event) => {
        this.messageText = event.target.value;
        this.setState({})
    };
    copyToClipboard = async (e) => {
        window.getSelection().removeAllRanges();
        const range = document.createRange();
        range.selectNode(this.myRef[this.indexSelected]);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        this.setState({});
    };
    handleFileOptions = (event,index) => {
        if (index === 0){
            ///console.log("here i have to download");
            if (typeof this.newMessageFile[this.indexSelected].props.src === "undefined"){
                this.link = this.newMessageFile[this.indexSelected].props["aria-label"];
            }
            else{
                this.link = this.newMessageFile[this.indexSelected].props.src;
            }
            // this.link = this.newMessageFile[this.indexSelected].props.src;
            window.open(this.link, "_blank",);
            // const linkk = document.createElement('a');
            // linkk.href = this.link;
            // document.body.appendChild(linkk);
            // linkk.click();
            // document.body.removeChild(linkk);
            //console.log()
        }
        else if (index === 1){
            //console.log("here i have to delete");
            axios.delete(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key +"/",TokenConfig())
                .then(result => {
                    console.log(result);
                    this.newMessageFile.splice(this.indexSelected, 1);
                    this.indexSelected = -1;
                    this.setState({});
                })
                .catch(error =>{
                    console.log(error);
                    this.indexSelected = -1;
                    this.ErrorDialogText = error.response.data?.error;
                    this.setState({setErrorDialog:true});
                });

            this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    componentDidMount() {
        // if (this.state.role === "consultant"){
        //     this.textOptions.push('رونوشت');
        //     this.textOptions.push('ویرایش');
        //     this.textOptions.push('حذف');
        //
        //     this.fileOptions.push('دانلود');
        //     this.fileOptions.push('حذف');
        // }
        // else{
        //     this.textOptions.push('رونوشت');
        //     this.fileOptions.push('دانلود');
        // }
        // for (let i in this.props.children){
        //     this.newMessageFile.push(this.props.children[i]);
        // }
        //this.initialization();
   //     this.setState({});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.needEndMessages === true){
             this.messagesEnd.scrollIntoView({ behavior: "smooth" });
            this.state.needEndMessages = false;
        }
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.role !== nextProps.role){
            this.state.role = nextProps.role;
           // console.log(this.props.role);
            if (this.state.role === "consultant") {
              //  console.info("here");
                this.state.enableDragAndDrop = true;
            }
            else{
                this.state.enableDragAndDrop = false;
            }
            this.setState({});
            if (nextProps.role === "consultant"){
                this.state.textOptions.push('رونوشت');
                this.state.textOptions.push('ویرایش');
                this.state.textOptions.push('حذف');

                this.state.fileOptions.push('دانلود');
                this.state.fileOptions.push('حذف');
            }
            else{
               // console.log("here");
                this.state.textOptions.push('رونوشت');
                this.state.fileOptions.push('دانلود');
            }
        }
        }
    handleStateErrorDialog = () =>{
        this.setState({setErrorDialog:!this.state.setErrorDialog})
    };
    render() {
        const classes = this.props.classes;
        const onFileChange = event => {
            this.handleDrop(event.target.files);
        };
        const handleTextOptions = async(event,index) => {
            if (index === 0)
            {
               // console.log("here i have to copy");
                await this.copyToClipboard(event);
                this.indexSelected = -1;
            }
            if (index === 1)
            {
               // console.log("here i have to edit");
                this.state.editing = true;
                this.messageText = this.newMessageFile[this.indexSelected].props.children;
                this.setState({});
            }
            if (index === 2)
            {
                // console.log("here i have to delete");
                axios.delete(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key +"/",TokenConfig())
                    .then(result => {
                        //console.log(result);
                        this.newMessageFile.splice(this.indexSelected, 1);
                        this.indexSelected = -1;
                        this.setState({});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.indexSelected = -1;
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });

                // let findingElement = this.newMessageFile.find((jsx) => jsx.props.children === "salam");
                // let index = this.newMessageFile.indexOf(findingElement);
                //const reducedArr = [...this.state.tasks];

                this.setState({});
            }
            this.setState({mouseX: null, mouseY: null,})
        };
        const handleClose = () => {
            this.setState({mouseX: null, mouseY: null,})
        };
        const handleSendIcon = (event) => {
            if (this.state.editing){
                const formData = new FormData();
                formData.append(
                    "text",
                    this.messageText
                );
                formData.append(
                    "message_type",
                    "t"
                );
                let text = this.messageText;
                axios.put(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key + "/",formData,TokenConfig())
                    .then(result => {
                        //console.log(result);
                        const newElement = <Typography key={result.data.id} variant={"body1"}>{text}</Typography>;
                        this.newMessageFile.splice(this.indexSelected, 1, newElement);
                        this.setState({});
                    })
                    .catch(error => {
                        console.log(error);
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });
                this.state.editing = false;
            }
            else{
                const formData = new FormData();
                formData.append(
                    "text",
                    this.messageText
                );
                formData.append(
                    "message_type",
                    "t"
                );
                let text = this.messageText;
                axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
                    .then(result => {
                       // console.log(result);
                        this.newMessageFile.push(
                            <Typography key={result.data.id} variant={"body1"} >{text}</Typography>
                        );
                        this.state.needEndMessages = true;
                        this.setState({});
                    })
                    .catch(error =>{
                        console.log(error);
                        this.ErrorDialogText = error.response.data?.error;
                        this.setState({setErrorDialog:true});
                    });
            }
            this.messageText = "";
            this.setState({});
        };
        const handleJoinChannel = (event) => {
            axios.post(serverURL() + "channel/subscription/",{"invite_link":this.props.inviteLink},TokenConfig())
                .then(result => {
                   // console.log(result);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                    this.ErrorDialogText = error.response.data?.error;
                    this.setState({setErrorDialog:true});
                    //console.log(error.response.data.error);
                })
        };
        return(
            <div>
                {/*<ErrorDialog open={this.state.setErrorDialog} errorText={this.ErrorDialogText} handleParentState={this.handleStateErrorDialog} />*/}
            <DragAndDrop handleDrop={this.handleDrop} enable={this.state.enableDragAndDrop}>
                <LoadingOverlay active={this.state.loading} spinner text={""}>
                <ScrollArea className={classes.mainDiv} speed={0.5} horizontal={false} onScroll={this.handleGetNewMessages}>
                    {this.newMessageFile.map((value,index) =>(
                        <Paper ref={(ref) => { this.myRef[index] = ref;}} className={value.type.displayName === "WithStyles(ForwardRef(Typography))" ? classes.textPaper : classes.filePaper} onContextMenu={(e) => this.handleRightClick(e, value.type.displayName === "WithStyles(ForwardRef(Typography))",index)} >
                            {value}
                        </Paper>
                    ))}
                    <Menu
                        keepMounted
                        open={this.state.mouseY !== null}
                        onClose={handleClose}
                        anchorReference="anchorPosition"
                        anchorPosition={
                            this.state.mouseY !== null && this.state.mouseX !== null
                                ? { top: this.state.mouseY, left: this.state.mouseX }
                                : undefined
                        }
                        disableAutoFocusItem
                        MenuListProps={{textAlign:"center"}}
                    >
                        {this.state.isTextSelected ?
                            this.state.textOptions.map((textOption, index) => (
                                <MenuItem
                                    key={index}
                                    className={classes.blueFontStyle}
                                    //style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}
                                    onClick={(event) => handleTextOptions(event,index)}
                                >
                                    {textOption}
                                </MenuItem>
                            ))
                            :
                            this.state.fileOptions.map((fileOption, index) => (
                                <MenuItem
                                    key={index}
                                    className={classes.blueFontStyle}
                                    //style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign: "center"}}
                                    onClick={(event) => this.handleFileOptions(event,index)}
                                >
                                    {fileOption}
                                </MenuItem>
                            ))
                        }
                    </Menu>
                    <div style={{ clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </ScrollArea>
                </LoadingOverlay>
            </DragAndDrop>
                <input
                    style={{display : 'none'}}
                    id='file' type="file" onChange={onFileChange} multiple/>
                {this.props.role === null ? null :
                    this.props.role === "consultant" ? <div>
                        <Divider className={classes.divider} />
                        <TextField id="standard-basic" multiline fullWidth
                                   placeholder={"پیام خود را وارد کنید"}
                                   value={this.messageText}
                                   onChange={this.handleTextFieldChange}
                                   InputProps={{
                                       style: {fontFamily: 'IRANSansWeb'},
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <label htmlFor='file'>
                                                   <IconButton
                                                       aria-label="upload picture"
                                                       component="span"
                                                       style={{margin:"2px",padding: '0px', color: '#3f407d'}}
                                                   >
                                                       {/*<CloudUpload style={{ fontSize: 35 }} />*/}
                                                       <FontAwesomeIcon icon={faFileUpload} style={{color: '#3f407d'}}/>
                                                   </IconButton>
                                               </label>
                                               <IconButton
                                                   style={{margin:"2px",padding: '0px', color: '#3f407d'}}
                                                   onClick={handleSendIcon}
                                               >
                                                   {/*<Done style={{ fontSize: 35}} />*/}
                                                   <Send style={{ fontSize: 30 ,transform: "rotate(-180deg)"}} />
                                               </IconButton>
                                           </InputAdornment>)
                                   }}
                        />
                </div> : this.props.role === "nothing" ? <Button variant="contained" endIcon={<Add />} fullWidth color={'primary'} onClick={handleJoinChannel}>پیوستن به کانال</Button>
                        : null
                }
                {/*{this.props.role === "nothing" ?*/}
                    {/*null :*/}
                    {/*<Divider className={classes.divider} />*/}
                {/*}*/}

                {/*{this.props.role === "consultant" ?*/}
                    {/*<TextField id="standard-basic" multiline fullWidth*/}
                               {/*placeholder={"پیام خود را وارد کنید"}*/}
                               {/*value={this.messageText}*/}
                               {/*onChange={this.handleTextFieldChange}*/}
                               {/*InputProps={{*/}
                                   {/*style: {fontFamily: 'IRANSansWeb'},*/}
                                   {/*endAdornment: (*/}
                                       {/*<InputAdornment position="end">*/}
                                           {/*<label htmlFor='file'>*/}
                                           {/*<IconButton*/}
                                               {/*aria-label="upload picture"*/}
                                               {/*component="span"*/}
                                               {/*style={{margin:"2px",padding: '0px', color: '#3f407d'}}*/}
                                           {/*>*/}
                                               {/*/!*<CloudUpload style={{ fontSize: 35 }} />*!/*/}
                                               {/*<FontAwesomeIcon icon={faFileUpload} style={{color: '#3f407d'}}/>*/}
                                           {/*</IconButton>*/}
                                           {/*</label>*/}
                                           {/*<IconButton*/}
                                               {/*style={{margin:"2px",padding: '0px', color: '#3f407d'}}*/}
                                               {/*onClick={handleSendIcon}*/}
                                           {/*>*/}
                                               {/*/!*<Done style={{ fontSize: 35}} />*!/*/}
                                               {/*<Send style={{ fontSize: 30 ,transform: "rotate(-180deg)"}} />*/}
                                           {/*</IconButton>*/}
                                       {/*</InputAdornment>)*/}
                               {/*}}*/}
                    {/*/> :*/}
                    {/*this.props.role === "subscriber" ? null :*/}
                        {/*<Button variant="contained" endIcon={<Add />} fullWidth color={'primary'} onClick={handleJoinChannel}>پیوستن به کانال</Button>*/}
                {/*}*/}
              </div>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
    },
    mainDiv:{
        width: "100%",
        overflowY:"auto",
        overflowX:"hidden",
       // scrollBehavior: "smooth",
        height: "570px",
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        backgroundImage: `url(${backgroundChannel})`,

    },
    textPaper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(2),
        width:"fit-content",
    },
    filePaper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(0),
        width:"fit-content",
    },
    blueFontStyle:{
        fontFamily: 'IRANSansWeb',
        color: '#3f407d',
    },
    divider:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <ChannelMessages classes={classes} p={p} children={props.children} role={props.role} inviteLink={props.inviteLink} channelId={props.channelId}/>
    )
}