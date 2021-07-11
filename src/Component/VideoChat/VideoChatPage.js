import React, { Component } from "react";
import {makeStyles, useTheme} from "@material-ui/core";
import LoadingOverlay from 'react-loading-overlay';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../Theme";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { withRouter } from "react-router";
class VideoChat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            connectingUrl: null,
            catchingError: false,
        };
        //this.initialization();
    }
    VideoData = {};
    errorText = null;
    componentDidMount() {
        axios.post(serverURL() + "video-chat/consultant-time/start/" + this.props.match.params.consultantTimeId + "/",{},TokenConfig())
            .then(result => {
                console.log(result);
                this.VideoData = result.data;
                this.state.connectingUrl = this.VideoData?.hostRoomUrl;
                if (this.state.connectingUrl === null){
                    this.state.connectingUrl = this.VideoData?.roomUrl;
                }
                this.setState({});

            })
            .catch(error => {
                console.log(error);
                this.state.catchingError = true;
                //console.log(error.message);
                this.errorText = error?.response?.data?.error;
                this.setState({});
            })
    }

    render() {
        console.log(this.state.connectingUrl);
        return (
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        {/*<iframe src="https://www.farsnews.ir/" style={{border:"none"}} height="500" width="100%" title="Iframe Example" />*/}
                        {this.state.catchingError === true ?
                            <div
                                style={{
                                    //      border: 'dashed grey 4px',
                                    backgroundColor: 'rgba(255,255,255,.8)',
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 9999
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 0,
                                        left: 0,
                                        textAlign: 'center',
                                        color: 'grey',
                                        fontSize: 36
                                    }}
                                >
                                    <div style={{fontFamily:"IRANSansWeb"}}>{this.errorText}</div>
                                </div>
                            </div>
                            : <iframe src={this.state.connectingUrl} style={{border:"none"}} height="500" width="100%" allow="camera; microphone; fullscreen; speaker; display-capture" />}

                    </Theme>
                </Container>
            </LoadingOverlay>
        )
    }
}
function Auxiliary(props){
   // const classes = useStyles();
    // classes={classes}
    const p = React.useState(false);
    return(
        <VideoChat p={p} match={props.match}/>
    )
}
export default withRouter(Auxiliary);