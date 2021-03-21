import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Material_RTL from "../RTL/Material_RTL";
import { AccountCircle, Email, PersonAdd, Visibility, VisibilityOff, VpnKey, PhoneAndroid,Person,PermIdentity,Login} from "@material-ui/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faFileImage} from '@fortawesome/free-solid-svg-icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import RTL from '../RTL/M_RTL';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Zoom from '@material-ui/core/Zoom';
class SignUpConsultant extends Component {
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
            consulltant_type: '',
            certificate: null,
            showPassword: false,
            isLoading: false,
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClickShowPassword = () => {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword,
        });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        // ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        //     if (value !== this.state.password) {
        //         return false;
        //     }
        //     return true;
        // });
    }
    onFileChange = event => { 
        this.setState({ certificate: event.target.files[0] }); 
      };
    render() {
        const classes = this.props.classes;

        const handleClick = e => {       
            const formData = new FormData(); 
            formData.append( 
              "myFile", 
              this.state.certificate, 
              this.state.certificate.name 
            ); 
            this.setState({ certificate: formData });
            // // Details of the uploaded file 
            console.log(this.state.certificate); 
            console.log(formData); 
           
            // Request made to the backend api 
            // Send formData object 
            axios.post("http://consultantiust.herokuapp.com/consultant/signup/", this.state)
            .then(res =>{
                console.log(this.state);
              console.log(res)
              const token = "Bearer " + res.data.token;
                      localStorage.setItem('token', token); 
            })
            .catch(err=>{
                console.log(this.state);
              console.log(err)
            });
          }
        return (
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <div>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}>
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
                                <br/>
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
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="consulltant_type"><span style={{fontFamily: 'IRANSansWeb'}}>حوزه مشاوره</span></InputLabel>
                                                <Select
                                                    size="normal"
                                                    labelId="consulltant_type"
                                                    id="consulltant_type"
                                                    name="consulltant_type"
                                                    value={this.state.consulltant_type}
                                                    onChange={this.handleChange}
                                                    required
                                                    label="consulltant_type"
                                                    InputProps={{
                                                        style: {fontFamily: 'IRANSansWeb'},
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <Email/>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                >
                                                    <MenuItem value={"Lawyer"}><span style={{fontFamily: 'IRANSansWeb'}}>۱مشاور</span></MenuItem>
                                                    <MenuItem value={"Lawyer"}><span style={{fontFamily: 'IRANSansWeb'}}>۲مشاور</span></MenuItem>
                                                    <MenuItem value={"Lawyer"}><span style={{fontFamily: 'IRANSansWeb'}}>۳مشاور</span></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
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
                                                validators={['required', 'minStringLength:' + 11, 'maxStringLength:' + 11, 'matchRegexp:[0-9]*$']}
                                                errorMessages={['لطفا تلفن همراه خود را وارد کنید', 'طول شماره تلفن باید ۱۱ عدد باشد','طول شماره تلفن باید ۱۱ عدد باشد', ' برای تلفن همراه از اعداد استفاده کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                validators={[ 'required']}
                                                errorMessages={[ 'لطفا رمز عبور خود را تکرار کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <VpnKey/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <input accept=".pdf,.png,.jpg,.zip,.jpeg"
                                    style={{display : 'none'}}
                                    id='file' type="file" onChange={this.onFileChange} />
                                <div >
                                <label htmlFor='file'>
                                    <Tooltip title={<span style={{fontFamily: 'Vazir',fontSize: '12px'}}>افزودن فایل </span>}
                                    placement="left"
                                    TransitionComponent={Zoom} style={{fontFamily: 'Vazir'}} >
                                        <IconButton aria-label="upload picture" component="span">                        
                                        <FontAwesomeIcon icon={faFileImage} size="1x" style={{color: '#2ab371'}}/>                                 
                                        </IconButton>  
                                    </Tooltip>                                  
                                </label>
                            </div><br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Button onClick={handleClick} className={classes.topButton} fullWidth
                                                        variant="contained" style={{fontFamily: 'IRANSansWeb'}}>
                                                    {'ثبت نام'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Link to="/signIn" style={{color: 'white', textDecoration: 'none',}}>

                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        style={{
                                                            backgroundColor: '#0e918c',
                                                            color: 'white',
                                                            fontFamily: 'IRANSansWeb'
                                                        }}
                                                        // endIcon={<Icon>login</Icon>}
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
        )
    };
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiFormHelperText-root.Mui-error': {
            fontFamily: 'IRANSansWeb',
        },
        
    },
    root: {},
    topButton: {
        backgroundColor: '#3aadd9',
        color: 'white',
        transition: 'all 0.8s esaeIn',
        "&:hover": {
            backgroundColor: '#5073ed' ,
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
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.success.main,
        color: 'black',
        fontFamily: 'IRANSansWeb !important',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: 'black',
        font: 'IRANSansWeb',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: 'black',
        fontFamily: 'IRANSansWeb !important',
        backgroundColor: 'blue',
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: '100%',
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <SignUpConsultant classes={classes}/>
    )
}