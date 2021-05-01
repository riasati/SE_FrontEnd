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
import Button from "@material-ui/core/Button";
import ErrorDialog from "../../RequestConfig/ErrorDialog";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import { FiAlertCircle } from "react-icons/fi";
import TextField from "@material-ui/core/TextField";

class CreateChannel extends Component{
        constructor() {
        super();
        this.state = {
            channelName: '',
            channelDescription:'',
            channelLink: '',
            setErrorDialog:false,
            isValidLink:true,
            loading:true
        }
    }
        componentDidMount() {
        this.setState({loading:false});
    }
        handleChange = e => {
        this.setState({setErrorDialog:false});
        this.setState({ [e.target.name]: e.target.value });
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
                const token ="Token "+ res.data.token;
                localStorage.setItem('token', token);
                window.location.href = "channel/"+ this.state.channelLink;
            })
            .catch(err=>{
                console.log(err);
                this.setState({setErrorDialog:true,ErrorDialogText:err.message});
            });
            };
            return(
                <LoadingOverlay active={this.state.loading} spinner text="">
                    <Container color="red" component="main" maxWidth="xs" >
                    <CssBaseline/>
                    <div >
                        <div className={classes.paper} color="#9a7574">
                        <Typography component="h1" variant="h6" style={{fontFamily: 'IRANSansWeb',}} color="#9a7574">
                            {'ساخت کانال'}
                            <br/>
                            <span ><ChatIcon style={{marginTop: '10px'}} fontSize="small"/></span>
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
                                                errorMessages={['لینک کانال تکراری است!']}
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
                                            <Grid xs={4}>
                                                <button onClick={this.handleCreateLink} style={{fontFamily: 'IRANSansWeb'}} >      یک لینک به من بده
                                                    </button>
                                            </Grid>
                                            {this.state.isValidLink ? null:
                                                <text style={{fontFamily: 'IRANSansWeb',}} ><FiAlertCircle/>    این لینک تکراری است (لینک خود را تغیر دهید)
                                                </text>
                                                }
                                            <Grid item xs={12}>
                                            </Grid>
                                        </Grid>
                                         <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Button onClick={handleClick }  className={classes.topButton}  variant="contained" fullWidth>
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