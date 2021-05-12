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
import {Close} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Button from "@material-ui/core/Button";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import {CalendarTodayRounded} from "@material-ui/icons";

class Reservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CalendarValue:momentJalaali(),
            loading:true,
            isGregorian : false,
            loading2:true,
        };
        this.getReserveOfDay(this.state.CalendarValue);
    }
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
        if (user === null){
            axios.delete(serverURL() + "calendar/consultant-time/" +{ReserveId} + "/",TokenConfig())
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else{
            axios.delete(serverURL() + "calendar/consultant-time/cancel/" +{ReserveId} + "/",TokenConfig())
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    };
    handleEditReserve = (event) => {
        event.stopPropagation();
    };
    handleNormalUserNewReserve = (event) => {
    };
    handleOnSelectCalendar = (date) => {
        this.reservation.scrollIntoView({ behavior: "smooth" });
        this.setState({loading2:!this.state.loading2});
        this.getReserveOfDay(date);
    };
    ReserveData = [];

    EmptyTime = [];
    ReservedTime = [];
    ObsoleteEmptyTime = [];
    ObsoleteReservedTime = [];

    getReserveOfDay(inputValue) {
        const inputValueToServer = inputValue.format("YYYY-MM-DD");
        console.log(inputValueToServer);
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
            axios.get(serverURL() + "calendar/reserve/" + this.props.ConsultantID + "/" + "?query= " + "&date=" + inputValueToServer,TokenConfig())
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
    userType = localStorage.getItem('userType');
    render() {
        const classes = this.props.classes;
        return (
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <Paper className={classes.paper}>
                            {
                                this.props.isInlineClass === undefined ?
                                    <div>
                                        <Typography variant={"h5"} align={"left"} >
                                            <span style={{fontWedight:"700"}}>
                                            <CalendarTodayRounded />
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
                                            <CalendarTodayRounded />
                                                &nbsp;
                                                {'عملیات رزرو'}
                                            </span>
                                        </Typography>
                                        <hr/>
                                    </div>
                            }
                            <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                <Grid item sm={6} xs={12} className={classes.rightSection}>
                                    <LoadingOverlay active={this.state.loading2} spinner text={""}>
                                    <div className={classes.rowOfSelectedDay}>
                                    <Typography variant={"h6"} align={"left"}> رزرو های روز {this.getCustomFormat(this.state.CalendarValue,this.state.isGregorian)} </Typography>
                                        {this.userType !== "normal_user" && this.props.isInlineClass === undefined ?
                                            <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> افزودن رزرو </Typography>}
                                                     placement="left"
                                                     TransitionComponent={Zoom} >
                                                <IconButton className={classes.iconButtonAddStyle}
                                                            onClick={this.handleNewReserve}
                                                >
                                                    <Add style={{ fontSize: 30}} />
                                                </IconButton>
                                            </Tooltip>
                                            : null
                                        }
                                    </div>
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
                                                                    alignItems: "baseline"
                                                                }}>
                                                                    <Typography variant={"body1"} component={"span"} align={"left"} style={{marginLeft:"8px"}}>ساعت</Typography>
                                                                    <div className={classes.customizeButton} style={{marginLeft:"8px"}}> {this.getTimeFromStringDate(DataValue.start_date)} </div>
                                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 8:00 </Button>*/}
                                                                    <Typography variant={"body1"} component={"span"} align={"left"}>-</Typography>
                                                                    <div className={classes.customizeButton} style={{marginRight:"8px",marginLeft:"8px"}}> {this.getTimeFromStringDate(DataValue.end_date)} </div>
                                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 9:30 </Button>*/}
                                                                </div>
                                                                <div>
                                                                    { this.userType !== "normal_user" ?
                                                                        <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> ویرایش رزرو </Typography>}
                                                                                 placement="left"
                                                                                 TransitionComponent={Zoom} >
                                                                            <IconButton
                                                                                className={classes.iconButtonInterAccordionStyle}
                                                                                onClick={this.handleEditReserve}
                                                                            >
                                                                                <Edit style={{ fontSize: 30}} />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                        : null
                                                                    }
                                                                    <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}>{this.userType !== "normal_user" ? "حذف رزرو" : "کنسل رزرو"}</Typography>}
                                                                             placement="left"
                                                                             TransitionComponent={Zoom} >
                                                                        <IconButton
                                                                            className={classes.iconButtonInterAccordionStyle}
                                                                            onClick={(event) => this.handleDeleteReserve(event,DataValue.user,DataValue.id)}
                                                                        >
                                                                            <Close style={{ fontSize: 30}} />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </div>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <div>
                                                                {
                                                                    DataValue.user === null ?
                                                                        <Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>
                                                                        :
                                                                        <Typography variant={"body1"} align={"left"} style={{direction:"ltr"}}> وقت مشاوره برقرار است {"@"+DataValue?.user?.username} با کاربر </Typography>
                                                                }
                                                                <br />
                                                            </div>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                ))
                                            :
                                            <div>
                                                {
                                                    this.EmptyTime.map((DataValue, index) => (
                                                        <Accordion key={index} expanded={true}>
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
                                                                        alignItems: "baseline"
                                                                    }}>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{marginLeft: "8px"}}> {DataValue.start_time} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {DataValue.start_time} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            onClick={this.handleNormalUserNewReserve}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزور </Button>
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
                                                    this.ReservedTime.map((DataValue,index) => (
                                                        <Accordion key={index} expanded={true}>
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
                                                                        alignItems: "baseline"
                                                                    }}>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{marginLeft: "8px"}}> {DataValue.start_time} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {DataValue.start_time} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            //onClick={this.handleNormalUserNewReserve}
                                                                            disable
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزور شده است </Button>
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
                                                    this.ObsoleteEmptyTime.map((DataValue,index) => (
                                                        <Accordion key={index} expanded={true}>
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
                                                                        alignItems: "baseline"
                                                                    }}>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{marginLeft: "8px"}}> {DataValue.start_time} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {DataValue.start_time} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            onClick={this.handleNormalUserNewReserve}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزور </Button>
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
                                                        <Accordion key={index} expanded={true}>
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
                                                                        alignItems: "baseline"
                                                                    }}>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}
                                                                                    style={{marginLeft: "8px"}}>ساعت</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{marginLeft: "8px"}}> {DataValue.start_time} </div>
                                                                        <Typography variant={"body1"} component={"span"}
                                                                                    align={"left"}>-</Typography>
                                                                        <div className={classes.customizeButton}
                                                                             style={{
                                                                                 marginRight: "8px",
                                                                                 marginLeft: "8px"
                                                                             }}> {DataValue.start_time} </div>
                                                                    </div>
                                                                    <div>
                                                                        <Button
                                                                            onClick={this.handleNormalUserNewReserve}
                                                                            color={"secondary"}
                                                                            variant={"contained"}> رزور </Button>
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
                                <Grid item sm={6} xs={12} className={classes.leftSection}>
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
    },
    paper: {
        padding: theme.spacing(2),
      //  textAlign: 'center',
      //  color: theme.palette.text.secondary,
      //  alignItems: "center",
    },
    rightSection:{
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
        [theme.breakpoints.up('sm')]: {
            order: 1,
        },
    },
    leftSection:{
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
        [theme.breakpoints.up('sm')]: {
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
        marginBottom : theme.spacing(1),
        display: "block",
        width: "100%",
        backgroundColor: "#4285f4",
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
        "&:hover":{
            backgroundColor: "#1266f1",
        }
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
    return(
        <Reservation classes={classes} p={p} consultantID={props.consultantID} isInlineClass={props.isInlineClass} />
    )
}