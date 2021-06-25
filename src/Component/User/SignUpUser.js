import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Material_RTL from "../RTL/Material_RTL";
import  {AccountCircle, Email, Visibility, VisibilityOff, VpnKey, PhoneAndroid,Person,PermIdentity} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import IconButton from "@material-ui/core/IconButton";
import RTL from '../RTL/M_RTL';
import ErrorDialog from '../../RequestConfig/ErrorDialog';
import serverURL from "../../RequestConfig/serverURL";
import LoadingOverlay from 'react-loading-overlay';
//import LoadingButton from '@material-ui/lab/LoadingButton';
class SignUpUser extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            password_repetition: '',
            phone_number: '',
            showPassword: false,
            isLoading: false,
            setErrorDialog:false,
        //    ErrorDialogText:'',
            loading:true
        }
    }

    handleChange = e => {
       // this.setState({setErrorDialog:false});
        this.setState({[e.target.name]: e.target.value});
    }
    ErrorDialogText = '';
    handleClickShowPassword = () => {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword,
        });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleStateErrorDialog = () =>{
        this.setState({setErrorDialog:!this.state.setErrorDialog})
    };

    componentDidMount() {
        this.setState({loading:false});
        // custom rule will have name 'isPasswordMatch'
         ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
             if (value !== this.state.password) {
                 return false;
             }
             return true;
         });
    }

    render() {
        const handleConfirmPassword=(e)=>{
            const password= this.state.password;
            const password_repetition = this.state.password_repetition;
            console.log("pass",password,password_repetition);
            if (password !== password_repetition) {
                console.log("wrong");
                return (alert("تکرار رمز عبور مطابقت ندارد !!")) //(<Alert severity="error">Password is wrong!</Alert>);
            } else {
                handleClick(e);
            }
            };
        const classes = this.props.classes;
        const [pending, setPending] = this.props.pending;
        var handleClick = e => {
            setPending(true);
            e.preventDefault();
            axios.post(serverURL() + "user/signup/", this.state)
                .then(res =>{
                    console.log(res);
                    const token ="Token "+ res.data.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('userType', res.data?.data?.user_type);
                    localStorage.setItem('username', res.data?.data?.username);
                    // localStorage.setItem('firstName', result.data?.data?.first_name);
                    // localStorage.setItem('lastName', result.data?.data?.last_name);
                    window.location.href = "/VerifyEmail";
                })
                .catch(err=>{
                    setPending(false);
                    let errMessage = "";
                    let resError = err.response.data;
                    // typeof resError.error.username !== "undefined" ? errMessage += resError.error.username[0] : null;
                    // typeof(resError.error.email) !== "undefined" ? errMessage += resError.error.email[0] : null;
                    // typeof(resError.error.phone_number) !== "undefined" ? errMessage += resError.error.phone_number[0] : null;
                    // typeof(resError.error.password) !== "undefined" ? errMessage += resError.error.password[0] : null;
                    // typeof(resError.error.password_repetition) !== "undefined" ? errMessage += resError.error.password_repetition[0] : null;
                    if (typeof (resError.error) !== "undefined")
                    {
                        if (typeof(resError.error.username) !== "undefined")
                        {
                            errMessage += resError.error.username[0];
                        }
                        if (typeof (resError.error.email) !== "undefined")
                        {
                            errMessage += resError.error.email[0];
                        }
                        if (typeof (resError.error.phone_number) !== "undefined")
                        {
                            errMessage += resError.error.phone_number[0];
                        }
                        if (typeof (resError.error.password) !== "undefined")
                        {
                            errMessage += resError.error.password[0] ;
                        }
                        if (typeof (resError.error.password_repetition) !== "undefined")
                        {
                            errMessage += resError.error.password_repetition[0] ;
                        }
                    }
                    if (errMessage === "")
                    {
                        errMessage = err.message
                    }
                    // console.log(err.response.data.error.email[0]);
                    // console.log(err.response.data.error.phone_number[0]);
                    // console.log(err.response.data.error.password[0]);
                    // console.log(err.response.data.error.password_repetition[0]);
                    //console.log(err.response.data.phone_number);
                    this.ErrorDialogText = errMessage;
                    this.setState({setErrorDialog:true});
                    //this.setState({setErrorDialog:true,ErrorDialogText:errMessage});
                });
        };


        return (
            <LoadingOverlay active={this.state.loading} spinner text="">
            <Container component="main" maxWidth="md" >
                <CssBaseline/>
                <div>
                    <div className={classes.paper}>
                        {/* <Avatar className={classes.avatar}>
                           <PersonAdd/>
                        </Avatar> */}
                        <Typography component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb',color: '#3f407d',marginBottom:'20px'}}>
                            ثبت نام
                        </Typography>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid  item xs={3}>
                                {/* empty grid */}
                            </Grid>
                            <Grid item xs={3} style={{boxShadow: 'inset 0px 0px 5px 0px',borderRadius: '10px 0px 0px 10px'}}>
                                <Link to="/SignUpUser" style={{color: '#3f407d', textDecoration: 'none',}}>
                                    <img src="https://img.icons8.com/plasticine/100/000000/gender-neutral-user--v1.png" style={{width:'50%'}}/>
                                    <div>مشاوره می خوام</div>
                                </Link>
                            </Grid>
                            <Grid item xs={3} style={{boxShadow: '0px 0px 10px 0px',borderRadius: '0px 10px 10px 0px'}}>
                                <Link to="/SignUpConsultant" style={{color: '#3f407d', textDecoration: 'none',}}>
                                    <img src="https://img.icons8.com/plasticine/100/000000/online-support.png" style={{width:'50%'}}/>
                                    <div>مشاوره میدم</div>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                {/*empty grid*/}
                            </Grid>
                        </Grid>
                        <Material_RTL>
                            <RTL>
                                <ValidatorForm className={classes.form} noValidate>
                                    <Grid container spacing={2} component="h6">
                                        <Grid item xs={12} sm={3}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="first_name"
                                                label={"نام"}
                                                name="first_name"
                                                autoComplete="first_name"
                                                type="string"
                                                value={this.state.first_name}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required']}
                                                errorMessages={['لطفا  نام خود را وارد کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <Person/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="last_name"
                                                label={"نام خانوادگی"}
                                                name="last_name"
                                                autoComplete="last_name"
                                                type="string"
                                                value={this.state.last_name}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required']}
                                                errorMessages={['لطفا نام خانوادگی خود را وارد کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <PermIdentity/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator  
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="username"
                                                label={"نام کاربری"}
                                                name="username"
                                                autoComplete="username"
                                                type="string"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required', 'minStringLength:' + 6, 'matchRegexp:^[a-zA-Z0-9_]*$']}
                                                errorMessages={['لطفا یک نام کاربری مناسب وارد کنید', 'طول نام کاربری باید بیشتر از ۶ باشد', 'a-z 0-9_ لطفا از حروف مجاز استفاده کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="ایمیل"
                                                name="email"
                                                autoComplete="email"
                                                type="string"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required', 'isEmail']}
                                                errorMessages={['لطفا ایمیل خود را وارد کنید', 'ایمیل شما معتبر نیست']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <Email/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="phone_number"
                                                label={"شماره تلفن"}
                                                name="phone_number"
                                                autoComplete="phone_number"
                                                type="string"
                                                value={this.state.phone_number}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required', 'minStringLength:' + 11, 'maxStringLength:' + 11, 'matchRegexp:09[0-9]*$']}
                                                errorMessages={['لطفا تلفن همراه خود را وارد کنید', 'طول شماره تلفن باید ۱۱ عدد باشد','طول شماره تلفن باید ۱۱ عدد باشد', ' شماره تلفن همراه باید عدد باشد و با ۰۹ شروع شود']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <PhoneAndroid/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label={"رمز عبور"}
                                                id="password"
                                                autoComplete="current-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required', 'minStringLength:' + 6]}
                                                errorMessages={['لطفا رمز عبور خود را وارد کنید', 'رمز عبور باید بیشتر از ۶ حرف باشد']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <IconButton
                                                                style={{padding: '0px', color: '#2ab371'}}
                                                                onClick={this.handleClickShowPassword}
                                                                onMouseDown={this.handleMouseDownPassword}
                                                            >
                                                                {this.state.showPassword ? <Visibility/> :
                                                                    <VisibilityOff/>}
                                                            </IconButton>
                                                        </InputAdornment>)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                size="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password_repetition"
                                                label="تایید رمز عبور"
                                                id="password_repetition"
                                                autoComplete="current-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.password_repetition}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'}}}
                                                validators={[ 'isPasswordMatch','required']}
                                                errorMessages={[ 'رمز عبور مطابقت ندارد','لطفا رمز عبور خود را تکرار کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment className={classes.InputAdornment} position="end">
                                                            <VpnKey/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Button onClick={handleClick } pendingPosition="center" className={classes.topButton} pending={pending}  fullWidth>
                                                    {'ثبت نام'}
                                                </Button>
                                                <ErrorDialog open={this.state.setErrorDialog} errorText={this.ErrorDialogText} handleParentState={this.handleStateErrorDialog} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Link to="/signIn" style={{color: 'white', textDecoration: 'none',}}>

                                                    <Button
                                                        className={classes.bottomButton}
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        
                                                        startIcon={<FontAwesomeIcon icon={faSignInAlt} size="2x" style={{color: 'white'}}/>}
                                                    >
                                                        {'ورود'}

                                                    </Button></Link></Grid>
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
    };
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiFormHelperText-root.Mui-error': {
            fontFamily: 'IRANSansWeb',
        },
    },
    InputAdornment:{
        color:"#2ab371",
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
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        backgroundColor: '#f3f7fa',
        fontFamily: 'IRANSansWeb !important',
        padding: '20px',
        borderRadius: '10px',
        opacity: '95%',
    },
    form: {
        marginTop: theme.spacing(3),
    },
    formControl: {
        minWidth: '100%',
    },
}));

export default () => {
    const classes = useStyles();
    const pending = React.useState(false);
    return (
        <SignUpUser classes={classes} pending={pending}/>
    )
}