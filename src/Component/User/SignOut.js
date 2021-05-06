import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import axios from 'axios' ;
export const signOut = (props) =>{ 
  alert(props)
      axios.post( serverURL() + props +"/logout/" ,{},TokenConfig() )
          .then(res =>{
              console.log(res);
            localStorage.removeItem('token');
            window.location.href = "/signIn" ;
          })
          .catch(err =>{
            console.log(err);
          }) 
}