import React, {Component} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
class Settings extends Component{
    render(){
        return(
            <div style={{width:'80%',height:'500px',backgroundColor:'green'}}>
                <CssBaseline />Settings</div>
        )
    }
}

export default () => {
    return (
        <Settings/>
    )
}