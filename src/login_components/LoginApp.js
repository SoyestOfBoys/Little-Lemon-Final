import './loginApp.css'
import * as React from 'react';
import { Link } from 'react-router-dom';

function LoginApp(){
    return(
        <form>
            <h1>Little Lemon Login</h1>
            <div className='LoginBox'><label>Username: </label>
            <input type='text' />
            <label>Password: </label>
            <input type='password' />
            <button>Sign In</button>
            <Link to='/loginNew'>Create a New Account</Link>
            </div>
        </form>
    )
}

export default LoginApp