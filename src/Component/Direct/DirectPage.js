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

class Direct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            loading2:true,
        };
    }
    render() {
        //console.log(this.props.match.params.consultantUsername);
        //<div>hello {this.props.match.params.consultantUsername}</div>
        const classes = this.props.classes;
        console.log(this.props.isUpSm);
        return(
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <Paper>
                            <Grid container direction={this.props.isUpSm ? "row" : "column"} spacing={2} justify="space-between" style={this.props.isUpSm ? {flexWrap:"nowrap"}:{flexWrap:"wrap"}}>
                                <Grid item md={8} sm={12} xs={12} >
                                    <div>salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam salam</div>
                                </Grid>
                                {/*<Grid item md={1} style={{padding:"0px",width:"1px"}} >*/}
                                <Divider orientation={this.props.isUpSm ? "vertical" : "horizontal"} flexItem={this.props.isUpSm} style={this.props.isUpSm ? {margin:"0px 0px"} : {margin:"0px 8px"}} />
                                {/*</Grid>*/}
                                <Grid item md={4} sm={12} xs={12} >
                                    <div>chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori chetori {this.props.isUpSm}</div>
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
    return(
        <Direct classes={classes} p={p} match={props.match} isUpSm={isUpSm}/>
    )
}
export default withRouter(Auxiliary);