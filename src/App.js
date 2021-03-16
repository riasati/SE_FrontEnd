import './App.css';
import React, {Component} from 'react';
import SignIn from "./Component/User/SignIn";
import SignUp from "./Component/User/SignUp";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={SignIn}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/signUp" component={SignUp}/>
                </Router>
            </div>
        );
    }
}

export default App;
