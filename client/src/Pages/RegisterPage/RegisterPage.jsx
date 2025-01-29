import './registerpage.css'
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';

const RegisterPage = () => {
    // use state hooks to store value of the user while registration
    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    // using use navigaet to change pages 
    const navigate = useNavigate();

    //function to handel registration process
    const handelRegister = async (e)=>{
        e.preventDefault();
        //try catch
        try {
            const res = await axios.post('/auth/register', {
                username:user,
                email:email,
                password:pass
            })

            console.log(res.data);
            navigate('/login', {replace:true});
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="RegisterPage">
        <div className="RegisterCard">
            <h1 className="RegisterHeadding">Register</h1>
            <form className="RegisterForm" onSubmit={handelRegister}> 
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Your Username' onChange={(e)=>{setUser(e.target.value)}} />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPass(e.target.value)}}/>
                <button className="RegisterFormButton" type='submit'>Register</button>
                <p className="RegisterConfirmText">Already have an account? 
                    <span>
                        <Link className='link' to="/login"> Login</Link>
                    </span>
                </p>
                <hr />
                <div className="RegisterFormIconButtons">
                    <i className="RegisterIconButton fa-brands fa-google"></i>
                    <i className="RegisterIconButton fa-brands fa-apple"></i>
                    <i className="RegisterIconButton fa-brands fa-facebook"></i>
                    <i className="RegisterIconButton fa-brands fa-windows"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage