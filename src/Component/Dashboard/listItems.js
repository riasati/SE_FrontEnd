import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBullhorn,faThLarge,faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div style={{color: '#3f407d',}}>
      <Link to="/Dashboard" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button>
      <ListItemIcon>
      <FontAwesomeIcon icon={faThLarge}  style={{color: '#3f407d',fontSize:'25px',}}/>
      </ListItemIcon>
      <ListItemText primary="داشبورد" />
    </ListItem>
    </Link>
    <Link to="/Profile" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUser}  style={{color: '#3f407d',fontSize:'25px',}}/>
      </ListItemIcon>
      <ListItemText primary="پروفایل" />
    </ListItem>
    </Link>
    <Link to="/Channels" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button>
      <ListItemIcon>
      <FontAwesomeIcon icon={faBullhorn}  style={{color: '#3f407d',fontSize:'25px',}}/>
      </ListItemIcon>
      <ListItemText primary="کانال ها" />
    </ListItem>
    </Link>
    <Link to="/GroupingChannel" style={{color: '#3f407d', textDecoration: 'none',}}>
    <ListItem button>
      <ListItemIcon>
      <FontAwesomeIcon icon={faLayerGroup}  style={{color: '#3f407d',fontSize:'25px',}}/>
      </ListItemIcon>
      <ListItemText primary="دسته بندی" />
    </ListItem>
    </Link>
  </div>
);
export const secondaryListItems = (
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