import React, {Component} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
class Profile extends Component{
    render(){
        return(
            <div style={{width:'80%',height:'500px',backgroundColor:'green'}}>
                <CssBaseline/>

                Profile</div>
        )
    }
}

export default () => {
    return (
        <Profile/>
    )
}