import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBullhorn,faThLarge,faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


export default function MainListItems(props){
    const classes = useStyles();
  return(
  <div style={{color: '#3f407d',}}>
      <Link to="/Dashboard" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button className={classes.ListItem}>
      <ListItemIcon>
      <FontAwesomeIcon icon={faThLarge}  className={classes.FontIcon}/>
      </ListItemIcon>
      <ListItemText primary="داشبورد" />
    </ListItem>
    </Link>
    <Link to="/GroupingChannel" style={{ textDecoration: 'none',}}>
    <ListItem button className={classes.ListItem}>
      <ListItemIcon>
      <FontAwesomeIcon icon={faLayerGroup}  className={classes.FontIcon}/>
      </ListItemIcon>
      <ListItemText primary="دسته بندی" />
    </ListItem>
    </Link>
    <Link to="/EditProfile" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button className={classes.ListItem}>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUser}  className={classes.FontIcon}/>
      </ListItemIcon>
      <ListItemText primary=" ویرایش اطلاعات" />
    </ListItem>
    </Link>
    <Link to="/Channels" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button className={classes.ListItem}>
      <ListItemIcon>
      <FontAwesomeIcon icon={faBullhorn}  className={classes.FontIcon}/>
      </ListItemIcon>
      <ListItemText primary="کانال ها" />
    </ListItem>
    </Link>
    
  </div>
)};
const useStyles = makeStyles((theme) => ({
    ListItem:{
        color: '#3f407d',
        transition: 'all 0.5s ease-in',
        "&:hover": {
            backgroundColor: '#3aacd8' ,
            color: 'white'
        },
    },
    FontIcon:{
        color: '#002b36',
        fontSize:'25px',
        "&:hover": {
            color: 'white'
        },
    },
}))
export const SecondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);