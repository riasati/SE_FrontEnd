import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Material_RTL from "../RTL/Material_RTL";
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle, Visibility, VisibilityOff, Lock } from "@material-ui/icons";
import { faUserPlus , } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from "@material-ui/core/IconButton";
import RTL from '../RTL/M_RTL';
import serverURL from "../../RequestConfig/serverURL";
class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            email_username: '',
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
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
    render(){
        const classes = this.props.classes;
        const [pending, setPending] = this.props.p;
        const handleClick = e => {
            e.preventDefault();
            axios.post(serverURL()+"user/login/", this.state)
                .then(result => {
                    console.log(result);                                                           
                    console.log(this.state);                                                           
                    const token = "Bearer " + result.data.token;
                    localStorage.setItem('token', token);
                }).catch(error => {
                    console.log(error);
                    alert(" خطا! نام کاربری یا رمز عبور شما اشتباه می باشد.لطفا تمام موارد * دار را پر کنید.");
                })
        }
            return(
            <Container component="main" maxWidth="xs"> 
                <div>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb',}}>
                            {'ورود'}
                            <br/>
                            <span ><Lock style={{marginTop: '10px'}} fontSize="large"/></span>
                        </Typography>
                        <Material_RTL>
                            <RTL>
                                <ValidatorForm noValidate>
                                    <Grid container spacing={2} component="h6">
                                        <Grid item xs={12}>
                                            <TextValidator
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email_username"
                                                label="نام کاربری یا ایمیل"
                                                name="email_username"
                                                autoComplete="email_username"
                                                value={this.state.email_username}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                validators={['required']}
                                                errorMessages={['لطفا نام کاربری یا ایمیل خود را وارد کنید']}
                                                InputProps={{
                                                    style:{fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextValidator
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="رمز عبور"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                id="password"
                                                autoComplete="current-password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                validators={['required', 'minStringLength:' + 6]}
                                                errorMessages={['لطفا رمز عبور خود را وارد کنید', 'رمز عبور باید بیشتر از ۶ حرف باشد']}
                                                errorStyle={{style:{color: 'red',fontFamily: 'IRANSansWeb'}}}
                                                errorText={{style:{color: 'red',fontFamily: 'IRANSansWeb'}}}
                                                InputProps={{
                                                    style:{fontFamily: 'IRANSansWeb',color:'#2ab371'},
                                                    endAdornment: (
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                                style={{ padding: '0px',color:'#2ab371' }}
                                                                aria-label="toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                onMouseDown={this.handleMouseDownPassword}
                                                            >
                                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>)
                                                }}
                                            /></Grid>
                                    </Grid>
                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Button onClick={handleClick }  className={classes.topButton}  variant="contained" fullWidth>
                                                    ورود
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Link to="/SignUpUser" style={{color: 'white',textDecoration : 'none',fontFamily: 'IRANSansWeb'}}>
                                                    <Button
                                                        className={classes.bottomButton}
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth
                                                        startIcon={<FontAwesomeIcon icon={faUserPlus} size="2x" style={{color: 'white'}}/>}
                                                    >
                                                        {"ثبت نام"}
                                                    </Button></Link>
                                            </Grid></Grid>
                                    </Grid>
                                </ValidatorForm>
                            </RTL>
                        </Material_RTL>
                    </div>
                </div>
            </Container>
        )
    }

}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
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
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <SignIn classes={classes} p={p}/>
    )
}