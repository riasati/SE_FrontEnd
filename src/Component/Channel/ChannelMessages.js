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
import {Done} from "@material-ui/icons";
import {AssignmentSharp} from "@material-ui/icons";

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
            fileState:false,
            isTextSelected:false,
            editing:false,
        };
        this.myRef = [];
    }
    newMessageFile = [];
    textOptions = [];
    fileOptions = [];
    indexSelected = -1;
    messageText = "";
    classes = this.props.classes;
    handleDrop = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            console.log(files[i].type);
            let uri = URL.createObjectURL(files[i]);
            if (files[i].type.split("/")[0] === "audio"){
                this.newMessageFile.push(
                        <audio src={uri} controls style={{height:"100%",width:"100%"}} />
                );
            }
            else if (files[i].type.split("/")[0] === "image"){
                this.newMessageFile.push(
                        <img src={uri} height={"100%"} width={"100%"} />
                );
            }
            else if (files[i].type.split("/")[0] === "video"){
                this.newMessageFile.push(
                        <video src={uri} height={"100%"} width={"100%"} controls />
                );
            }
            else if (files[i].type.split("/")[0] === "application" || files[i].type.split("/")[0] === "text"){
                this.newMessageFile.push(
                    <div aria-label={uri}>
                        <IconButton disabled
                            style={{padding: '0px', color: '#3f407d',display: "block", margin: "auto",}}
                        >
                            <AssignmentSharp style={{ fontSize: 35 }} />
                        </IconButton>
                        <Typography component={"h2"} variant={"body1"} dir={"ltr"} className={this.classes.blueFontStyle}>{files[i].name}</Typography>
                    </div>
                );
            }
        }
        this.setState({fileState: true})
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
            console.log("here i have to download");
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
            console.log("here i have to delete");

            this.newMessageFile.splice(this.indexSelected, 1);
            this.indexSelected = -1;
            this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    componentDidMount() {
        if (this.props.admin){
            this.textOptions.push('رونوشت');
            this.textOptions.push('ویرایش');
            this.textOptions.push('حذف');

            this.fileOptions.push('دانلود');
            this.fileOptions.push('حذف');
        }
        else{
            this.textOptions.push('رونوشت');
            this.fileOptions.push('دانلود');
        }
        for (let i in this.props.children){
            this.newMessageFile.push(this.props.children[i]);
        }
    }

    link = "";
    render() {
        const classes = this.props.classes;

        const handleTextOptions = async(event,index) => {
            if (index === 0)
            {
                console.log("here i have to copy");
                await this.copyToClipboard(event);
                this.indexSelected = -1;
            }
            if (index === 1)
            {
                console.log("here i have to edit");
                this.state.editing = true;
                this.messageText = this.newMessageFile[this.indexSelected].props.children;
                this.setState({});
            }
            if (index === 2)
            {
                console.log("here i have to delete");
                // let findingElement = this.newMessageFile.find((jsx) => jsx.props.children === "salam");
                // let index = this.newMessageFile.indexOf(findingElement);
                //const reducedArr = [...this.state.tasks];
                this.newMessageFile.splice(this.indexSelected, 1);
                this.indexSelected = -1;
                this.setState({});
            }
            this.setState({mouseX: null, mouseY: null,})
        };
        const handleClose = () => {
            this.setState({mouseX: null, mouseY: null,})
        };
        const handleSendIcon = (event) => {
            if (this.state.editing){
                const newElement = <Typography component={"h2"} variant={"body1"} className={classes.blueFontStyle}>{this.messageText}</Typography>
                this.newMessageFile.splice(this.indexSelected, 1, newElement);
                this.state.editing = false;
            }
            else{
                this.newMessageFile.push(
                    <Typography component={"h2"} variant={"body1"} className={classes.blueFontStyle}>{this.messageText}</Typography>
                );
            }
            this.messageText = "";
            console.log(this.newMessageFile[4]);
            this.setState({});
        };
        const handleJoinChannel = (event) => {

        };
        return(
            <div>
            <DragAndDrop handleDrop={this.handleDrop}>
                <div className={classes.mainDiv}>
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
                            this.textOptions.map((textOption, index) => (
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
                            this.fileOptions.map((fileOption, index) => (
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
                </div>
            </DragAndDrop>
                {this.props.admin === false && this.props.isJoined === false ?
                    null :
                    <Divider className={classes.divider} />
                }

                {this.props.admin ?
                    <TextField id="standard-basic" multiline fullWidth
                               placeholder={"پیام خود را وارد کنید"}
                               value={this.messageText}
                               onChange={this.handleTextFieldChange}
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
                    this.props.isJoined ? null :
                        <Button variant="contained" fullWidth color={'primary'} onClick={handleJoinChannel}>پیوستن به کانال</Button>
                }
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
        scrollBehavior: "smooth",
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
        <ChannelMessages classes={classes} p={p} children={props.children} admin={props.admin} isJoined={props.isJoined} />
    )
}