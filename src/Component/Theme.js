import React, { Component } from "react";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

let theme = createMuiTheme({
    overrides: {
        MuiButton: {
            label:{
                color: 'white',
            },
        },
    },
    direction:"rtl",
    palette:{
        primary:{
            main:"#5073ed",
            //        contrastText:"#2ab371",
        },
        secondary:{
            main:"#2ab371",
        },
    },
    typography: {
        body1:{
            fontFamily: 'IRANSansWeb',
            // fontSize : 20,
            color : "#3f407d",
        },
        body2:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
            // color : "#2ab371",
        },
        h1:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        h2:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        h3:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        h4:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        h5:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        h6:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        button:{
            fontFamily: 'IRANSansWeb',
            //fontSize:
        },
        subtitle1:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        subtitle2:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
        caption:{
            fontFamily: 'IRANSansWeb',
            color : "#3f407d",
        },
    },
});
theme = responsiveFontSizes(theme);

export default class Theme extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <ThemeProvider theme={theme}>
                {/*<div>*/}
                    {this.props.children}
                {/*</div>*/}
            </ThemeProvider>
        )
    }
}
