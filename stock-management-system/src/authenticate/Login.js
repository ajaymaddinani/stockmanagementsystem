import React, { useState }  from 'react'
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const clientId = "365309499663-se0udqcf102jspmokbqgf14non0ifuav.apps.googleusercontent.com";

export default function LandingPage() {
    const [showloginButton, setShowloginButton] = useState(true);
    let history = useHistory();
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        history.push({
            pathname: '/home',
            state: { detail: res.profileObj }
          })
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    
    return (
       
        <div className="buttons text-center">
        { showloginButton ?
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                redirectUri='http://localhost:3000/home'
                
            /> : null}
        </div>
    )
}
 