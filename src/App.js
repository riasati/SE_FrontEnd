import './App.css';
import React, {Component} from 'react';
import SignIn from "./Component/User/SignIn";
import SignUpConsultant from "./Component/User/SignUpConsultant";
import SignUpUser from "./Component/User/SignUpUser";
import Profile from './Component/User/Profile/Profile';
import MainPage from './Component/MainPage/MainPage';
import Channels from './Component/MainPage/Channels';
import Settings from './Component/MainPage/Settings';
import Dashboard from './Component/Dashboard/Dashboard';
import GroupingChannel from './Component/GroupingChannel/GroupingChannel';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={SignIn}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/SignUpConsultant" component={SignUpConsultant}/>
                    <Route path="/SignUpUser" component={SignUpUser}/>
                    <Route path="/Dashboard" children={<Dashboard title={'داشبورد'} />} component={MainPage}/>
                    <Route path="/Profile" children={<Dashboard title={'پروفایل'}/>} component={Profile}/>
                    <Route path="/Channels" children={<Dashboard title={'کانال ها'}/>} component={Channels}/>
                    <Route path="/GroupingChannel" children={<Dashboard title={'دسته بندی'}/>} component={GroupingChannel}/>
                    {/* <Route path="/Dashboard"  component={Dashboard}/> */}
                </Router>
            </div>
        );
    }
}

export default App;
