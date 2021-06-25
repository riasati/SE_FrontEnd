import React,{Component} from "react";
import {makeStyles} from "@material-ui/core";
import LoadingOverlay from 'react-loading-overlay';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography";
import ChatIcon from '@material-ui/icons/Chat';
import Material_RTL from "../RTL/Material_RTL";
import RTL from "../RTL/M_RTL";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle, Lock, Visibility, VisibilityOff} from "@material-ui/icons";
import RateReviewIcon from '@material-ui/icons/RateReview';
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import LinkIcon from '@material-ui/icons/Link';
import { BiRename } from "react-icons/bi";
import { TiInfoLarge } from "react-icons/ti";
import { BiLinkAlt } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import ErrorDialog from "../../RequestConfig/ErrorDialog";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import { FiAlertCircle } from "react-icons/fi";
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete';


class CreateChannel extends Component{
        constructor() {
        super();
        this.state = {
            channelName: '',
            channelDescription:'',
            channelLink: '',
            setErrorDialog:false,
            isValidLink:true,
            showbox:true,
            loading:true,
            showError:true,
            channelId: '',
        }
    }
        componentDidMount() {
        this.setState({loading:false});
    }
    handleChange = e => {
        this.setState({setErrorDialog:false});
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name==="channelName"){
            this.setState({showError: true});
        }
    };
    handleCreateLink=e=>{
        axios.get(serverURL()+"channel/invite-link/",TokenConfig())
            .then(res =>{
                console.log(res);
                this.setState({channelLink:res.data.invite_link})
            })
    };
    handleValidLink= e=> {
            if (e.target.value === "hojat"){
                this.setState({isValidLink: false});
            }
            else {
                this.setState({isValidLink:true});
            }
            this.handleChange(e)
        };
    render() {
            const classes = this.props.classes;
            const handleClick = e => {
                const formData = new FormData();
        if(this.state.channelName!==""){
            formData.append(
              "certificate",
              null
            );
            formData.append(
              "name",
              this.state.channelName
            );
            formData.append(
                "description",
                this.state.channelDescription
            );
            formData.append(
                "invite_link",
                this.state.channelLink
            );
            axios.post(serverURL()+"channel/", formData,TokenConfig())
            .then(res =>{
                console.log(res);
                window.location.href = "channel/"+ res.data.id;
                this.setState({showbox:false});
            })
            .catch(err=>{
                console.log(err);
                this.setState({setErrorDialog:true,ErrorDialogText:err.message});
            });
        }
        else{
            {this.setState({showError : false})}
        }
            };
            return(
                <LoadingOverlay active={this.state.loading} spinner text="">
                <Dialog open={this.state.showbox}>
                <Container color="red" component="main" maxWidth="xs" >
                <CssBaseline/>
                <div >
                    <div className={classes.paper} color="#9a7574">
                    <Typography component="h1" variant="h6" style={{fontFamily: 'IRANSansWeb',}} color="#9a7574">
                        <Grid xs={12}container direction="column" justify="space-around" alignItems="center">
                            <Grid xs={12} item>
                                {'ساخت کانال'}
                            </Grid>
                            <Grid xs={12} item>
                                <span ><ChatIcon style={{marginTop: '15px'}} fontSize="small"/></span>
                            </Grid>
                        </Grid>
                    </Typography>
                        <Material_RTL >
                            <RTL>
                                <ValidatorForm  noValidate >
                                    <Grid container spacing={2} component="h6">
                                        <Grid  item xs={12}>
                                            <TextValidator
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="channelName"
                                            label="نام کانال خود را وارد کنید"
                                            name="channelName"
                                            type="string"
                                            autoComplete="channelName"
                                            value={this.state.channelName}
                                            onChange={this.handleChange}
                                            InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                            validators={['required']}
                                            errorMessages={['نام کانال اشتباه است']}
                                            InputProps={{
                                                style:{fontFamily: 'IRANSansWeb'},
                                                endAdornment: (
                                                    <InputAdornment className={classes.InputAdornment} position="start">
                                                        <BiRename fontSize="small" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        </Grid>
                                        {this.state.showError ? null:
                                            <text  style={{fontFamily: 'IRANSansWeb',fontSize:"small" ,color:"#ba000d"}}  ><FiAlertCircle margin="10%"/> 
                                                {"نام کانال خالی است !!!"}
                                                 </text>
                                            }
                                        <Grid item xs={12}>
                                        <TextValidator
                                            margin="normal"
                                            fullWidth
                                            name="channelLink"
                                            label="لینک کانال"
                                            type="string"
                                            id="channelLink"
                                            autoComplete="channelLink"
                                            value={this.state.channelLink}
                                            placeholder={this.state.channelLink}
                                            onChange={this.handleValidLink}
                                            InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                            validators={['required']}
                                            errorMessages={['']}
                                            InputProps={{
                                                style: {fontFamily: 'IRANSansWeb'},
                                                endAdornment: (
                                                    <InputAdornment className={classes.InputAdornment}
                                                                    position="start">
                                                        <LinkIcon fontSize="small"/>
                                                        <text>/p.link</text>
                                                    </InputAdornment>
                                                ),
                                            }
                                            }
                                        /></Grid>
                                        <Grid xs={12} item>
                                            <button onClick={this.handleCreateLink}  className={classes.linkButton1}   >
                                                {"یک لینک به من بده"}                                                
                                                <BiLinkAlt   fontSize="small" />
                                                </button>
                                            </Grid>
                                            <Grid xs={12} item>
                                        {this.state.isValidLink ? null:
                                            <text  style={{fontFamily: 'IRANSansWeb',fontSize:"small" ,color:"#ba000d"}}  ><FiAlertCircle/>    این لینک تکراری است (لینک خود را تغیر دهید)
                                            </text>
                                            }
                                        </Grid>
                                    </Grid>
                                     <br/>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid>
                                            <Button onClick={handleClick }  className={classes.linkbutton}  variant="contained" fullWidth>
                                                ساخت کانال
                                            </Button>
                                            <ErrorDialog open={this.state.setErrorDialog} errorText={this.state.ErrorDialogText} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </ValidatorForm>
                            </RTL>
                        </Material_RTL>
                    </div>
                </div>
                </Container>
                </Dialog>
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
    InputAdornment:{
        color:"#2ab371",
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#3f407d',
        backgroundColor: '#f3f7fa',
        fontFamily: 'IRANSansWeb !important',
        padding: '20px',
        borderRadius: '10px',
    },
    linkButton1 :{
        fontSize:"small",
        border: '.0px solid',
        margin: theme.spacing(1),
        fontFamily: [
            'IRANSansWeb',
            
        ].join(','),
        backgroundColor: '#ede9bd',
        color: '#171717',
        "&:hover": {
            backgroundColor: '#ace490',
            borderColor: '#acd6cd',
            boxShadow: 'none',
        },

    },
    linkbutton :{
        fontSize:"small",
        border: '5px solid',
        margin: theme.spacing(1),
        fontFamily: [
            'IRANSansWeb',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        backgroundColor: '#5073ed',
        color: '#ffe9ff',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: '#5d3ed6',
            borderColor: '#ffe9ff',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ffe9ff',
            borderColor: '#ffe9ff',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    topButton: {
        fontFamily: 'IRANSansWeb',
        backgroundColor: '#5073ed',
        color: 'white',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: '#3aadd9' ,
            color: 'white'
        },
    },
    bottomButton:{
        backgroundColor: '#2ab371',
        color: 'white',
        fontFamily: 'IRANSansWeb',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: '#0e918c' ,
            color: 'white'
        },
    }
}));
export default () =>{
    const token = localStorage.getItem('token');
    const classes = useStyles();
    return(
        <CreateChannel classes={classes} />
    )
}