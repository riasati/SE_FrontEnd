import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import serverURL from "../../RequestConfig/serverURL";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
class VerifyEmail extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem('token') !== null ? localStorage.getItem('token').split(' ')[1] : null,
      userType: localStorage.getItem('userType') === "normal_user" ? "user" : "consultant",
      code: '',
      ssn1: '',
      ssn2: '',
      ssn3: '',
      ssn4: '',
      ssn5: '',
      errormessage: '',
    }
  }
  render() {
    const classes = this.props.classes;
    const [ssnValues, setValue] = this.props.ssnValues;
    const [alert, setAlert] = this.props.alert;
    const handleChange = e => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");
      if (value.length >= maxLength) {
        if (parseInt(fieldIndex, 10) < 5) {
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }
      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value
      });
      if (parseInt(fieldIndex) === 1) this.setState({ ssn1: value })
      if (parseInt(fieldIndex) === 2) this.setState({ ssn2: value })
      if (parseInt(fieldIndex) === 3) this.setState({ ssn3: value })
      if (parseInt(fieldIndex) === 4) this.setState({ ssn4: value })
      if (parseInt(fieldIndex) === 5) this.setState({ ssn5: value })
    }
    const hoursMinSecs = { hours: 0, minutes: 2, seconds: 0 }
    const handleSend = () => {
      const formData = new FormData();
      this.setState({ code: this.state.code + ssnValues[0] })
      formData.append("token",this.state.token);
      formData.append("code",this.state.ssn1 + this.state.ssn2 + this.state.ssn3 + this.state.ssn4 + this.state.ssn5
      );
      axios.post(serverURL() + this.state.userType + "/signup-activate-email/", formData)
        .then(res => {
          console.log(res);
          if (localStorage.getItem('userType') === "normal_user"){
            window.location.href = "/Dashboard";
          }
          else {
            window.location.href = "/CreateChannel";
          }
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errormessage : err.response?.data?.error})
          setAlert(true)
        })
    }
    return (
      <Container component="main" maxWidth="xs" >
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <div className={classes.header}><h2 style={{ color: '#3f407d' }}> تایید ایمیل</h2></div>
              <div>
              </div>
              <div> 
                {alert ? 
                <Grid container spacing={2} style={{backgroundColor: 'rgb(244, 67, 54)',color: '#fff',borderRadius: '5px',textAlign: 'right'}}>
                  <Grid item xs={12}>   {this.state.errormessage}    <FontAwesomeIcon icon={faExclamationCircle} style={{ color: '#fff' }} /></Grid><br />
                </Grid> : null
                }
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12}>کد ۵ رقمی که به ایمیل شما ارسال شده را وارد کنید
                </Grid>
                </Grid><br />
                <Grid container spacing={2}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={2}>
                    <ValidatorForm className={classes.form} noValidate>
                      <TextField
                        size="normal"
                        variant="outlined"
                        autoFocus
                        required
                        name="ssn-1"
                        type="text"
                        maxLength={1}
                        className={classes.input}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                        InputProps={{
                          style: { fontFamily: 'IRANSansWeb', textAlign: 'center', display: 'inline-block', },
                        }}
                      />
                    </ValidatorForm>
                  </Grid>
                  <Grid item xs={2}>
                    <ValidatorForm className={classes.form} noValidate>
                      <TextField
                        size="normal"
                        variant="outlined"
                        required
                        name="ssn-2"
                        type="text"
                        maxLength={1}
                        className={classes.input}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                        InputProps={{
                          style: { fontFamily: 'IRANSansWeb', textAlign: 'center', display: 'inline-block', },
                        }}
                      />
                    </ValidatorForm>
                  </Grid>
                  <Grid item xs={2}>
                    <ValidatorForm className={classes.form} noValidate>
                      <TextField
                        size="normal"
                        variant="outlined"
                        required
                        name="ssn-3"
                        type="text"
                        data-testid="tf1"
                        maxLength={1}
                        className={classes.input}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                        InputProps={{
                          style: { fontFamily: 'IRANSansWeb', textAlign: 'center', display: 'inline-block', },
                        }}
                      />
                    </ValidatorForm>
                  </Grid>
                  <Grid item xs={2}>
                    <ValidatorForm className={classes.form} noValidate>
                      <TextField
                        size="normal"
                        variant="outlined"
                        required
                        name="ssn-4"
                        type="text"
                        maxLength={1}
                        className={classes.input}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                        InputProps={{
                          style: { fontFamily: 'IRANSansWeb', textAlign: 'center', display: 'inline-block', },
                        }}
                      />
                    </ValidatorForm>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      size="normal"
                      variant="outlined"
                      required
                      fullWidth
                      name="ssn-5"
                      type="text"
                      maxLength={1}
                      className={classes.input}
                      onChange={handleChange}
                      InputLabelProps={{ style: { fontFamily: 'IRANSansWeb' }, }}
                      InputProps={{
                        style: { fontFamily: 'IRANSansWeb', textAlign: 'center', display: 'inline-block', },
                      }}
                    />
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>

              </div>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid>

                    <Button
                      className={classes.bottomButton}
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={handleSend}
                    >
                      {'تایید'}

                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid>
                    <CountDownTimer hoursMinSecs={hoursMinSecs} />
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>

            </div>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const useStyles = makeStyles((theme) => ({
  '@global': {

  },
  bottomButton: {
    backgroundColor: '#2ab371',
    color: 'white',
    fontFamily: 'IRANSansWeb',
    transition: 'all 0.5s ease-in',
    "&:hover": {
      backgroundColor: '#0e918c',
      color: 'white'
    },
  },
  a: {
    color: '#3f407d',
    textDecoration: 'none',
  },
  header: {
    color: '#3f407d',
    // backgroundColor: '#5073ed',
    width: '100%',
    padding: '10px',
    borderRadius: '7px',
  },
  input: {
    // width: '30px',
    textAlign: 'center',
    display: 'inline-block',
  },
  container: {
    padding: '5%',
    color: 'black',
  },
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#f3f7fa',
    fontFamily: 'IRANSansWeb !important',
    padding: '20px',
    borderRadius: '10px',
    opacity: '95%',
  },
}));
// var [disButton,setDisButton] = this.props.disButton;
const CountDownTimer = ({ hoursMinSecs }) => {
  const classes = useStyles();
  const [disButton, setDisButton] = React.useState(true);
  const [userType, setUsertype] = React.useState(localStorage.getItem('userType') === "normal_user" ? "user" : "consultant");
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      reset()
    }
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };


  const reset = () => {
    setDisButton(false);
  };
  const handleClick = () => {
    const formData = new FormData();
    formData.append(
      "token",
      localStorage.getItem('token').split(' ')[1]
    );
    axios.post(serverURL() + userType + "/resent-code/", formData)
      .then(res => {
        console.log(res)
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
        setDisButton(true);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <Button
      className={classes.bottomButton}
      type="submit"
      disabled={disButton ? true : false}
      fullWidth
      variant="contained"
      style={{ backgroundColor: '#5073ed' }}
      onClick={handleClick}
    >
      {!disButton ?
        <p style={{ margin: '0' }}>{'ارسال دوباره'}</p>
        :
        <div style={{ fontFamily: 'IRANSansWeb', color: '#fff' }}>
          <p style={{ margin: '0' }}>{`${faNumber(mins
            .toString()
            .padStart(2, '0'))}:${faNumber(secs.toString().padStart(2, '0'))}`}</p>
        </div>}

    </Button>

  );
}
function faNumber(n) {
  const farsidigit = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "٫"];
  return n
    .toString()
    .split("")
    .map(x => x !== "." ? farsidigit[x] : farsidigit[10])
    .join("")
}
export default () => {
  const classes = useStyles();
  const ssnValues = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: "",
    ssn5: "",
  });
  const disButton = React.useState(true);
  const alert = React.useState(false);
  return (
    <VerifyEmail classes={classes} ssnValues={ssnValues} disButton={disButton} alert={alert} />
  )
}