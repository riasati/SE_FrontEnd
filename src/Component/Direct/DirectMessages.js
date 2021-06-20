import React, { Component } from "react";
import backgroundChannel from "../../Resource/backgroundChannel.jpg";
import DragAndDrop from "../Channel/DragAndDrop";
import {makeStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MuiMenuItem from "@material-ui/core/MenuItem/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Send} from "@material-ui/icons";
import {AssignmentSharp} from "@material-ui/icons";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import ScrollArea from  'react-scrollbar';
import LoadingOverlay from 'react-loading-overlay';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";
import ErrorDialog from "../../RequestConfig/ErrorDialog";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
// import {w3cwebsocket as WebSocket} from "websocket";

const MenuItem = withStyles({
    root: {
        justifyContent: "flex-end"
    }
})(MuiMenuItem);

class DirectMessages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseX: null,
            mouseY: null,
            isTextSelected:false,
            editing:false,
            loading:true,
            textOptions:[],
            fileOptions:[],
            enableDragAndDrop:true,
            setErrorDialog:false,
            DirectMessagesArray:[],
            ws: null,
        };
        this.myRef = [];
        this.initialization(this.props.AddressUsername);
    }
    counter = 0;
    initialization = (AddressUsername) => {
        // {
        //     "id": 0,
        //     "sender_id": 0,
        //     "reciever_id": 0,
        //     "text": "string",
        //     "message_type": "string",
        //     "message_file": "string"
        // }
        this.handleConnectWebSocket(AddressUsername);

        axios.get(serverURL() + "profile/",TokenConfig())
            .then(result => {
                console.log(result);
                this.myUserProfile = result.data;
                this.setState({});
            })
            .catch(error => {
                console.log(error);
                this.setState({});
            })

        axios.get(serverURL() + "profile/" + AddressUsername + "/",TokenConfig())
            .then(result => {
                console.log(result);
                this.anotherUserProfile = result.data;
                this.setState({});
            })
            .catch(error => {
                console.log(error);
                this.setState({});
            })

        axios.get(serverURL() + "chat/direct/history/" + AddressUsername + "/?query=" + "&page=" + 1,TokenConfig())
            .then(result => {
                console.log(result);
                this.nextLink = result.data.next;
                this.state.DirectMessagesArray = result.data.results.reverse();
                this.setState({});
                this.messagesEnd.scrollIntoView({ behavior: "smooth" });
            })
            .catch(error => {
                console.log(error);
                this.setState({});
            })

        this.setState({});

    };
    getSocketNameFromUsernames = (username1,username2) => {
        if (username1 === null || username2 === null)
            return null;
        const array = [username1,username2].sort((a, b) => a.localeCompare(b));
        const str = array[0] + "_" + array[1];
        return str;
    };
    handleDrop = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            const formData = new FormData();
           // let text = this.messageText;
            formData.append(
                "message_file",
                files[i]
            );
            formData.append(
                "message_type",
                "i"
            );
            formData.append(
                "receiver_username",
                this.props.AddressUsername
            );
            axios.post(serverURL() + "chat/direct/message/",formData,TokenConfig())
                .then(result => {
                    console.log(result);
                    this.state.DirectMessagesArray.push({
                        id:result.data?.id,
                        text:result.data?.text,
                        message_file:result.data?.message_file,
                        sender:this.username,
                        reciever: this.props.AddressUsername,
                        message_type:result.data?.message_type,
                    });

                    this.handleSendMessage("Create",result.data?.id);
                    this.setState({});
                    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
                })
                .catch(error =>{
                    console.log(error);
                    //this.ErrorDialogText = error.response.data?.error;
                    //this.setState({setErrorDialog:true});
                });
        }
        this.setState({});
    };
    handleGetNewMessages = (value) => {
        if (value.topPosition === 0){
            if (this.counter === 0){
                this.counter++;
                 console.log("one time");
            }
            else {
                if (this.counter === 1){
                    this.counter++;
                     console.log("two time");
                    this.setState({loading:true});
                    axios.get(this.nextLink,TokenConfig())
                        .then(result => {
                            // console.log(result);
                            this.nextLink = result.data.next;
                            if (this.nextLink === null){
                                this.counter = -1;
                            }
                            let DirectMessagesArray2 = result.data.results.reverse();
                            this.state.DirectMessagesArray = DirectMessagesArray2.concat(this.state.DirectMessagesArray);
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
    handleTextOptions = async (event,index) => {
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
            this.messageText = this.state.DirectMessagesArray[this.indexSelected].text;

        }
        if (index === 2)
        {
            // console.log("here i have to delete");

            let id = this.state.DirectMessagesArray[this.indexSelected].id;
            axios.delete(serverURL() + "chat/direct/message/" + id +"/",TokenConfig())
                .then(result => {
                    console.log(result);
                    this.state.DirectMessagesArray.splice(this.indexSelected, 1);
                    this.indexSelected = -1;
                    this.handleSendMessage("Delete",id);
                    this.setState({});
                })
                .catch(error => {
                    console.log(error);
                    this.indexSelected = -1;
                    this.setState({});
                })
            this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    handleFileOptions = (event,index) => {
        if (index === 0){
            ///console.log("here i have to download");
            // if (typeof this.newMessageFile[this.indexSelected].props.src === "undefined"){
            //     this.link = this.newMessageFile[this.indexSelected].props["aria-label"];
            // }
            // else{
            let link = this.state.DirectMessagesArray[this.indexSelected]?.message_file;
            // }
             window.open(link, "_blank",);

        }
        else if (index === 1){
            //console.log("here i have to delete");
            let id = this.state.DirectMessagesArray[this.indexSelected].id;
            axios.delete(serverURL() + "chat/direct/message/" + id +"/",TokenConfig())
                .then(result => {
                    console.log(result);
                    this.state.DirectMessagesArray.splice(this.indexSelected, 1);
                    this.indexSelected = -1;
                    this.handleSendMessage("Delete",id);
                    this.setState({});
                })
                .catch(error => {
                    console.log(error);
                    this.indexSelected = -1;
                    this.setState({});
                })
            this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    handleTextFieldChange = (event) => {
        this.messageText = event.target.value;
        this.setState({})
    };
    handleSendIcon = (event) => {
        if (this.state.editing){
            let text = this.messageText;
            let id = this.state.DirectMessagesArray[this.indexSelected].id;
            const formData = new FormData();
            formData.append(
                "text",
                text
            );
            formData.append(
                "message_type",
                "t"
            );
            formData.append(
                "receiver_username",
                this.props.AddressUsername
            );
            axios.put(serverURL() + "chat/direct/message/" + id +"/",formData,TokenConfig())
                .then(result => {
                    console.log(result);
                    this.state.DirectMessagesArray[this.indexSelected].text = text;
                    this.indexSelected = -1;
                    this.handleSendMessage("Edit",id);
                    this.setState({});
                })
                .catch(error => {
                    console.log(error);
                    this.indexSelected = -1;
                    this.setState({});
                })
            this.setState({});
            this.state.editing = false;
        }
        else{
            const formData = new FormData();
            let text = this.messageText;
            formData.append(
                "text",
                text
            );
            formData.append(
                "message_type",
                "t"
            );
            formData.append(
                "receiver_username",
                this.props.AddressUsername
            );
            axios.post(serverURL() + "chat/direct/message/",formData,TokenConfig())
                .then(result => {
                     console.log(result);
                    this.state.DirectMessagesArray.push({
                        id:result.data?.id,
                        text:result.data?.text,
                        message_file:result.data?.message_file,
                        sender:this.username,
                        reciever: this.props.AddressUsername,
                        message_type:result.data?.message_type,
                    });



                    this.handleSendMessage("Create",result.data?.id);
                    //this.state.needEndMessages = true;
                    this.setState({});
                    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
                })
                .catch(error =>{
                    console.log(error);
                    //this.ErrorDialogText = error.response.data?.error;
                    //this.setState({setErrorDialog:true});
                });
        }
        this.messageText = "";
        this.setState({});
    };
    handleRightClick = (event,isText,index,isMyObject) => {
        event.preventDefault();
        if (isMyObject){
            this.state.textOptions = ['رونوشت','ویرایش','حذف'];
            this.state.fileOptions = ['دانلود','حذف'];
        }
        else{
            this.state.textOptions = ['رونوشت'];
            this.state.fileOptions = ['دانلود'];
        }

        this.setState({mouseX:event.clientX,mouseY:event.clientY});
        isText ? this.setState({isTextSelected:true}) : this.setState({isTextSelected:false});
        this.indexSelected = index;
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
    handleConnectWebSocket(AddressUsername){
        //const roomName = this.getSocketNameFromUsernames(this.username,"riasati");
        //var ws = new WebSocket("ws://iust-se-consultant.herokuapp.com/ws/chat/"+roomName+'/');
        this.state.ws = new WebSocket("ws://pargar.herokuapp.com/ws/chat/"+this.getSocketNameFromUsernames(AddressUsername,this.username)+'/')

        let that = this;
        var connectInterval;
        this.state.ws.onopen = () => {
            console.log("connected websocket main component");

            // this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };
        this.state.ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout;
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout));
        };

        // websocket onerror event listener
        this.state.ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            this.state.ws.close();
        };
        this.state.ws.onmessage =(message)=>{
            //console.log(message);
            const dataFormServer = JSON.parse(message.data);
            //console.log('message recieving is =',dataFormServer );

            // if (dataFormServer.OwnerUserName === this.username){
            //     //this.setState({DirectMessagesArray:[...this.state.DirectMessagesArray,dataFormServer.msg]})
            // }
            if (dataFormServer.OwnerUserName === AddressUsername){
                if (dataFormServer.msg === "Delete"){
                    console.log("DELETE");
                    let index = this.state.DirectMessagesArray.findIndex(element => element.id === dataFormServer.messageId)
                    if (index !== -1){
                        this.state.DirectMessagesArray.splice(index, 1);
                    }
                    this.setState({});
                }
                else {
                    axios.get(serverURL() + "chat/direct/message/" + dataFormServer.messageId + "/",TokenConfig())
                        .then(result => {
                            //console.log(result);
                            if (dataFormServer.msg === "Create"){
                                this.state.DirectMessagesArray.push({
                                    id:result.data?.id,
                                    text:result.data?.text,
                                    message_file:result.data?.message_file,
                                    sender:AddressUsername,
                                    reciever: this.username,
                                    message_type:result.data?.message_type,
                                });
                                this.setState({});
                                this.messagesEnd.scrollIntoView({ behavior: "smooth" });
                            }
                            else if (dataFormServer.msg === "Edit"){
                                console.log("EDIT");
                                let index = this.state.DirectMessagesArray.findIndex(element => element.id === dataFormServer.messageId)
                                if (index !== -1){
                                    this.state.DirectMessagesArray[index].text = result.data?.text;
                                }
                            }
                            this.setState({});
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
        }
        //this.setState({ ws: ws });
        //console.log(ws);
        console.log(this.state.ws);
    }
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) this.handleConnectWebSocket(this.props.AddressUsername); //check if websocket instance is closed, if so call `connect` function.
    };
    handleSendMessage(message,messageId) {
        let msg = {
            messageId: messageId,
            OwnerUserName:this.username,
            msg : message
        };
        try {
            this.state.ws.send(JSON.stringify(msg)) //send data to the server
            console.log('message sending is =',msg)
        } catch (error) {
            console.log(error) // catch error
        }

    }

    componentDidMount() {

        this.setState({loading:false});
       // this.handleConnectWebSocket();
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.AddressUsername !== this.props.AddressUsername){
            this.state.DirectMessagesArray = [];
            this.counter = 0;
            this.initialization(nextProps.AddressUsername);
        }
    }

    handleStateErrorDialog = () =>{
        this.setState({setErrorDialog:!this.state.setErrorDialog})
    };
    messageText = "";
    username = localStorage.getItem('username');
    // firstName = localStorage.getItem('firstName');
    // lastName = localStorage.getItem('lastName');
    indexSelected = -1;
    nextLink = "";
    anotherUserProfile = {};
    myUserProfile = {};

    render() {
        const classes = this.props.classes;
        const onFileChange = event => {
            this.handleDrop(event.target.files);
        };
        console.log(this.username);
        console.log(this.props.AddressUsername);
        return(
            <div className={classes.mainDiv}>
                {this.props.AddressUsername === undefined ? null :
                    <Typography variant={"body1"} align={"left"} style={{display:"flex",alignItems:"center"}}>
                        <Avatar alt={this.anotherUserProfile.first_name + this.anotherUserProfile.last_name} src={this.anotherUserProfile.avatar} className={classes.titleAvatar}>
                        </Avatar>
                        {this.anotherUserProfile.first_name}
                        &nbsp;
                        {this.anotherUserProfile.last_name}
                        {/*&nbsp;*/}
                    </Typography>
                }
                {/*<Typography variant={"body1"} align={"left"} style={{display:"flex",alignItems:"center"}}>*/}
                    {/*<Avatar alt={"ConsultantFirstName + ConsultantLastName"} src={"ConsultantAvatarAddress"} className={classes.titleAvatar}>*/}
                    {/*</Avatar>*/}
                    {/*مشاور*/}
                    {/*&nbsp;*/}
                    {/*{"ConsultantFirstName"} {"ConsultantLastName"}*/}
                    {/*/!*&nbsp;*!/*/}
                {/*</Typography>*/}
                <Divider className={classes.divider} />
                <div
                    style={{display: 'block', position: 'relative'}}
                >
                    {this.props.AddressUsername === undefined ?
                        <div
                            style={{
                                //      border: 'dashed grey 4px',
                                backgroundColor: 'rgba(255,255,255,.8)',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 9999
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    color: 'grey',
                                    fontSize: 36
                                }}
                            >
                                <div style={{fontFamily:"IRANSansWeb"}}>لطفا يك گفت و گو را انتخاب كنيد</div>
                            </div>
                        </div>
                        : null}
                    <DragAndDrop handleDrop={this.handleDrop} enable={this.state.enableDragAndDrop}>
                        <LoadingOverlay active={this.state.loading} spinner text={""}>
                            <ScrollArea className={classes.pictureDiv} speed={0.5} horizontal={false} onScroll={this.handleGetNewMessages}>
                                {this.state.DirectMessagesArray.map((value,index) => (
                                    <div style={value.sender === this.props.AddressUsername ? {display:"flex",flexDirection:"row-reverse",alignItems:"center"} : {display:"flex",flexDirection:"row",alignItems:"center"}}>
                                        <Avatar alt={value.sender === this.username ? this.myUserProfile.first_name + this.myUserProfile.last_name : this.anotherUserProfile.first_name + this.anotherUserProfile.last_name} src={value.sender === this.username ? this.myUserProfile.avatar : this.anotherUserProfile.avatar } className={classes.messageAvatar} />
                                        <Paper ref={(ref) => { this.myRef[index] = ref;}} style={value.sender === this.props.AddressUsername ? {} : { backgroundColor:"#effdde"}}  className={value.text !== "" ? classes.textPaper : classes.filePaper} onContextMenu={(e) => this.handleRightClick(e, value.text !== null , index ,value.sender === this.username)} >
                                            {value.text === null ? <img key={index} src={value?.message_file}
                                                                         height={"100%"} width={"100%"}/> : <Typography variant={"body1"} align={"left"}>{value.text}</Typography>}
                                        </Paper>
                                    </div>
                                ))}
                                {/*{this.newMessageFile.map((value,index) =>(*/}
                                    {/*<Paper ref={(ref) => { this.myRef[index] = ref;}} className={value.type.displayName === "WithStyles(ForwardRef(Typography))" ? classes.textPaper : classes.filePaper} onContextMenu={(e) => this.handleRightClick(e, value.type.displayName === "WithStyles(ForwardRef(Typography))",index)} >*/}
                                        {/*{value}*/}
                                    {/*</Paper>*/}
                                {/*))}*/}
                                <Menu
                                    keepMounted
                                    open={this.state.mouseY !== null}
                                    onClose={() => {this.setState({mouseX: null, mouseY: null,})}}
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
                                                onClick={(event) => this.handleTextOptions(event,index)}
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
                    </div>
                <input
                    style={{display : 'none'}}
                    id='file' type="file" onChange={onFileChange} multiple/>
                <div>
                    <Divider className={classes.divider} />
                    {this.props.AddressUsername === undefined ? null :
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
                                                   onClick={this.handleSendIcon}
                                               >
                                                   {/*<Done style={{ fontSize: 35}} />*/}
                                                   <Send style={{ fontSize: 30 ,transform: "rotate(-180deg)"}} />
                                               </IconButton>
                                           </InputAdornment>)
                                   }}
                        />
                    }
                </div>
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
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
    pictureDiv:{
        width: "100%",
        overflowY:"hidden",
        overflowX:"hidden",
        // scrollBehavior: "smooth",
        height: "80vh",//"570px",
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        backgroundImage: `url(${backgroundChannel})`,
    },
    titleAvatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        margin:"0px 4px",
    }, 
    messageAvatar:{
        width: theme.spacing(4),
        height: theme.spacing(4),
        margin:"0px 4px",
    },
    textPaper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(1,0.5),
        width:"fit-content",
    },
    filePaper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(1,0.5),
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
        <DirectMessages classes={classes} p={p} AddressUsername={props.AddressUsername}/>
    )
}