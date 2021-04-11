import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

export default class ChannelCardList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return(
            <List dense subheader={
                <ListSubheader disableGutters>
                    <Typography component={"h2"} variant={"body1"} align={"left"} gutterBottom style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}} >{this.props.title}</Typography>
                </ListSubheader>}
            >
                {this.props.children}
            </List>
        )
    }
}