import React, {Component} from "react";
import axios from "axios";
import serverURL from "../../../RequestConfig/serverURL";
import TokenConfig from "../../../RequestConfig/TokenConfig";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Material_RTL from "../../RTL/Material_RTL";
import  {AccountCircle, Email, Visibility, VisibilityOff, VpnKey, PhoneAndroid,Person,PermIdentity} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import IconButton from "@material-ui/core/IconButton";
import RTL from '../../RTL/M_RTL';
import LoadingButton from '@material-ui/lab/LoadingButton';
import Paper from "@material-ui/core/Paper";
class UserProfile extends Component{
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            phoneNumber: '',
            email: '',
            password: '',
            avatar: '',
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
    componentWillMount() {
        axios.get(serverURL() + "profile/", TokenConfig())
            .then(res => {
                console.log(res)
                this.setState({firstName: res.data.first_name})
                this.setState({lastName: res.data.last_name})
                this.setState({userName: res.data.username})
                this.setState({phoneNumber: res.data.phone_number})
                this.setState({email: res.data.email})
                this.setState({avatar: res.data.avatar})
            })
            .catch(err => {
                console.log(err)
            })

    }
    render(){
        const classes = this.props.classes;
        return(
            <div>
                <Material_RTL>
                    <RTL>
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Paper>
                                        <ValidatorForm className={classes.form} noValidate>
                                            <Grid container spacing={2} component="h6">
                                                <Grid item xs={12} sm={3}>
                                                    <TextValidator
                                                        size="normal"
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="firstName"
                                                        label={"نام"}
                                                        name="firstName"
                                                        autoComplete="firstName"
                                                        type="string"
                                                        value={this.state.firstName}
                                                        onChange={this.handleChange}
                                                        InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                        validators={['required']}
                                                        errorMessages={['لطفا  نام خود را وارد کنید']}
                                                        InputProps={{
                                                            style: {fontFamily: 'IRANSansWeb'},
                                                            endAdornment: (
                                                                <InputAdornment className={classes.InputAdornment}
                                                                                position="end">
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
                                                        id="lastName"
                                                        label={"نام خانوادگی"}
                                                        name="lastName"
                                                        autoComplete="lastName"
                                                        type="string"
                                                        value={this.state.lastName}
                                                        onChange={this.handleChange}
                                                        InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                        validators={['required']}
                                                        errorMessages={['لطفا نام خانوادگی خود را وارد کنید']}
                                                        InputProps={{
                                                            style: {fontFamily: 'IRANSansWeb'},
                                                            endAdornment: (
                                                                <InputAdornment className={classes.InputAdornment}
                                                                                position="end">
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
                                                        id="userName"
                                                        label={"نام کاربری"}
                                                        name="userName"
                                                        autoComplete="userName"
                                                        type="string"
                                                        value={this.state.userName}
                                                        onChange={this.handleChange}
                                                        InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                        validators={['required', 'minStringLength:' + 6, 'matchRegexp:^[a-zA-Z0-9_]*$']}
                                                        errorMessages={['لطفا یک نام کاربری مناسب وارد کنید', 'طول نام کاربری باید بیشتر از ۶ باشد', 'a-z 0-9_ لطفا از حروف مجاز استفاده کنید']}
                                                        InputProps={{
                                                            style: {fontFamily: 'IRANSansWeb'},
                                                            endAdornment: (
                                                                <InputAdornment className={classes.InputAdornment}
                                                                                position="end">
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
                                                                <InputAdornment className={classes.InputAdornment}
                                                                                position="end">
                                                                    <Email/>
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
                                                        id="phoneNumber"
                                                        label={"شماره تلفن"}
                                                        name="phoneNumber"
                                                        autoComplete="phoneNumber"
                                                        type="string"
                                                        value={this.state.phoneNumber}
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
                                            </Grid>
                                        </ValidatorForm>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </RTL>
                </Material_RTL>
            </div>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        fontFamily: 'IRANSansWeb',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'IRANSansWeb',
    },
    fixedHeight: {
        height: '300px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    title:{
        textAlign: 'left',
        color: '#3f407d',
    },
    CircularProgress:{
        color: '#0e918c !important',
        width: '100px !important',
        height: '100px !important',
    },
}));
export default (props) => {
    const classes = useStyles();
    const firstName = React.useState(props.firstName)
    const lastName = React.useState(props.lastName);
    const userName = React.useState(props.userName);
    const phoneNumber = React.useState(props.phoneNumber);
    const email = React.useState(props.email);
    const password = React.useState(props.password);
    const certificate = React.useState(props.certificate);
    return (
        <UserProfile classes={classes} firstName={firstName} lastName={lastName} userName={userName}
                           phoneNumber={phoneNumber} email={email} password={password} certificate={certificate}/>
    )
}