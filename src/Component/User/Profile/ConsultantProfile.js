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
import {
    AccountCircle,
    Email,
    Visibility,
    VisibilityOff,
    VpnKey,
    PhoneAndroid,
    Person,
    PermIdentity
} from "@material-ui/icons"
import InputAdornment from '@material-ui/core/InputAdornment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileImage, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import IconButton from "@material-ui/core/IconButton";
import RTL from '../../RTL/M_RTL';
import LoadingButton from '@material-ui/lab/LoadingButton';
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class ConsultantProfile extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            phoneNumber: '',
            email: '',
            password: '',
            certificate: '',
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
                this.setState({firstName: res.data.first_name})
                this.setState({lastName: res.data.last_name})
                this.setState({userName: res.data.username})
                this.setState({phoneNumber: res.data.phone_number})
                this.setState({email: res.data.email})
                this.setState({certificate: res.data.certificate})
                this.setState({avatar: res.data.avatar})
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const classes = this.props.classes;
        const [pending, setPending] = this.props.pending;
        const [file, setFile] = this.props.isFileLoaded;
        const [ image , setImage] = this.props.image;
        const onFileChange = event => {
            setFile(true);
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                setImage(event.target.result);
                setFile(true);
            }
            this.setState({avatar: event.target.files[0]});
            console.log(event.target.files)
            console.log(event.target.files[0])
            setFile(true);
        };
        const handleEliminateFileClick = e => {
            this.setState({avatar: null});
            setFile(false);
        };
        const handleClick = e => {

        }
        return (


            <Container component="main" maxWidth="lg" className={classes.container}>
                <CssBaseline/>
                <div>
                    <div className={classes.paper}>
                    <Material_RTL>
                        <RTL>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Grid>
                                        <Paper style={{backgroundColor: '#f3f7fa',}}>
                                            <Grid>
                                                {file ? (<div><img src={image} alt="avatar" title="avatar"
                                                                   className={classes.avatar}/></div>):
                                                (this.state.avatar !== null ?
                                                    (
                                                        <div>
                                                            <img src={this.state.avatar}
                                                                 className={classes.avatar} alt="avatar" title="avatar"/>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <img src="https://www.vecteezy.com/free-vector/user"
                                                                 alt="avatar"  title="avatar"/>
                                                        </div>
                                                    ))
                                                    }
                                            </Grid>
                                            <span style={{color: '#3f407d'}}>افزودن عکس</span>
                                            <br/>
                                            <input
                                                style={{display: 'none'}}
                                                id='file' type="file" onChange={onFileChange}/>
                                            <div>
                                                <label htmlFor='file'>
                                                    <Tooltip
                                                        title={<span
                                                            style={{fontFamily: 'IRANSansWeb', fontSize: '12px'}}>افزودن عکس </span>}
                                                        placement="left"
                                                        TransitionComponent={Zoom}
                                                        style={{fontFamily: 'IRANSansWeb'}}>
                                                        <IconButton aria-label="upload picture" component="span">
                                                            <i className="fas fa-camera-alt" style={{color: '#2ab371'}}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </label>
                                                {file && typeof (this.state.avatar.name) !== "undefined" ?
                                                    (
                                                        <Tooltip title={<span style={{
                                                            fontFamily: 'IRANSansWeb',
                                                            fontSize: '12px'
                                                        }}>حذف عکس</span>}
                                                                 placement="left"
                                                                 TransitionComponent={Zoom}
                                                                 style={{fontFamily: 'IRANSansWeb'}}>
                                                            <Button onClick={handleEliminateFileClick}
                                                                    style={{
                                                                        color: '#3f407d',
                                                                        fontFamily: 'IRANSansWeb'
                                                                    }}
                                                                    varient={"outlined"}>
                                                                <span>عکس</span>
                                                                <span>&nbsp;{this.state.avatar.name}&nbsp;</span>
                                                                <span>آماده ارسال است</span>
                                                            </Button>
                                                        </Tooltip>
                                                    )
                                                    : null}
                                                <br/>
                                            </div>
                                            <div>
                                                <ValidatorForm noValidate style={{padding: '4%'}}>
                                                    <Grid container spacing={3} component="h6">
                                                        <Grid item xs={12} sm={6}>
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
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
                                                                            position="end">
                                                                            <Person/>
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
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
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
                                                                id="phoneNumber"
                                                                label={"شماره تلفن"}
                                                                name="phoneNumber"
                                                                autoComplete="phoneNumber"
                                                                type="string"
                                                                value={this.state.phoneNumber}
                                                                onChange={this.handleChange}
                                                                InputLabelProps={{style: {fontFamily: 'IRANSansWeb'},}}
                                                                validators={['required', 'minStringLength:' + 11, 'maxStringLength:' + 11, 'matchRegexp:09[0-9]*$']}
                                                                errorMessages={['لطفا تلفن همراه خود را وارد کنید', 'طول شماره تلفن باید ۱۱ عدد باشد', 'طول شماره تلفن باید ۱۱ عدد باشد', ' شماره تلفن همراه باید عدد باشد و با ۰۹ شروع شود']}
                                                                InputProps={{
                                                                    style: {fontFamily: 'IRANSansWeb'},
                                                                    endAdornment: (
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
                                                                            position="end">
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
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
                                                                            position="end">
                                                                            <AccountCircle/>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>

                                                        </Grid>
                                                        <Grid item xs={12} sm={8}>
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
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
                                                                            position="end">
                                                                            <Email/>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>

                                                        </Grid>
                                                        <Grid item xs={12} sm={3}>

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
                                                                        <InputAdornment
                                                                            className={classes.InputAdornment}
                                                                            position="end">
                                                                            <IconButton
                                                                                style={{
                                                                                    padding: '0px',
                                                                                    color: '#2ab371'
                                                                                }}
                                                                                onClick={this.handleClickShowPassword}
                                                                                onMouseDown={this.handleMouseDownPassword}
                                                                            >
                                                                                {this.state.showPassword ?
                                                                                    <Visibility/> :
                                                                                    <VisibilityOff/>}
                                                                            </IconButton>
                                                                        </InputAdornment>)
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={3}>

                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <LoadingButton onClick={handleClick}
                                                                           pendingPosition="center"
                                                                           className={classes.topButton}
                                                                           pending={pending}
                                                                           startIcon={<i
                                                                               className="fas fa-edit"></i>}
                                                                           fullWidth>
                                                                {'اعمال تغییرات'}
                                                            </LoadingButton>
                                                        </Grid>
                                                    </Grid>
                                                </ValidatorForm>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Paper style={{backgroundColor: '#f3f7fa',}}>
                                        request
                                    </Paper>
                                </Grid>
                            </Grid>
                        </RTL>
                    </Material_RTL>
                    </div>
                </div>
            </Container>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    '@global': {},
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        fontFamily: 'IRANSansWeb',
        backgroundColor: '#fff',
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        backgroundColor: '#fff',
        fontFamily: 'IRANSansWeb !important',
        padding: '20px',
        borderRadius: '10px',
        opacity: '95%',
    },
    fixedHeight: {
        height: '300px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    title: {
        textAlign: 'left',
        color: '#3f407d',
    },
    InputAdornment: {
        color: "#2ab371",
    },
    CircularProgress: {
        color: '#0e918c !important',
        width: '100px !important',
        height: '100px !important',
    },
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '100%',
        border: '3px solid #2ab371',
    },
    topButton: {
        fontFamily: 'IRANSansWeb',
        backgroundColor: '#5073ed',
        color: 'white',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: '#3aadd9',
            color: 'white'
        },
    },
}));
export default (props) => {
    const classes = useStyles();
    const pending = React.useState(false);
    const isFileLoaded = React.useState(false);
    const image = React.useState(null);
    return (
        <ConsultantProfile classes={classes} pending={pending} isFileLoaded={isFileLoaded} image={image}/>
    )
}