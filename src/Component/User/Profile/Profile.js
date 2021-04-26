import React, {Component} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';
import serverURL from "../../../RequestConfig/serverURL";
import TokenConfig from "../../../RequestConfig/TokenConfig";
import UserProfile from './UserProfile';
import ConsultantProfile from './ConsultantProfile';
class Profile extends Component{
    constructor() {
        super();
        this.state = {
            userType: '',
            data: '',
        }
    }
    componentWillMount() {
        axios.get(serverURL() + "profile/",TokenConfig())
            .then(res=>{
                console.log(res)
                this.setState({userType : res.data.user_type})
                this.setState({data : res.data})
                console.log(this.state)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        return(
            <div>
                {this.state.userType === "normal_user" ?
                    <UserProfile  /> : <ConsultantProfile/>
                }
            </div>
        )
    }
}

export default () => {
    return (
        <Profile/>
    )
}