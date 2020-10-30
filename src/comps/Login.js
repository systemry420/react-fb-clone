import React from 'react'
import './../App.css'
import Button from '@material-ui/core/Button';
import {auth, provider } from './../firebase'

function Login() {
    const signIn = (e) =>{
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=> alert (error.message))
    }

    return (
        <div className="login">
            <div className="logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="logo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
