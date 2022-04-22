import React, { useState }  from 'react'
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

const clientId = "365309499663-se0udqcf102jspmokbqgf14non0ifuav.apps.googleusercontent.com";

export default function LandingPage() {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    let history = useHistory();
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        history.push(`/home/${res.profileObj.name}`);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Stock Management System</h1>
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
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}