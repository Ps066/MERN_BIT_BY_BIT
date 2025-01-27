import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import "./homepage.css";
import { Link } from "react-router";

const HomePage = () => {
    // fetching the currently logged in state from context api
    const { user , dispatch} = useContext(AuthContext);

    // function to handel logout of the user
    const handelLogout = ()=>{
        dispatch({type:"LOGOUT"});
    }

  return (
    <div className='homepage'>
      {user ? (
        <>
          <h3>Hello {user.username}! you are logged in</h3>
          <button className="homebutton" onClick={handelLogout}>Logout</button>
        </>
      ) : (
        <>
          <h3>No user is currently logged !!</h3>
          <Link to='/login' className="link"><button className="homebutton" >LOGIN</button></Link>
          <Link to='/register' className="link"><button className="homebutton" style={{backgroundColor:"tomato"}}>Register</button></Link>
        </>
      )}
    </div>
  );
};

export default HomePage;
