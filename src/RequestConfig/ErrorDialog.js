import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Theme from "../Component/Theme";
import {createMuiTheme} from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createMuiTheme({});
export default class ErrorDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : props.open
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        //if(this.props.open !== nextProps.open){
            this.setState({open:nextProps.open});
        //}
    }


    handleClose = () => {
        this.setState({open:false});
        this.props?.handleParentState();
    };
    render(){

        const errorText = this.props.errorText;
        const errorColor = theme.palette.error.main;
      //  console.log(errorColor);
        return(
            <div>
                <Theme>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    scroll={"body"}
                >
                    <AppBar position={"relative"} dir={"rtl"} style={{backgroundColor:errorColor}}>
                        <div style={{ width: "100%",display: "flex",flexDirection:"row", justifyContent: "space-between",alignItems: "baseline"}}>
                            <div>
                                <DialogTitle dir={"rtl"}  id="alert-dialog-title" ><Typography variant={"h6"} style={{color:"white"}}> خطا </Typography></DialogTitle>
                            </div>
                            <div>
                                <IconButton color="inherit" onClick={this.handleClose}>
                                <CloseIcon />
                                </IconButton>
                            </div>

                        </div>
                            {/*<Grid container>*/}
                                {/*<Grid item xs={6}>*/}
                                    {/*<DialogTitle dir={"rtl"}  id="alert-dialog-title" ><Typography variant={"h6"}> خطا </Typography></DialogTitle>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={6} >*/}
                                        {/*<IconButton style={{float:"left",marginTop:"8%"}} color="inherit" onClick={this.handleClose}>*/}
                                            {/*<CloseIcon />*/}
                                        {/*</IconButton>*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                    </AppBar>
                    <DialogContent dividers={true}>
                        <DialogContentText id="alert-dialog-description">
                            <Typography variant="body1" style={{textAlign:"center"}} >
                                {errorText}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions dir={"rtl"}>
                        <Button onClick={this.handleClose} variant="contained" style={{backgroundColor:errorColor}} autoFocus>
                            باشه
                        </Button>
                    </DialogActions>
                </Dialog>
                </Theme>
            </div>
        )
    };
}
