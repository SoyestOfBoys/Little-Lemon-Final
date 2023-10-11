import Nav from '../Nav'
import Foot from '../Foot'

function NewAccountGood(){
    return(
        <body>
            <Nav />
            <div>
                <h1>Account Created!</h1>
                <p>A confrimation email has been sent to your account.</p>
                <p>Thank you for joining the Little Lemon family!</p>
            </div>
            <Foot />
        </body>
    )
}

export default NewAccountGood