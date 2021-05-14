import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import momentJalaali from "moment-jalaali";
import DatePicker from 'react-datepicker2';
// import  {TimePicker} from 'react-datepicker2';
// import  TimePicker from 'react-datepicker2/src/components/TimePicker/TimePicker';
import TextField from '@material-ui/core/TextField';
import CustomTimePicker from './CustomTimePicker';
import { persianNumber } from '../utils/persian';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
export class TimeDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : props.open,
            startTime : new Date(props.date),
            endTime : new Date(props.date),
            value: momentJalaali('1396/7/6', 'jYYYY/jM/jD')
        }
    }
    handleClose = () => {
        this.setState({open:false});
        this.props?.handleParentState();
    };
    componentWillReceiveProps(nextProps, nextContext) {
        //if(this.props.open !== nextProps.open){
            this.setState({open:nextProps.open});
        //}
    }
    render(){
      const handleDateChange = (date) => {
        this.setState({startDate:date});
      };
      const classes = this.props.classes;
        return(
            <div>
            <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title" style={{textAlign: 'center'}}>
              {"ثبت زمان برای مشاوره"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
              hi
              <div style={{zIndex: '10000',fontfamily: 'IRANSansWeb'}}><DatePicker
              style={{zIndex:'1000',fontFamily: 'IRANSansWeb'}}
                isGregorian={false}
                value={this.state.value}
                onChange={value => this.setState({ value })}
              //   classes={{
              //     paper: classes.dialog
              // }}
              /></div>
              {/* <CustomTimePicker/> */}
              <form  noValidate>
                <TextField
                variant='outlined'
                value={this.state.startTime}
                  id="time"
                  label="زمان شروع"
                  type="time"
                  defaultValue="00:00"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                    style:{fontFamily: 'IRANSansWeb'}
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  // onChange={handleDateChange}
                />
              </form>
              <form  noValidate>
                <TextField
                variant='outlined'
                  id="time"
                  label="زمان پایان"
                  type="time"
                  defaultValue="00:00"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                    style:{fontFamily: 'IRANSansWeb'}
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  formatter={value => persianNumber(value)}
                />
              </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Disagree</Button>
              <Button onClick={this.handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
          </div>
        )
}
}
const useStyles = makeStyles((theme) => ({
  '@global':{
      '.MuiFormHelperText-root.Mui-error' : {
          fontFamily: 'IRANSansWeb',
      },
      'tether-element tether-out-of-bounds tether-out-of-bounds-top tether-element-attached-bottom tether-element-attached-center tether-target-attached-top tether-target-attached-center tether-enabled':{
        zIndex: '1300000',
        fontFamily: 'IRANSansWeb',
      },
  },
  dialog: {
    textAlign: 'right',
    fontFamily: 'IRANSansWeb',
    position: 'absolute',
    left: '0%',
    top: '33px',
    width: '290px',
    height: '290px',
    overflow: 'hidden',
    borderRadius: '30px',
  },
}));
export default () =>{
    const classes = useStyles();
    return(
        <TimeDialog classes={classes}/>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });