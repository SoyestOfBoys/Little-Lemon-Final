import Nav from '../Nav'
import Foot from '../Foot'
import LoginApp from '../login_components/LoginApp'
import './login.css'

function Login(){
    return(
        <div>
        <Nav />
        <LoginApp />
        <Foot />
        </div>
    )
}

export default Login