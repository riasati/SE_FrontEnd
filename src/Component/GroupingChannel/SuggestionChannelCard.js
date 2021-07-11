import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
class SuggestionChannelCard extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid className={classes.div1}>
                <a href={"/Channel/"+ this.props.channelId} style={{color: '#3f407d', textDecoration: 'none',}}>
                    {this.props.avatar !== null ? <img src={this.props.avatar} className={classes.img1} style={{}}/>
                    :
                        <img src={this.props.imagesrc} className={classes.img1} style={{}}/>
                    }
                <div><div style={{fontSize: '20px',marginTop: '5px'}}>{this.props.channelName}</div></div><br/>
                <div>{this.props.consultantName}</div>
                </a>
            </Grid>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global': {
        
    },
    img1:{
        width:'100px',
        height:'100px',
        borderRadius: '100%',
        marginTop:'10%',
        border: '1px solid #27bda0',
        transition:'all ease 0.5s',
        "&:hover": {
            filter: 'drop-shadow(0px 0px 10px #27bda0)',
        },
    },
    div1:{
        width: '100%',
        height: '230px',
        borderRadius:' 7px',
        marginLeft: '15px',
        marginTop: '5px',
        marginBottom: '5px',
        color: '#3f407d',
        border: '1px solid #27bda0',
        backgroundColor:'#fff',
        transition:'all ease 0.5s',
        "&:hover": {
            // boxShadow: '1px 1px 10px 0px #2ab371',
            backgroundColor: '#f3f7fa',
        },
    }
  }));

export default (props) => {
    const classes = useStyles();
    const imagesrc = props.image;
    const channelName = props.ChannelName;
    const consultantName = props.ConsultantName;
    const invite_link = props.invite_link;
    const channelId = props.channelId;
    const avatar = props.avatar;
    return (
        <SuggestionChannelCard classes={classes} imagesrc={imagesrc} channelName={channelName} consultantName={consultantName} invite_link={invite_link} avatar={avatar} channelId={channelId}/>
    )
}