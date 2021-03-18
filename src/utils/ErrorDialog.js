import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';

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
                >
                    <DialogTitle id="alert-dialog-title" >{"خطا"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Typography component="h3" variant="h5" style={{fontFamily: 'Vazir'}} >
                                {errorText}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            باشه
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    };
}