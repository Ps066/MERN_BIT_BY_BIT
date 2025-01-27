import React, { useContext, useRef } from 'react'
import './loginpage.css'
import { Link } from "react-router";
import { AuthContext } from '../../Context/Context';
import axios from 'axios';

const LoginPage = () => {
    // user ref method to fetch the form input data
    const userRef = useRef();
    const passRef = useRef();

    // importing context 
    const {dispatch} = useContext(AuthContext);


    // function to handel login 
    const handelLogin = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});  // dispatched teh login start action
        try {
            const res = await axios.post('/auth/login', {
                username:userRef.current.value,
                password:passRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            window.location.replace('/');
        } catch (error) {
            dispatch({type:"LOGIN_FAILED",payload:error});
        }
    }

  return (
    <div className="loginPage">
        <div className="loginCard">
            <h1 className="loginHeadding">Login</h1>
            <form className="loginForm" onSubmit={handelLogin}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Your username' ref={userRef}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' ref={passRef}/>
                <button className="loginFormButton" type='submit'>Login</button>
                <p className="loginConfirmText">Don't have an account? 
                    <span>
                        <Link className='link' to="/register"> Register Now!</Link>
                    </span>
                </p>
                <hr />
                <div className="loginFormIconButtons">
                    <i className="loginIconButton fa-brands fa-google"></i>
                    <i className="loginIconButton fa-brands fa-apple"></i>
                    <i className="loginIconButton fa-brands fa-facebook"></i>
                    <i className="loginIconButton fa-brands fa-windows"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage