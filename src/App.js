import './App.css';
import React, {Component} from 'react';
import SignIn from "./Component/User/SignIn";
import SignUpConsultant from "./Component/User/SignUpConsultant";
import SignUpUser from "./Component/User/SignUpUser";
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
                </Router>
            </div>
        );
    }
}

export default App;
