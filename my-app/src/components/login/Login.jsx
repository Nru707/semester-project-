import React from 'react';
import './LL.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = ( ) => {
    return(
        <div className='container'>
 <div className='wrapper'>
            <form action="">
                <h1>Welcome To Blink Basket</h1>
                <hr className='solid'/>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="  Username" required></input>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="  Password" required></input>
                    <FaLock className='icon'/>
                </div>

               <div className="remember-forgot">
                <label><input type='checkbox'></input>Remember me</label>
                <a href='#'>Forgot password ?</a>
               </div>

               <button type='submit'>Login</button>

               <div className="register-link">
                <p>Don't have an account?<a href='#'> Register</a></p>
               </div>
            </form>

        </div>
</div>
    );
}

export default Login;