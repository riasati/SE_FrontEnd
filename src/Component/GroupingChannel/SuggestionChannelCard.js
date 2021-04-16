import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
class SuggestionChannelCard extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid className={classes.div1}>
                <a href={"/Channel/"+ this.props.invite_link} style={{color: '#3f407d', textDecoration: 'none',}}>
                    <img src={this.props.imagesrc} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
                <div><h3>{this.props.channelName}</h3></div>
                <div>{this.props.consultantName}</div>
                </a>
            </Grid>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global': {
        
    },
    div1:{
        width: '100%',
        height: '230px',
        border: '1px solid #ccc',
        borderRadius:' 5px 5px 5px 5px',
        marginLeft: '15px',
        marginLeft: '15px',
        marginTop: '5px',
        marginBottom: '5px',
        color: '#3f407d',
    }
  }));

export default (props) => {
    const classes = useStyles();
    const imagesrc = props.image;
    const channelName = props.ChannelName;
    const consultantName = props.ConsultantName;
    const invite_link = props.invite_link;
    return (
        <SuggestionChannelCard classes={classes} imagesrc={imagesrc} channelName={channelName} consultantName={consultantName} invite_link={invite_link}/>
    )
}