import React from 'react';
import './SS.css';

const Signup = ( ) => {
    return(
        <div className='container'>
 <div className='wrapper'>
            <form action="">
                <h1>Registration</h1><br />
                <div>
                    <label className='title'>Full Name</label>
                    <label className='title1'>Username</label><br />
                    <input type="text" className='ip' placeholder=" Enter your name" required></input>
                    <input type="text" className='ip' placeholder=" Enter your username" required></input>
                </div>
                <br />
                <div>
                    <label className='title'>Email</label>
                    <label className='title11'>Phone No.</label><br />
                    <input type="email" className='ip' placeholder=" Enter your email" required></input>
                    <input type="text" className='ip' placeholder=" Enter your number" required></input>
                </div>
                <br />
                <div>
                    <label className='title'>Password</label>
                    <label className='title1'>Confirm Password</label><br />
                    <input type="password" className='ip' placeholder=" Enter your password" required></input>
                    <input type="password" className='ip' placeholder=" Confirm your password" required></input>
                </div>
                <br />
                <div>
                    <h2>Gender</h2>
                    <input type="radio" name="male" value="male" className='radiob'/> Male 
                    <input type="radio" name="female" value="female" className='radiob'/> Female
                    <input type="radio" name="no" value="no" className='radiob'/> Prefer not to say
                </div>
                <br /><br />
                <button type='submit'>Register</button>

            </form>
        </div>
        </div>
    );
}

export default Signup;