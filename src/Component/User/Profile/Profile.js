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
import {withRouter} from 'react-router';
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

class Profile extends Component {
    constructor(props) {
        super(props);
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

    componentWillMount() {
        axios.get(serverURL() + "profile/" + this.props.match.params.username + "/", TokenConfig())
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
        return (
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Material_RTL>
                    <RTL>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                {/*1*/}
                                <Grid item xs={12} className={classes.info}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                            <img src={this.state.avatar} className={classes.avatar}/>
                                        </Grid>
                                        <Grid item xs={12} md={3} lg={3} className={classes.centerItem}>
                                            <div>
                                                <span>{this.state.firstName}</span>&nbsp;
                                                <span>{this.state.lastName}</span><br/>
                                                <span>متخصص{}</span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={0} md={5} lg={5} className={classes.centerItem}>
                                            {/*    empty grid*/}
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} className={classes.centerItem}>
                                            <div>
                                                <span>
                                                    <i class="fas fa-star" style={{color: '#fff'}}></i>
                                                    {'۹۹٪ رضایت از ۵۰ نظر'}
                                                </span><br/>
                                                <span>۱۳ سال تجربه کار</span></div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/*    2*/}
                                <Grid item xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} lg={6} >
                                            <Grid>
                                                {'مشاوره آنلاین متنی'}
                                            </Grid>
                                            <hr/>
                                            <Grid>
                                                {'قابلیت ارسال صدا، تصویر و فایل برای پزشک'}
                                            </Grid>
                                            <Grid>
                                                <Button style={{backgroundColor: '#27bda0'}}>{'ارسال پیام به مشاور'}</Button>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} lg={6} >
                                            <Grid>
                                                {'کانال مشاور'}
                                            </Grid>
                                            <hr/>
                                            <Grid>
                                                {'قابلیت ارسال صدا، تصویر و فایل برای پزشک'}
                                            </Grid>
                                            <Grid>
                                                <Button style={{backgroundColor: '#27bda0'}}>{'رفتن به کانال مشاور'}</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </RTL>
                </Material_RTL>
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
    info: {
        backgroundColor: '#3f407d',
        color: '#fff',
        textAlign: 'left',
        borderRadius: '10px',
        padding: '1%',
    },
    avatar: {
        width: '8.5rem',
        height: '8.5rem',
        borderRadius: '100%',
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
    },
}))

function Auxiliary(props) {
    const classes = useStyles();
    return (
        <Profile classes={classes} match={props.match}/>
    )
}

export default withRouter(Auxiliary);