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

class Profile1 extends Component {
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
        return (
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Material_RTL>
                    <RTL>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                {/*1*/}
                                <Grid item xs={12} className={classes.info}>
                                    <div>
                                        <span><img src={this.state.avatar} className={classes.avatar}/></span>
                                        <div>
                                            <span>{this.state.firstName}</span>&nbsp;
                                            <span>{this.state.lastName}</span>
                                        </div>
                                    </div>
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
}))
export default () => {
    const classes = useStyles();
    return (
        <Profile1 classes={classes}/>
    )
}