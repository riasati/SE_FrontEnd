import './App.css';
import React, {Component} from 'react';
import SignIn from "./Component/User/SignIn";
import SignUpConsultant from "./Component/User/SignUpConsultant";
import SignUpUser from "./Component/User/SignUpUser";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Channel from "./Component/Channel/ChannelPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={Channel}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/SignUpConsultant" component={SignUpConsultant}/>
                    <Route path="/SignUpUser" component={SignUpUser}/>
                    <Route path="/ChannelPage" component={Channel}/>
                </Router>
            </div>
        );
    }
}

export default App;
