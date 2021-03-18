import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
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
import icon, {AccountCircle, Email, PersonAdd, Visibility, VisibilityOff, VpnKey,} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import {LightenDarkenColor} from 'lighten-darken-color';
import Icon from '@material-ui/core/Icon';
import RTL from '../RTL/M_RTL';
import serverURL from '../../utils/serverURL';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            repassword: '',
            phone: '',
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

    render() {
        const classes = this.props.classes;
        var body = {
            "username": this.state.username,
            "email": this.state.email,
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "phone_number": this.state.phone,
            "password": this.state.password,
            "password_repetition": this.state.repassword
        };
        // var body = {
        //     "username": "string",
        //     "firstname": "string",
        //     "lastname": "string",
        //     "password": "string",
        //     "email": "user@example.com"
        // };
        var header = {
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                mode: 'cors',
            }
        };
        const handleClick = e => {
            //setPendign(true);
            e.preventDefault();
            axios.post( serverURL()+"user/signup",body,header)
                .then(result => {
                    console.log(result);
                    //const token = result.data.token;
                    //localStorage.setItem('token',token);

                    //window.location.href = "page";
                }).catch(error => {
                    console.log(error);
                    //alert();

                    //setPending(false);
            })
        };

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <PersonAdd/>
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb'}}>
                            ثبت نام
                        </Typography>
                        <Material_RTL>
                            <RTL>
                                <ValidatorForm className={classes.form} noValidate>
                                    <Grid container spacing={2} component="h6">
                                        <Grid item xs={6}>
                                            <TextValidator

                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstname"
                                                label={"نام"}
                                                name="firstname"
                                                autoComplete="firstname"
                                                type="string"
                                                value={this.state.firstname}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required']}
                                                errorMessages={['لطفا  نام خود را وارد کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator

                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastname"
                                                label={"نام خانوادگی"}
                                                name="lastname"
                                                autoComplete="lastname"
                                                type="string"
                                                value={this.state.lastname}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required']}
                                                errorMessages={['لطفا نام خانوادگی خود را وارد کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextValidator

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
                                                        <InputAdornment position="end">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextValidator
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
                                                        <InputAdornment position="end">
                                                            <Email/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextValidator

                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="phone"
                                                label={"شماره تلفن"}
                                                name="phone"
                                                autoComplete="phone"
                                                type="string"
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                validators={['required', 'minStringLength:' + 11, 'maxStringLength:' + 11, 'matchRegexp:[0-9]*$']}
                                                errorMessages={['لطفا تلفن همراه خود را وارد کنید', 'طول شماره تلفن باید ۱۱ عدد باشد','طول شماره تلفن باید ۱۱ عدد باشد', ' برای تلفن همراه از اعداد استفاده کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <AccountCircle/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextValidator
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
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                style={{padding: '0px', color: 'black'}}
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
                                        <Grid item xs={12}>
                                            <TextValidator
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="repassword"
                                                label="تایید رمز عبور"
                                                id="repassword"
                                                autoComplete="current-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.repassword}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'}}}
                                                validators={[ 'required']}
                                                errorMessages={[ 'لطفا رمز عبور خود را تکرار کنید']}
                                                InputProps={{
                                                    style: {fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment position="end">
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
                                                        startIcon={<Icon>login</Icon>}
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
        backgroundColor: '#EE6C4D',
        "&:hover": {
            // backgroundColor: LightenDarkenColor('#EE6C4D', -40) ,
            color: 'white'
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        backgroundColor: '#f5f5f5',
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
}));

export default () => {
    const classes = useStyles();
    return (
        <SignUp classes={classes}/>
    )
}