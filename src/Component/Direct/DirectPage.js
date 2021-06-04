import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import {withRouter} from "react-router";
import LoadingOverlay from 'react-loading-overlay';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../Theme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import Divider from "@material-ui/core/Divider";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DirectMessages from "./DirectMessages";
import DirectList from "./DirectList";
import {client, w3cwebsocket as WebSocket} from "websocket";

class Direct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            loading2:true,
        };
    }
    componentWillMount(){
        const [directList,setDirectList] = this.props.directList;
        const [pending,setPending] = this.props.pending;
        var res = []
        var ll = []
        axios.get(serverURL() + "chat/direct/contact/",TokenConfig())
        .then(result =>{
           // console.log(result)
            res.push(...result.data);
            ll = res.map((q) => q);
           // console.log(ll)
            setDirectList([...ll]);
           // console.log(directList)
            setPending(false)
        })
        .catch(err => {
            console.log(err);
        })
    }
    // getSocketNameFromUsernames = (username1,username2) => {
    //     const array = [username1,username2].sort((a, b) => a.localeCompare(b));
    //     const str = array[0] + "-" + array[1];
    //     return str;
    // }
    //username = localStorage.getItem('username');
    // handleConnectWebSocket(){
    //
    //     const roomName = this.getSocketNameFromUsernames(this.username,"hasan");
    //     var ws = new WebSocket("ws://iust-se-consultant.herokuapp.com/ws/chat/"+roomName+'/');
    //     let that = this;
    //     var connectInterval;
    //     ws.onopen = () => {
    //         console.log("connected websocket main component");
    //
    //         this.setState({ ws: ws });
    //
    //         that.timeout = 250; // reset timer to 250 on open of websocket connection
    //         clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    //     };
    //     ws.onclose = e => {
    //         console.log(
    //             `Socket is closed. Reconnect will be attempted in ${Math.min(
    //                 10000 / 1000,
    //                 (that.timeout + that.timeout) / 1000
    //             )} second.`,
    //             e.reason
    //         );
    //
    //         that.timeout = that.timeout + that.timeout;
    //         connectInterval = setTimeout(this.check, Math.min(10000, that.timeout));
    //     };
    //
    //     // websocket onerror event listener
    //     ws.onerror = err => {
    //         console.error(
    //             "Socket encountered error: ",
    //             err.message,
    //             "Closing socket"
    //         );
    //
    //         ws.close();
    //     };
    // }
    // handleSendMessage(message)
    // {
    //     try {
    //         this.ws.send(JSON.stringify({
    //             idChat:this.state.idChat,
    //             userName:this.state.userName,
    //             type:"message",
    //             msg : message
    //         })) //send data to the server
    //     } catch (error) {
    //         console.log(error) // catch error
    //     }
    //
    // }
    render() {
        const [directList,setDirectList] = this.props.directList;
        const [pending,setPending] = this.props.pending;
        //console.log(this.props.match.params.consultantUsername);
        //<div>hello {this.props.match.params.consultantUsername}</div>
        const classes = this.props.classes;
        //console.log(this.props.isUpSm);
        return(
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <Paper>
                            <Grid container direction={this.props.isUpSm ? "row" : "column"} spacing={2} justify="space-between" style={this.props.isUpSm ? {flexWrap:"nowrap"}:{flexWrap:"wrap"}}>
                                <Grid item md={3} sm={12} xs={12} style={{backgroundColor: '#f3f7fa'}}>
                                    {/*<div>salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam</div>*/}
                                    {/*<div>chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori {this.props.isUpSm}</div>*/}
                                    <Grid container spacing={3}>
                                        {directList.length !== 0 ?
                                            directList.map((q)=>{
                                                console.log(q)
                                                return(
                                                    <DirectList last_name={q.last_name} first_name={q.first_name}  userID={q.id} avatar={q.avatar} username={q.username} pending={pending} />)
                                            }): null
                                        }
                                    </Grid>
                                </Grid>
                                {/*<Grid item md={1} style={{padding:"0px",width:"1px"}} >*/}
                                <Divider orientation={this.props.isUpSm ? "vertical" : "horizontal"} flexItem={this.props.isUpSm} style={this.props.isUpSm ? {margin:"0px 0px"} : {margin:"0px 8px"}} />
                                {/*</Grid>*/}
                                {/*<Grid item md={4} sm={12} xs={12} style={{backgroundColor: '#f3f7fa'}}>*/}
                                    {/**/}
                                {/*</Grid>*/}
                                <Grid item md={9} sm={12} xs={12} >
                                    <DirectMessages AddressUsername={this.props.match.params.AddressUsername} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Theme>
                </Container>
            </LoadingOverlay>

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
function Auxiliary(props){
    const classes = useStyles();
    const p = React.useState(false);
    const theme = useTheme();
    const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const directList = React.useState([]);
    const pending = React.useState(true)
    return(
        <Direct classes={classes} p={p} match={props.match} isUpSm={isUpSm} directList={directList} pending={pending}/>
    )
}
export default withRouter(Auxiliary);