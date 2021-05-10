import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import { DatePicker as DatePicked2} from "jalali-react-datepicker";
import moment from 'moment-jalaali';
import DatePicker from 'react-datepicker2';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Add} from "@material-ui/icons";
import {Edit} from "@material-ui/icons";
import {Close} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

//import 'react-datepicker2/dist/react-datepicker2.min.css';
class ConsultantReservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CalendarValue:moment(new Date().getDate(), 'jYYYY/jM/jD'),
            loading:true,
            isGregorian : false,
        };
    }
    handleClick = (value) => {
        console.log("value ", value);
    };
    componentDidMount() {
        this.setState({loading:false});
    }

    handleNewReserve = (event) => {

    };
    handleToggleCalender = (event) => {
        this.setState({isGregorian: !this.state.isGregorian})
    };
    handleDeleteReserve = (event) => {
        event.stopPropagation();
    };
    handleEditReserve = (event) => {
        event.stopPropagation();
    };
    handleMouseDown = (event) => {
        event.preventDefault();
    };


    render() {
        const classes = this.props.classes;
        const objectt = {
            width:"500px"
        };
        return (
            <LoadingOverlay active={this.state.loading} spinner text={""}>
                <Container maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <CssBaseline/>
                    <Theme>
                        <Paper className={classes.paper}>
                            <Typography variant={"h5"} align={"left"} >عملیات رزرو</Typography>
                            <hr/>
                            <Grid container direction={"row"} spacing={2} justify="space-evenly">
                                <Grid item sm={6} xs={12} className={classes.rightSection}>
                                    <div className={classes.rowOfSelectedDay}>
                                    <Typography variant={"h6"} align={"left"}> رزرو های روز 1400/2/18 </Typography>
                                        <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> افزودن رزرو </Typography>}
                                                 placement="left"
                                                 TransitionComponent={Zoom} >
                                        <IconButton className={classes.iconButtonAddStyle}
                                            onClick={this.handleNewReserve}
                                        >
                                            <Add style={{ fontSize: 30}} />
                                        </IconButton>
                                        </Tooltip>
                                    </div>
                                    <Accordion defaultExpanded={false}>
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
                                                }}>
                                                    <div className={classes.customizeButton} style={{marginLeft:"8px"}}> 8:00 </div>
                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 8:00 </Button>*/}
                                                    <Typography variant={"h6"} align={"left"}>-</Typography>
                                                    <div className={classes.customizeButton} style={{marginRight:"8px",marginLeft:"8px"}}> 10:00 </div>
                                                    {/*<Button variant="contained" onMouseDown={this.handleMouseDown} color={"primary"}> 9:30 </Button>*/}
                                                </div>
                                                <div>
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
                                                    <Tooltip title={<Typography variant={"body2"} align={"left"} style={{color:"white"}}> حذف رزرو </Typography>}
                                                             placement="left"
                                                             TransitionComponent={Zoom} >
                                                    <IconButton
                                                        className={classes.iconButtonInterAccordionStyle}
                                                        onClick={this.handleDeleteReserve}
                                                    >
                                                        <Close style={{ fontSize: 30}} />
                                                    </IconButton>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                            <Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>
                                            <br />
                                            <Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion defaultExpanded={false}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant={"body1"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>
                                            {/*<Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>*/}
                                            {/*<FontAwesomeIcon icon={faInfoCircle} style={{margin: '0'}}/>&nbsp;*/}
                                            {/*{'بیوگرافی'}</span></Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>
                                                <br />
                                                <Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>
                                            </div>
                                            {/*<Typography>*/}
                                            {/*<span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>*/}
                                            {/*</Typography>*/}
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion defaultExpanded={false}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant={"body1"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>
                                            {/*<Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>*/}
                                            {/*<FontAwesomeIcon icon={faInfoCircle} style={{margin: '0'}}/>&nbsp;*/}
                                            {/*{'بیوگرافی'}</span></Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>
                                                <br />
                                                <Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>
                                            </div>
                                            {/*<Typography>*/}
                                            {/*<span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>*/}
                                            {/*</Typography>*/}
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion defaultExpanded={false}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant={"body1"} align={"left"}> ساعت 8:00 تا 9:30 </Typography>
                                            {/*<Typography><span style={{fontFamily: 'IRANSansWeb',fontWeight:'700'}}>*/}
                                            {/*<FontAwesomeIcon icon={faInfoCircle} style={{margin: '0'}}/>&nbsp;*/}
                                            {/*{'بیوگرافی'}</span></Typography>*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <Typography variant={"body1"} align={"left"}> در حال حاضر فردی درخواست نداده است </Typography>
                                                <br />
                                                <Typography variant={"body1"} align={"left"}> با آقای فلان وقت مشاوره برقرار است </Typography>
                                            </div>
                                            {/*<Typography>*/}
                                            {/*<span style={{fontFamily: 'IRANSansWeb'}}>{'اطلاعات به زودی وارد خواهد شد'}</span>*/}
                                            {/*</Typography>*/}
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Grid item sm={6} xs={12} className={classes.leftSection}>
                                    <Calendar
                                        value={this.state.CalendarValue}
                                      //  showToggleButton
                                        children={<button type={"button"} onClick={this.handleToggleCalender} className={classes.toggleCalenderButton}>{this.state.isGregorian ? "تاریخ میلادی" : "تاریخ شمسی"}</button>}
                                        isGregorian={this.state.isGregorian}
                                        onChange={value => { this.setState({ CalendarValue : value}) }}
                                        onSelect={date => console.log(date)}
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
        <ConsultantReservation classes={classes} p={p} />
    )
}