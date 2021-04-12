import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
class SuggestionChannelCard extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid className={classes.div1}>
                <img src={this.props.imagesrc} style={{width:'100px',height:'100px',borderRadius: '100%',marginTop:'10%'}}/>
                {/* <img src={"/image/lawyergroup.png"} /> */}
                
                <div><h3>{this.props.channelName}</h3></div>
                <div>{this.props.consultantName}</div>
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
        // boxShadow: '1px 1px 10px 0px',
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
    return (
        <SuggestionChannelCard classes={classes} imagesrc={imagesrc} channelName={channelName} consultantName={consultantName}/>
    )
}