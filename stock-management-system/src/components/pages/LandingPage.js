import React, { useState }  from 'react'
import BackgroundImage from '../../assets/images/bg.PNG'
import Login from '../../authenticate/Login'


export default function LandingPage() {
  
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Stock Management System</h1>
            <Login/>
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