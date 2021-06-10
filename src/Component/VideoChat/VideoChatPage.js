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
class VideoChat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
        };
    }
    render() {
        return (
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        {/*<iframe src="https://www.farsnews.ir/" style={{border:"none"}} height="500" width="100%" title="Iframe Example" />*/}
                    </Theme>
                </Container>
            </LoadingOverlay>
        )
    }
}
export default (props) => {
   // const classes = useStyles();
    const p = React.useState(false);
    // const theme = useTheme();
    // classes={classes}
    return(
        <VideoChat p={p}/>
    )
}