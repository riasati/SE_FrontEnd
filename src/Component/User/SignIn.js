import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Material_RTL from "../RTL/Material_RTL";
// import axios from 'axios';
// import { LightenDarkenColor } from 'lighten-darken-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle, Visibility, VisibilityOff, login } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// import LoadingButton from '@material-ui/lab/LoadingButton';
import RTL from '../RTL/M_RTL';
class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            username: '',
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
        }
            return(
            <Container component="main" maxWidth="xs"
                       className={classes.container}>
                <CssBaseline />
                <div className={classes.foo}>
                    <div className={classes.paper}>
                        {/*<Avatar className={classes.avatar}>*/}
                        {/*    <LockOutlinedIcon />*/}
                        {/*</Avatar>*/}
                        <Typography component="h1" variant="h5" style={{fontFamily: 'IRANSansWeb'}}>
                            {'ورود'}
                        </Typography>
                        <Material_RTL>
                            <RTL>

                                <ValidatorForm className={classes.form} noValidate style={{fontFamily: 'IRANSansWeb'}}>
                                    <Grid container spacing={2} component="h6">
                                        <Grid item xs={12} style={{fontFamily: 'IRANSansWeb'}}>
                                            <TextValidator
                                                style={{fontFamily: 'IRANSansWeb'}}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="username"
                                                label="نام کاربری"
                                                name="username"
                                                autoComplete="username"
                                                autoFocus
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                InputLabelProps={{style:{fontFamily: 'IRANSansWeb'}}}
                                                validators={['required', 'minStringLength:' + 6, 'matchRegexp:^[a-zA-Z0-9_]*$']}
                                                errorMessages={['لطفا نام کاربری خود را وارد کنید', 'طول نام کاربری باید بیشتر از ۶ باشد', 'a-z 0-9_ لطفا از حروف مجاز استفاده کنید']}
                                                InputProps={{
                                                    style:{fontFamily: 'IRANSansWeb'},
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
                                                style={{fontFamily: 'IRANSansWeb'}}
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
                                                    style:{fontFamily: 'IRANSansWeb'},
                                                    endAdornment: (
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                                style={{ padding: '0px',color:'black' }}
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
                                            <Grid classes={classes.root} >
                                                <Button onClick={handleClick }  className={classes.topButton}  variant="contained"  style={{fontFamily: 'IRANSansWeb'}} fullWidth>
                                                    ورود
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <br/>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid>
                                                <Link to="/signUp" style={{color: 'white',textDecoration : 'none',fontFamily: 'IRANSansWeb'}}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth
                                                        style={{backgroundColor : '#0e918c',fontFamily: 'IRANSansWeb'}}
                                                        startIcon={<Icon>person_add</Icon>}
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
}));
export default () =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <SignIn classes={classes} p={p}/>
    )
}