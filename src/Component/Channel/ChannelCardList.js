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
            <List dense component="nav" subheader={
                <ListSubheader disableGutters>
                    <Typography variant={"h6"} align={"left"} gutterBottom >{this.props.title}</Typography>
                </ListSubheader>}
            >
                {this.props.children}
            </List>
        )
    }
}