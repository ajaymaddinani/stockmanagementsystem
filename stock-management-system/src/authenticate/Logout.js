import React from 'react'
import {  GoogleLogout } from 'react-google-login';
import { useHistory  } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'

export default function Logout()
{
    let history = useHistory();
    const clientId = "365309499663-se0udqcf102jspmokbqgf14non0ifuav.apps.googleusercontent.com";
    const onSignoutSuccess = () => {
        history.push('/');
        };

    const logoutStyle = {
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    
    return(
    <div>
   <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
            style={{background:"red"}}
            render={renderProps => (
                <Button negative onClick={renderProps.onClick} >Logout</Button>
                )}
            />
   
    
    </div >

)
};