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
import Grid from '@material-ui/core/Grid';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default class ErrorDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : null
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({open:nextProps.open});
        //console.log("will");
    }


    handleClose = () => {
        this.setState({open:false});
    };
    render(){

        const errorText = this.props.errorText;
        return(
            <div>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    scroll={"body"}
                >
                    <AppBar position={"relative"} dir={"rtl"}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <DialogTitle dir={"rtl"}  id="alert-dialog-title" >{"خطا"}</DialogTitle>
                                </Grid>
                                <Grid item xs={6} >
                                        <IconButton style={{float:"left",marginTop:"8%"}} color="inherit" onClick={this.handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                </Grid>
                            </Grid>
                    </AppBar>
                    <DialogContent dividers={true}>
                        <DialogContentText id="alert-dialog-description">
                            <Typography component="h4" variant="h6" style={{textAlign:"center",fontFamily: 'Vazir'}} >
                                {errorText}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions dir={"rtl"}>
                        <Button onClick={this.handleClose} variant="contained" color="primary" autoFocus>
                            باشه
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    };
}