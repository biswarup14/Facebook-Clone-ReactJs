import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
const [ {state} , dispatch] = useStateValue("");

const signIn = () =>{ 
auth.signInWithPopup(provider)
.then(result => {
dispatch({
    type: actionTypes.SET_USER,
    user: result.user,
});

    console.log(result.user);
})
.catch(error => alert(error.message)) 
}

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
                alt=""
                />
                <img src="https://covington-oh.gov/wp-content/uploads/2020/12/Facebook-Logo.png"
                alt="" />
                </div>
            <Button type="submit" onClick={signIn}>
                Sign Into Facebook</Button>
        </div>
    )
}

export default Login 
