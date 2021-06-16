import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import momentJalaali from "moment-jalaali";
import { Calendar } from 'react-datepicker2';
import LoadingOverlay from 'react-loading-overlay';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../Theme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Add} from "@material-ui/icons";
import {Edit} from "@material-ui/icons";
import {Call} from "@material-ui/icons";
import {Close} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Button from "@material-ui/core/Button";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import {CalendarTodayRounded} from "@material-ui/icons";
import {TimeDialog} from '../Reservation/setTimeDialog';
import {EditTimeDialog} from '../Reservation/editTime';
import TextField from "@material-ui/core/TextField";
import { faClock,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from "@material-ui/core/Avatar";
import SuccessDialog from "../../RequestConfig/SuccessDialog";
import {Link} from "react-router-dom";

class Reservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CalendarValue:momentJalaali(),
            loading:true,
            isGregorian : false,
            loading2:true,
            timeDialog: false,
            editTimeDialog: false,
            title: null,
            description:null,
            setSuccessDialog:false,
         //   consultantID: null,
        };
        this.getReserveOfDay(this.state.CalendarValue);
    }
    handleStateSuccessDialog = () =>{
        this.setState({setSuccessDialog:!this.state.setSuccessDialog})
    };
    componentDidMount() {
        this.setState({loading:false});
    }
    handleNewReserve = (event) => {
    };
    handleToggleCalender = (event) => {
        this.setState({isGregorian: !this.state.isGregorian})
    };
    handleDeleteReserve = (event,user,ReserveId) => {
        event.stopPropagation();
        let DataValueIndex;
        for (let i in this.ReserveData){
            //const DataValue = this.ReserveData[i];
            if (this.ReserveData[i]?.id === ReserveId){
                DataValueIndex = i;
            }
        }
        this.setState({loading2:!this.state.loading2});
        if (user === null){
            axios.delete(serverURL() + "calendar/consultant-time/" +ReserveId + "/",TokenConfig())
                .then(result => {
                    console.log(result);
                    this.ReserveData.splice(DataValueIndex,1);
                    this.setState({setSuccessDialog:true});
                    this.setState({loading2:!this.state.loading2});
                })
                .catch(error => {
                    console.log(error);
                    this.setState({loading2:!this.state.loading2});
                })
        }
        else{
            axios.delete(serverURL() + "calendar/consultant-time/cancel/" +ReserveId + "/",TokenConfig())
                .then(result => {
                    console.log(result);

                    axios.delete(serverURL() + "calendar/consultant-time/" +ReserveId + "/",TokenConfig())
                        .then(result => {
                            console.log(result);
                            this.ReserveData.splice(DataValueIndex,1);
                            this.setState({setSuccessDialog:true});
                            this.setState({loading2:!this.state.loading2});
                        })
                        .catch(error => {
                            console.log(error);
                            this.setState({loading2:!this.state.loading2});
                        });

                })
                .catch(error => {
                    console.log(error);
                    this.setState({loading2:!this.state.loading2});
                })
        }
    };
    handleEditReserve = (event) => {
        event.stopPropagation();
    };
    handleNormalUserNewReserve = (event,DataValue) => {
        event.stopPropagation();
        const calnederDate = this.state.CalendarValue.format("YYYY-MM-DD");
        const postBody = {
            "start_date": calnederDate + " " + DataValue.start_time,
            "end_date": calnederDate + " " + DataValue.end_time,
            "title": this.state.title,
            "description": this.state.description
        };
       // console.log(DataValue.start_time);
        axios.post(serverURL() + "calendar/reserve/" + this.props.consultantID + "/",postBody,TokenConfig())
            .then(result => {
                console.log(result);
                this.setState({title:"",description:""});
            })
            .catch(error =>{
                console.log(error);
                this.setState({title:"",description:""});
            });
    };
    handleOnSelectCalendar = (date) => {
        this.reservation.scrollIntoView({ behavior: "smooth" });
        this.setState({loading2:!this.state.loading2});
        this.getReserveOfDay(date);
    };
    handleTitleChange = (event) => {
        this.state.title = event.target.value;
        //if (this.state.title === null){
        this.setState({});
        //}
    };
    handleDescriptionChange = (event) => {
        this.state.description = event.target.value;
        this.setState({});
    };
    ReserveData = [];

    EmptyTime = [];
    ReservedTime = [];
    ObsoleteEmptyTime = [];
    ObsoleteReservedTime = [];

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log("hello");
    //     if (this.props.consultantID !== nextProps.consultantID){
    //         this.state.consultantID = nextProps.consultantID;
    //         console.log(this.state.cconsultantID);
    //         console.log("here");
    //     }
    // }

    getReserveOfDay(inputValue) {
        const inputValueToServer = inputValue.format("YYYY-MM-DD");
       // console.log(inputValueToServer);
        if (this.props.isInlineClass === undefined) {
            axios.get(serverURL() + "calendar/consultant-time/" + "?query= " + "&date=" + inputValueToServer,TokenConfig())
                .then(result => {
                    console.log(result);
                    this.ReserveData = result.data;
                    this.setState({loading2:!this.state.loading2});
                })
                .catch(error => {
                    console.log(error);
                    this.setState({loading2:!this.state.loading2});
                });
        }
        else {
            axios.get(serverURL() + "calendar/reserve/" + this.props.consultantID + "/" + "?query= " + "&date=" + inputValueToServer,TokenConfig())
                .then(result => {
                    console.log(result);
                    this.ReservedTime = result.data?.data?.reserved_time;
                    this.EmptyTime = result.data?.data?.empty_time;
                    this.ObsoleteEmptyTime = result.data?.data?.obsolete_empty_time;
                    this.ObsoleteReservedTime = result.data?.data?.obsolete_reserved_time;
                    this.setState({loading2:!this.state.loading2});
                })
                .catch(error => {
                    console.log(error);
                    this.setState({loading2:!this.state.loading2});
                });
        }
    }
    getCustomFormat(inputValue, isGregorian) {
        const inputFormat = isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
        return isGregorian ? inputValue.locale('es').format(inputFormat) :
            inputValue.locale('fa').format(inputFormat);
    }
    getTimeFromStringDate(StringDate){
        const date = new Date(StringDate);
        //console.log(date);
        const time = date.getHours() + ":" + date.getMinutes();
        return time;
    }
    handleStateTimeDialog = () =>{
        this.setState({timeDialog:!this.state.timeDialog})
    };
    handleStateEditTimeDialog = () =>{
        this.setState({editTimeDialog:!this.state.editTimeDialog})
    };
    userType = localStorage.getItem('userType');
    render() {
        const classes = this.props.classes;
        const [timeDialogIsOpen,setTimeDialogIsOpen] = this.props.timeDialogIsOpen;
        const openTimeDialog = () => {
            this.setState({timeDialog:true});
        }
        const closeTimeDialog = () => setTimeDialogIsOpen(false);
        const calnederDate = this.state.CalendarValue.format("YYYY-MM-DD");
        return (
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <SuccessDialog open={this.state.setSuccessDialog} handleParentState={this.handleStateSuccessDialog} />
                        <Paper className={ this.props.isInlineClass === undefined ? classes.paper : classes.paper2}>
                            {
                                this.props.isInlineClass === undefined ?
                                    <div>
                                        <Typography variant={"h5"} align={"left"} >
                                            <span style={{fontWedight:"700"}}>
                                            <FontAwesomeIcon icon={faCalendarAlt} style={{margin:"0px"}} />
                                            &nbsp;
                                            {'تقویم'}
                                            </span>
                                        </Typography>
                                        <hr/>
                                    </div>
                                    :
                                    <div>
                                        <Typography variant={"h5"} align={"left"} >
                                            <span style={{fontWedight:"700"}}>
                                                <FontAwesomeIcon icon={faCalendarAlt} style={{margin:"0px"}}/>
                                                &nbsp;
                                                {'عملیات رزرو'}
                                            </span>
                                        </Typography>
                                        <hr/>
                                    </div>
                            }
                            <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                <Grid item md={6} sm={12} xs={12} className={classes.rightSection}>
                                    <LoadingOverlay active={this.state.loading2} spinner text={""}>
                                    <div className={classes.rowOfSelectedDay}>
                                    <Typography variant={"h6"} align={"left"}> رزرو های روز {this.getCustomFormat(this.state.CalendarValue,this.state.isGregorian)} </Typography>
                                        {this.userType !== "normal_user" && this.props.isInlineClass === undefined ?
                                            <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> افزودن رزرو </Typography>}
                                                     placement="left"
                                                     TransitionComponent={Zoom} >
                                                <IconButton className={classes.iconButtonAddStyle}
                                                            onClick={this.handleStateTimeDialog}
                                                >
                                                    <Add style={{ fontSize: 30}} />
                                                </IconButton>
                                            </Tooltip>
                                            : null
                                        }
                                    </div>
                                    <TimeDialog open={this.state.timeDialog} handleParentState={this.handleStateTimeDialog} date={this.state.CalendarValue}/>
                                    
                                    <div style={{ clear: "both" }}
                                         ref={(el) => { this.reservation = el; }}>
                                    </div>
                                    {
                                        this.props.isInlineClass === undefined ?
                                            this.ReserveData.length === 0 ?
                                                <div className={classes.NoReserveSection}>
                                                    <Typography variant={"h6"} align={"left"} style={{textAlign:"center",alignSelf:"center",marginLeft:"auto",marginRight:"auto"}}> رزوری وجود ندارد </Typography>
                                                </div>
                                                :
                                                this.ReserveData.map((DataValue, index) => (
                                                    <Accordion key={index} defaultExpanded={false}>
                                                        <AccordionSummary
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <div style={{
                                                                width: "100%",
                                                                display: "flex",
                                                                flexDirection:"row",
                                                                justifyContent: "space-between",}}>
                                                                {/*<Typography variant={"h6"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>*/}
                                                                <div style={{
                                                                    //  width: "40%",
                                                                    display: "flex",
                                                                    flexDirection:"row",
                                                                    justifyContent: "flex-start",
                                                                    alignItems: "center"
                                                                }}>
                                                                    <FontAwesomeIcon icon={faClock} style={{color: '#2ab371',fontSize:"22px",marginLeft:"4px"}}/>
                                                                    <Typography variant={"body1"} component={"span"} align={"left"} style={{marginLeft:"8px"}}>ساعت</Typography>
                                                                    <div className={classes.customizeButton2} style={{marginLeft:"8px"}}> {this.getTimeFromStringDate(DataValue.start_date)} </div>
                                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 8:00 </Button>*/}
                                                                    <Typography variant={"body1"} component={"span"} align={"left"}>-</Typography>
                                                                    <div className={classes.customizeButton2} style={{marginRight:"8px",marginLeft:"8px"}}> {this.getTimeFromStringDate(DataValue.end_date)} </div>
                                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 9:30 </Button>*/}
                                                                </div>
                                                                <div>
                                                                    <a href={"/VideoChat/" + DataValue.id}>
                                                                    <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> تماس </Typography>}
                                                                             placement="left"
                                                                             TransitionComponent={Zoom} >
                                                                        <IconButton
                                                                            className={classes.iconButtonInterAccordionStyle}
                                                                            //onClick={event => {window.location.href = "/VideoChat/" + DataValue.id;console.log(DataValue.id)}}
                                                                        >
                                                                            <Call style={{ fontSize: 30}} />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    </a>
                                                                    { this.userType !== "normal_user" ?
                                                                        <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> ویرایش رزرو </Typography>}
                                                                                 placement="left"
                                                                                 TransitionComponent={Zoom} >
                                                                            <IconButton
                                                                                className={classes.iconButtonInterAccordionStyle}
                                                                                onClick={this.handleStateEditTimeDialog}
                                                                            >
                                                                                <Edit style={{ fontSize: 30}} />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                        : null
                                                                    }
                                                                    <EditTimeDialog open={this.state.editTimeDialog} handleParentState={this.handleStateEditTimeDialog} startDate={DataValue.start_date} endDate={DataValue.end_date} ConsultantTimeId={DataValue.id} date={this.state.CalendarValue}/>
                                                                    <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}>{this.userType !== "normal_user" ? "حذف رزرو" : "کنسل رزرو"}</Typography>}
                                                                             placement="left"
                                                                             TransitionComponent={Zoom} >
                                                                        <IconButton
                                                                            className={classes.iconButtonInterAccordionStyle}
                                                                            onClick={(event) => this.handleDeleteReserve(event,DataValue.user,DataValue.id)}
                                                                        >
                                                                            <Close style={{ fontSize: 30,color:"#ed5050"}} />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </div>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            {/*<div>*/}
                                                                {
                                                                    DataValue.user === null ?
                                                                        <div>
                                                                        <Typography variant={"body1"} align={"left"}>در حال حاضر فردی درخواست نداده است </Typography>
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <Typography variant={"body1"} align={"left"} style={{display:"flex"}}>
                                                                                <Avatar alt={DataValue?.user?.first_name + DataValue?.user?.last_name} src={DataValue?.user?.avatar} className={classes.usersAvatar}>
                                                                                </Avatar>
                                                                                {DataValue?.user?.first_name} {DataValue?.user?.last_name}
                                                                                {/*&nbsp;*/}
                                                                                <span style={{marginRight:"3.2px"}}>در این زمان با موضوع</span>
                                                                                {/*&nbsp;*/}
                                                                                <span style={{margin:"0px 3.2px"}}>{DataValue?.title}</span>
                                                                                {/*&nbsp;*/}
                                                                                در خواست مشاوره داده است
                                                                                {/*{DataValue?.user?.first_name} {DataValue?.user?.last_name} در این زمان با موضوع{DataValue?.title}در خواست مشاوره داده است*/}
                                                                            </Typography>
                                                                            <br />
                                                                            <Typography variant={"body1"} align={"left"}>
                                                                                {DataValue?.description}
                                                                            </Typography>
                                                                        </div>
                                                                }
                                                            {/*</div>*/}
                                                        </AccordionDetails>
                                                    </Accordion>
                                                ))
                                            :
                                            <div>
                                                {
                                                    this.EmptyTime.length === 0 && this.ReservedTime.length === 0 && this.ObsoleteEmptyTime.length === 0 && this.ObsoleteReservedTime.length === 0 ?
                                                        <div className={classes.NoReserveSection}>
                                                            <Typography variant={"h6"} align={"left"} style={{textAlign:"center",alignSelf:"center",marginLeft:"auto",marginRight:"auto"}}> رزوری وجود ندارد </Typography>
                                                        </div>
                                                        :
                                                    this.EmptyTime.map((DataValue, index) => (
                                                        <Accordion key={index}>
                                                            <AccordionSummary
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <div style={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    justifyContent: "space-between",
                                                                }}>
                                                                    {/*<Typography variant={"h6"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>*/}
                                                                    <div style={{
                                                                        //  width: "40%",
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "flex-start",
                                                                        alignItems: "center"
                                                                    }}>
                                                                        <FontAwesomeIcon icon={faClock} style={{color: '#2ab371',fontSize:"22px",marginLeft:"4px"}}/>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{marginLeft: "8px"}}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.start_time + "Z")} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.end_time + "Z")} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            style={{minWidth: "87px"}}
                                                                            onClick={event => this.handleNormalUserNewReserve(event,DataValue)}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزرو </Button>
                                                                    </div>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                            <div style={{   width: "100%",
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                justifyContent: "space-evenly",}}>
                                                                <TextField id="outlined-basic" label="عنوان جلسه" variant="outlined"  value={this.state.title}
                                                                           onChange={this.handleTitleChange} />
                                                                <TextField id="outlined-basic" label="توضيحات جلسه" variant="outlined"  value={this.state.description}
                                                                           onChange={this.handleDescriptionChange} />
                                                            </div>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    ))
                                                }
                                                {
                                                    this.ReservedTime.map((DataValue,index) => (
                                                        <Accordion key={index} expanded={false}>
                                                            <AccordionSummary
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <div style={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    justifyContent: "space-between",
                                                                }}>
                                                                    {/*<Typography variant={"h6"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>*/}
                                                                    <div style={{
                                                                        //  width: "40%",
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "flex-start",
                                                                        alignItems: "center"
                                                                    }}>
                                                                        <FontAwesomeIcon icon={faClock} style={{color: '#2ab371',fontSize:"22px",marginLeft:"4px"}}/>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{marginLeft: "8px"}}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.start_time + "Z")} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.end_time + "Z")} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            //onClick={event => this.handleNormalUserNewReserve(event,DataValue)}
                                                                            style={{minWidth: "87px"}}
                                                                            disabled
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزرو شده </Button>
                                                                    </div>
                                                                </div>
                                                            </AccordionSummary>

                                                            {/*<AccordionDetails>*/}
                                                                {/*<div style={{   width: "100%",*/}
                                                                    {/*display: "flex",*/}
                                                                    {/*flexDirection: "row",*/}
                                                                    {/*justifyContent: "space-evenly",}}>*/}
                                                                {/*<TextField id="outlined-basic" label="عنوان جلسه" variant="outlined"  value={this.state.title}*/}
                                                                           {/*onChange={this.handleTitleChange} />*/}
                                                                {/*<TextField id="outlined-basic" label="توضيحات جلسه" variant="outlined"  value={this.state.description}*/}
                                                                           {/*onChange={this.handleDescriptionChange} />*/}
                                                                {/*</div>*/}
                                                            {/*</AccordionDetails>*/}

                                                        </Accordion>
                                                    ))
                                                }
                                                {
                                                    this.ObsoleteEmptyTime.map((DataValue,index) => (
                                                        <Accordion key={index} expanded={false} disabled>
                                                            <AccordionSummary
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <div style={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    justifyContent: "space-between",
                                                                }}>
                                                                    {/*<Typography variant={"h6"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>*/}
                                                                    <div style={{
                                                                        //  width: "40%",
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "flex-start",
                                                                        alignItems: "center"
                                                                    }}>
                                                                        <FontAwesomeIcon icon={faClock} style={{color: '#2ab371',fontSize:"22px",marginLeft:"4px"}}/>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{marginLeft: "8px"}}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.start_time + "Z")} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.end_time + "Z")} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                   //         onClick={this.handleNormalUserNewReserve}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> تمام شده </Button>
                                                                    </div>
                                                                </div>
                                                            </AccordionSummary>
                                                            {/*{*/}
                                                            {/*this.props.isInlineClass === undefined ?*/}
                                                            {/*<AccordionDetails>*/}
                                                            {/*<div>*/}
                                                            {/*<Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>*/}
                                                            {/*<br />*/}
                                                            {/*<Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>*/}
                                                            {/*</div>*/}
                                                            {/*</AccordionDetails>*/}
                                                            {/*:*/}
                                                            {/*null*/}
                                                            {/*}*/}
                                                        </Accordion>
                                                    ))
                                                }
                                                {
                                                    this.ObsoleteReservedTime.map((DataValue,index) => (
                                                        <Accordion key={index} expanded={false} disabled>
                                                            <AccordionSummary
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                <div style={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    justifyContent: "space-between",
                                                                }}>
                                                                    {/*<Typography variant={"h6"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>*/}
                                                                    <div style={{
                                                                        //  width: "40%",
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "flex-start",
                                                                        alignItems: "center"
                                                                    }}>
                                                                        <FontAwesomeIcon icon={faClock} style={{color: '#2ab371',fontSize:"22px",marginLeft:"4px"}}/>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{marginLeft: "8px"}}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.start_time + "Z")} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton2}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {this.getTimeFromStringDate(calnederDate + "T" +DataValue.end_time + "Z")} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                        //    onClick={this.handleNormalUserNewReserve}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> تمام شده </Button>
                                                                    </div>
                                                                </div>
                                                            </AccordionSummary>
                                                            {/*{*/}
                                                            {/*this.props.isInlineClass === undefined ?*/}
                                                            {/*<AccordionDetails>*/}
                                                            {/*<div>*/}
                                                            {/*<Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>*/}
                                                            {/*<br />*/}
                                                            {/*<Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>*/}
                                                            {/*</div>*/}
                                                            {/*</AccordionDetails>*/}
                                                            {/*:*/}
                                                            {/*null*/}
                                                            {/*}*/}
                                                        </Accordion>
                                                    ))
                                                }
                                            </div>
                                    }
                                    </LoadingOverlay>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} className={classes.leftSection}>
                                    <Calendar
                                        value={this.state.CalendarValue}
                                      //  showToggleButton
                                        children={<button type={"button"} onClick={this.handleToggleCalender} className={classes.toggleCalenderButton}>{this.state.isGregorian ? "تاریخ میلادی" : "تاریخ شمسی"}</button>}
                                        isGregorian={this.state.isGregorian}
                                        onChange={value => { this.setState({ CalendarValue : value}) }}
                                        onSelect={this.handleOnSelectCalendar}
                                        className={classes.calender}
                                    />
                                </Grid>
                            </Grid>

                        </Paper>
                    </Theme>
                </Container>
            </LoadingOverlay>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
        '.calendarContainer .selected button, .calendarContainer .selected button:active, .calendarContainer .selected button:focus, .calendarContainer .selected button:hover :not([disabled])':{
            backgroundColor: '#2ab371',
            color: '#fff'
        },
        '.today button':{
            border: '3px solid #27bda0 !important'
        },
        '.selectToday':{
            backgroundColor: '#2ab371',
            "&:hover":{
                backgroundColor: "#27bda0",
            }
        }
    },
    usersAvatar:{
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight:"4px",
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor:"#f3f7fa",
    },
    paper2: {
        padding: theme.spacing(2),
        //backgroundColor:"#f3f7fa",
    },
    rightSection:{
        [theme.breakpoints.down('md')]: {
            order: 2,
        },
        [theme.breakpoints.up('md')]: {
            order: 1,
        },
    },
    leftSection:{
        [theme.breakpoints.down('md')]: {
            order: 1,
        },
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
    NoReserveSection:{
        // [theme.breakpoints.down('sm')]: {
        //
        // },
        [theme.breakpoints.up('sm')]: {
            display:"flex",
            height:"355px",
        },
    },
    rowOfSelectedDay:{
       // width: "100%",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        margin:theme.spacing(2,0),
    },
    iconButtonAddStyle:{
        margin:theme.spacing(0,1.9,0,0),
        padding: theme.spacing(0),
        color: '#3f407d'
    },
    iconButtonInterAccordionStyle:{
        margin:"0px",
        marginLeft: "5px",
        padding: theme.spacing(0),
        color: '#3f407d'
    },
    toggleCalenderButton:{
        backgroundColor: '#2ab371',
        "&:hover":{
            backgroundColor: "#27bda0",
        },
        marginBottom : theme.spacing(1),
        display: "block",
        width: "100%",
        //backgroundColor: "#4285f4",
        color: "#fff",
        outline: "0",
        borderRadius: "5px",
        border: "0",
        cursor: "pointer",
        padding: "5px 0 7px 0",
        webkitTransition : ".2s all ease-in-out",
        webkitTransitionProperty : "background",
        transition: ".2s all ease-in-out",
        //transitionProperty: "all",
        //-webkit-transition-property: background;
        transitionProperty: "background",
//-webkit-transition: .2s all ease-in-out;
//         "&:hover":{
//             backgroundColor: "#1266f1",
//         }
    },
    customizeButton2:{
        backgroundColor:"#2ab371",
        borderRadius:"50px",
        padding:"3px 13px",
        color:"white",
    },
    customizeButton:{
        color: "#fff",
        backgroundColor: "#5073ed",
        boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        padding: "6px 16px",
        fontSize: "0.875rem",
        minWidth: "64px",
        boxSizing: "border-box",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        fontFamily: "IRANSansWeb",
        fontWeight: "500",
        lineHeight: "1.75",
        borderRadius: "4px",
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        border: "0",
        cursor: "pointer",
        margin: "0",
        display: "inline-flex",
        outline: "0",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        webkitAppearance: "none",
        //-moz-user-select: none;
},
    calender:{
  //      height: "500px",
        width: "auto",
    }
}));
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    const timeDialogIsOpen = React.useState(false);
    const editTimeDialogIsOpen = React.useState(false);
    return(
        <Reservation classes={classes} p={p} consultantID={props.consultantID} isInlineClass={props.isInlineClass} timeDialogIsOpen={timeDialogIsOpen} editTimeDialogIsOpen={editTimeDialogIsOpen}/>
    )
}