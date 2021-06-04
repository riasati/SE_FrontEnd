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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import 'antd/dist/antd.css';
import { Skeleton } from 'antd';
import { ContactsOutlined } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            console.log(result)
            res.push(...result.data);
            ll = res.map((q) => q);
            console.log(ll)
            setDirectList([...ll]);
            console.log(directList)
            setPending(false)
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        const [directList,setDirectList] = this.props.directList;
        const [pending,setPending] = this.props.pending;
        //console.log(this.props.match.params.consultantUsername);
        //<div>hello {this.props.match.params.consultantUsername}</div>
        const classes = this.props.classes;
        const rl =[0,1,2,3,4,5,6,7,8,9];
        const hc = q =>{
            // alert(q)
        }
        //console.log(this.props.isUpSm);
        return(
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <Paper>
                            <Grid container direction={this.props.isUpSm ? "row" : "column"} spacing={2} justify="space-between" style={this.props.isUpSm ? {flexWrap:"nowrap"}:{flexWrap:"wrap"}}>
                            <Grid item md={4} sm={12} xs={12} style={{backgroundColor: '#f3f7fa'}}>
                                    {pending ? 
                                    rl.map((i)=>{ 
                                        return( 
                                        <Card sx={{ maxWidth: 345, m: 2 }} style={{margin: '10px 0',backgroundColor: '#f3f7fa'}}>
                                        <CardHeader
                                        classes={{backgroundColor: 'red'}}
                                        avatar={
                                            pending ? (
                                                <Skeleton.Avatar  active shape={'circle'} style={{ width: '50px',height: '50px' }}/>
                                            ) : null
                                        }
                                        title={
                                            pending ? (
                                                <div style={{width: '100%',display: 'grid',justifyContent: 'right',margin : '5px 0'}}><Skeleton.Input sx={{backgroundColor: 'red'}} style={{ width: '80px',height: '20px',borderRadius: '5px', }} active /></div>
                                            ) : null
                                      }
                                      subheader={
                                        pending ? (
                                            <div style={{width: '100%',display: 'grid',justifyContent: 'right'}}><Skeleton.Input style={{ width: '160px',height: '20px',borderRadius: '5px', }} active /></div>
                                        ) : null
                                      }
                                    />
                                  </Card>)})
                                :
                                    <Grid container spacing={3}>
                                        
                                        {directList.length !== 0 ? 
                                            directList.map((q)=>{
                                                console.log(q)
                                                return(
                                                    <Grid item xs={12} md={12} lg={12} className={classes.container}>
                                                        <DirectList last_name={q.last_name} first_name={q.first_name}  userID={q.id} avatar={q.avatar} username={q.username} pending={pending} onClick={hc(q.username)}/>
                                                    </Grid>
                                                )
                                            }): null
                                         }
                                        </Grid>
                                }
                                    {/* display: 'grid',justifyContent: 'end',alignItems: 'center', height: '20vh',padding: '0', */}
                                
                                
                                </Grid>
                                <Divider orientation={this.props.isUpSm ? "vertical" : "horizontal"} flexItem={this.props.isUpSm} style={this.props.isUpSm ? {margin:"0px 0px"} : {margin:"0px 8px"}} />
                                {/*</Grid>*/}
                                
                                <Grid item md={8} sm={12} xs={12} >
                                    {directList.length !== 0 ? 
                                            (directList.map((q)=>{
                                                <Router>
                                                <Switch>
                                                    <Route path="/Direct/:AddressUsername">
                                                        <DirectMessages AddressUsername={this.props.match.params.AddressUsername} />
                                                    </Route>
                                                </Switch>
                                                </Router>
                                            })
                                            ):null}
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