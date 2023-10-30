import './loginApp.css'
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginApp(){
    const navigate = useNavigate()

    const handleSumbitLogin = (e) => {
		e.preventDefault();
        navigate('/logingood')
		};

    return(
        <body className="LoginApp">
            <form onSubmit={handleSumbitLogin}>
                <h1>Little Lemon Login</h1>
                <fieldset  className='LoginBox'>
                    <div>
                        <div className='LoginInput'><label>Username: </label>
                        <input required type='text' /></div>
                        <div className='LoginInput'><label>Password: </label>
                        <input required type='password' /></div>
                        <div className='LoginButton'><input className='LoginNewButton' aria-label="On Click"
                            type={"submit"} value={"Create Account"} /></div>
                        <div><Link to='/loginNew'>Create a New Account</Link></div>
                    </div>
                </fieldset>
            </form>
        </body>
    )
}

export default LoginApp