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
        };
        //this.initialization();
    }
    VideoData = {};
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
                        <iframe src={this.state.connectingUrl} style={{border:"none"}} height="500" width="100%" allow="camera; microphone; fullscreen; speaker; display-capture" />
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