import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

class ChannelCard extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const classes = this.props.classes;
         const url = "/Channel/" + this.props.id;
        //const url = "/Channel/" + "43";

        return(
            <ListItem button divider dense href={url} component={"a"}>
                <ListItemAvatar>
                    {this.props.imageSource !== null ?
                        (
                            <Avatar alt={this.props.name} src={this.props.imageSource} className={classes.channelsAvatar}/>
                        ) : (

                            <Avatar {...stringAvatar(this.props.name)} className={classes.channelsAvatar} style={{ fontFamily: 'IRANSansWeb',backgroundColor:  stringToColor(this.props.name)}} />
                        )
                    }
                    {/*<Avatar alt={this.props.name} src={this.props.imageSource} className={classes.channelsAvatar}>*/}
                    {/*</Avatar>*/}
                </ListItemAvatar>
                <ListItemText disableTypography primary={<Typography display={"block"} variant={"body1"} noWrap align={"left"} gutterBottom style={{ fontFamily: 'IRANSansWeb',color:  stringToColor(this.props.name)}} >{this.props.name}</Typography>}
                              secondary={<Typography display={"block"} noWrap variant={"body2"} align={"left"} gutterBottom style={{ fontFamily: 'IRANSansWeb',color:  stringToColor(this.props.description)}}>{this.props.description}</Typography>} />

                {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>{this.props.number}</Avatar>*/}
            </ListItem>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
    },
    // rootDiv:{
    //     padding:theme.spacing(2),
    //     flexGrow: 1,
    // },
    channelsAvatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    channelNumberMessage:{
        width: theme.spacing(4),
        height: theme.spacing(3),
    },
    // blueFontStyle:{
    //     fontFamily: 'IRANSansWeb',
    //     color: '#3f407d',
    // }
}));
function stringAvatar(name) {
    return {
        sx: {
            // bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`,
    };
}
function stringToColor(string) {
    let hash = 0;
    let i;
    if (typeof string === "undefined"){
        return null
    }

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);

    }
    /* eslint-enable no-bitwise */
    console.log(color)
    return color;
}
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <ChannelCard classes={classes} p={p} name={props.name} imageSource={props.imageSource} description={props.description} id={props.id} number={props.number}/>
    )
}