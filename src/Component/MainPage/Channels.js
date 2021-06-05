import React, { Component } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Material_RTL from "../RTL/Material_RTL";
import RTL from '../RTL/M_RTL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faChevronRight, faUser, faSignOutAlt, faTimesCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChannelCard from '../GroupingChannel/ChannelCard';
class Channels extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {
        const [pending, setPending] = this.props.pending;
        const [channelList, setChannelList] = this.props.channelList;
        var res = [];
        axios.get(serverURL() + "user/channels/", TokenConfig())
            .then(result => {
                console.log(result)
                res.push(...result.data);
                var ll = res.map((q) => q);
                setChannelList([...ll])
                console.log(channelList);
                setPending(false)
            })
            .catch(err => {
                console.log(err)
                setPending(false)
            })
    }
    render() {
        const [pending, setPending] = this.props.pending;
        const classes = this.props.classes;
        const [channelList, setChannelList] = this.props.channelList;
        return (
            <div>
                <Material_RTL>
                    <RTL>
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Paper>
                                        {pending ? <CircularProgress className={classes.CircularProgress} />
                                            :
                                            <Grid container spacing={3} className={classes.container}>
                                                {channelList.length !== 0 ? channelList.map((data) => {
                                                    console.log(data)
                                                    return (
                                                        <ChannelCard name={data.name} consultant_full_name={data.consultant_full_name} invite_link={data.invite_link} avatar={data.avatar} channelID={data.id} />
                                                    )
                                                }) : null}
                                            </Grid>
                                        }
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
    CircularProgress: {
        color: '#0e918c',
        width: '100px  !important',
        height: '100px !important',
    },
    container: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        fontFamily: 'IRANSansWeb',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
export default () => {
    const pending = React.useState(true);
    const channelList = React.useState([]);
    const classes = useStyles();
    return (
        <Channels pending={pending} classes={classes} channelList={channelList} />
    )
}