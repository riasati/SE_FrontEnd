import React, { Component } from "react";
import backgroundChannel from "../../Resource/backgroundChannel.jpg";
import DragAndDrop from "./DragAndDrop";
import {makeStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import FileViewer from 'react-file-viewer';

class ChannelMessages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseX: null,
            mouseY: null,
            fileState:false,
        };
    }
    filesArray = [];
    handleDrop = (files) => {
        const classes = this.props.classes;
        //    let filesArray = [];
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            //  let newUrl = URL.createObjectURL(files[i]);
            console.log(files[i].type);
            if (files[i].type.split("/")[0] === "audio"){
                this.filesArray.push(

                        <audio src={URL.createObjectURL(files[i])} controls style={{height:"100%",width:"100%"}} />

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
    handleRightClick = (event) => {
        event.preventDefault();
        this.setState({mouseX:event.clientX,mouseY:event.clientY})
    };

    render() {
        const classes = this.props.classes;
     //   const children = this.props.children;
        const options = [
            'رونوشت',
            'ویرایش',
            'حذف',
        ];

        const handleOptions = (event,index) => {
            if (index === 0)
            {
                console.log("here i have to copy");
                // let a = React.Children.toArray(this.props.children);
                // console.log(a[0].type.displayName);
                console.log(React.Children.count(this.props.children));
                let childType = React.Children.map(this.props.children,child => {
                    if (child.type.displayName)
                    return (
                        <div className="some-component-special-class">{child}</div>
                    );
                });
                for (let child in this.props.children){
                    //if (this.props.children[child].type.displayName != 'Card'){
                        console.log(this.props.children[child].type.displayName);
                        console.log(Typography.name);
                    //}
                }
                // React.Children.map(this.props.children, child => {
                //     // checking isValidElement is the safe way and avoids a typescript error too
                //     //if (React.isValidElement(child)) {
                //         console.log(child);
                //     //}
                // });
                // console.log(childrenWithProps[0]);
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
        const handleClose = () => {
            this.setState({mouseX: null, mouseY: null,})
            //setAnchorEl(null);
        };
        // const childrenWithProps = React.Children.map(this.props.children, child => {
        //     // checking isValidElement is the safe way and avoids a typescript error too
        //     if (React.isValidElement(child)) {
        //         console.log(child);
        //         return child;
        //     }
        //     return child;
        // });
        return(
            <DragAndDrop handleDrop={this.handleDrop}>
                <div className={classes.mainDiv}>
                    {
                        this.props.children.map((child,index) =>(
                            <Paper className={child.type.displayName === "WithStyles(ForwardRef(Typography))" ? classes.textPaper : classes.filePaper} onContextMenu={this.handleRightClick}  aria-haspopup="true" >
                                {child}
                            </Paper>
                        ))
                    }
                    <Paper className={classes.paper} onContextMenu={this.handleRightClick}  aria-haspopup="true" >
                        <Typography component={"h2"} variant={"body1"} className={classes.blueFontStyle}>سلام نه جشسیه یسنم شمنیستب شنمیستب شمنسیبت شمنسیبت شمینستب  شمنسیتب شمسی تبمشتیس مب تشیسنم</Typography>
                    </Paper>
                    {this.filesArray.map((value,index) =>(
                        <Paper className={classes.paper} onContextMenu={this.handleRightClick}  aria-haspopup="true" >
                            {value}
                        </Paper>
                    ))}
                    {/*<Paper>*/}
                        {/*{this.props.children}*/}
                    {/*</Paper>*/}

                    {/*{this.filePaper}*/}
                    {/*{this.filesArray.map((value,index) => (*/}
                    {/*<Paper id={index} className={classes.paper} style={{margin:10}} onContextMenu={this.handleRightClick}  aria-haspopup="true" >*/}
                    {/*/!*<Typography component={"h2"} variant={"body1"} style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>سلام نه جشسیه یسنم شمنیستب شنمیستب شمنسیبت شمنسیبت شمینستب  شمنسیتب شمسی تبمشتیس مب تشیسنم</Typography>*!/*/}
                    {/*<img src={value} height={"100%"} width={"100%"} />*/}
                    {/*<video src={value} height={"100%"} width={"100%"} controls />*/}
                    {/*<audio src={value} controls />*/}
                    {/*</Paper>*/}
                    {/*))}*/}
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
                        {options.map((option, index) => (
                            <MenuItem
                                key={index}
                                style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign: "center"}}
                                onClick={(event) => handleOptions(event,index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
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
                </div>
            </DragAndDrop>
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
        maxWidth: "100%",
        overflowX:"hidden",
        scrollBehavior: "smooth",
        height: "570px",
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        backgroundImage: `url(${backgroundChannel})`
    },
    textPaper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(2),
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
    },
    blueFontStyle:{
        fontFamily: 'IRANSansWeb',
        color: '#3f407d',
    }
}));
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <ChannelMessages classes={classes} p={p} children={props.children} />
    )
}