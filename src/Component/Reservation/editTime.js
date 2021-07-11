import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
export class EditTimeDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : props.open,
            startTime : props.startDate,
            endTime : props.endDate,
            startDateSend : new Date(props.date),
            endDateSend : new Date(props.date),
            consultantTimeId : props.ConsultantTimeId,
        }
        console.log(props.startDate+"-----------------------")
      console.log(props.endDate+"--------------------------")
    }
    handleClose = () => {
        this.setState({open:false});
        this.props?.handleParentState();
    };
    handleSend = () => {
      console.log(this.state.startDateSend)
      console.log(this.state.endDateSend)
      this.state.startDateSend.setHours(this.state.startTime.split(":")[0],this.state.startTime.split(":")[1])
      this.state.endDateSend.setHours(this.state.endTime.split(":")[0],this.state.endTime.split(":")[1])
      console.log(this.state.startDateSend)
      console.log(this.state.endDateSend)
      var body = {
        "start_date": this.state.startDateSend,
        "end_date": this.state.endDateSend,
      }

      axios.put(serverURL() + "calendar/consultant-time/"+ this.props.ConsultantTimeId + "/",body,TokenConfig())
      .then(res=>{
        console.log(res);
        // console.log(this.state.consultantTimeId);
        // console.log(this.props.ConsultantTimeId);
        let index = this.props.ReserveData.findIndex(value => {return value.id === this.props.ConsultantTimeId});
        this.props.ReserveData[index].start_date = this.state.startDateSend;
        this.props.ReserveData[index].end_date = this.state.endDateSend;
        this.setState({open:false});
        this.props?.handleParentState();
      })
      .catch(err=>{
        console.log(err)
      })
    };
    componentWillReceiveProps(nextProps, nextContext) {
        //if(this.props.open !== nextProps.open){
            this.setState({open:nextProps.open});
        //}
    }
    handleChange = (event) => {
      const newState = {};
      newState[event.target.name] = event.target.value;
      this.setState(newState);
    };
    render(){
      const handleStartTimeChange = (e) => {
        this.setState({startTime:e.target.value});
        console.log(this.state.startTime)
      };
      const handleEndTimeChange = (e) => {
        this.setState({endTime:e.target.value});
      };
      const classes = this.props.classes;
        return(
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
              <div style={{display: 'grid',justifyContent: 'center',alignItems: 'center'}}>
              <form  noValidate>
                <TextField
                fullWidth
                variant="filled"
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
                  onChange={handleStartTimeChange}
                />
              </form><br/>
              <form  noValidate>
                <TextField
                fullWidth
                variant="filled"
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
                  value={this.state.endTime}
                  onChange={handleEndTimeChange}
                />
              </form>
              </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <div style={{display: 'grid',justifyContent: 'center',alignItems: 'center',width: '100%',gridTemplateColumns: '30% 30%'}}>
                <Button onClick={this.handleClose}  style={{color:'#fff',fontFamily: 'IRANSansWeb',backgroundColor: '#3aadd9',marginLeft: '-5%',}}>انصراف</Button>
                <Button onClick={this.handleSend}  style={{backgroundColor: '#0e918c',color:'#fff',fontFamily: 'IRANSansWeb',marginLeft: '5%',}}>ثبت</Button>
              </div>
            </DialogActions>
          </Dialog>
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
  button:{
    backgroundColor: '#0e918c',
    color:'#fff',
    fontFamily: 'iransanweb',
  },
}));
export default () =>{
    const classes = useStyles();
    return(
        <EditTimeDialog classes={classes}/>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });