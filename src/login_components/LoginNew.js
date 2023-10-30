import './LoginNew.css'
import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from 'react-router-dom';

function LoginNew(){
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleNewLogin = (e) => {
		e.preventDefault();
        navigate('/loginnewgood')
		};

    return(
        <body className="LoginNew">
            <form onSubmit={handleNewLogin}>
                <h1>Create Your Account</h1>
                <fieldset  className='LoginNewBox'>
                    <div>

                        <div className='LoginInput'><label>Email: </label>
                        <input type='email' value={email} required onChange={e =>
                        setEmail(e.target.value)}/></div>

                        <div className='LoginInput'><label>Username: </label>
                        <input type='text' value={username} required onChange={e =>
                        setUsername(e.target.value)}/></div>

                        <div className='LoginInput'><label>Password:</label>
                        <input required  type="password" onChange={e =>
                            setPassword(e.target.value)} /></div>

                        <div className='LoginInput'><label>Reenter Password:</label>
                        <input required type="password" onChange={e =>
                            setPasswordAgain(e.target.value)} /></div>

                        <div className='PassReqs'><PasswordChecklist
				            rules={["minLength","specialChar","number","capital","match"]}
				            minLength={5}
				            value={password}
				            valueAgain={passwordAgain}
				            onChange={(isValid) => {}} />
                        </div>

                        <div >
                            <input className='LoginNewButton' aria-label="On Click"
                            type={"submit"} value={"Create Account"} />
                        </div>
                    </div>
                </fieldset>
            </form>
        </body>
    )
}

export default LoginNew
