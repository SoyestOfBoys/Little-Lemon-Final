import Nav from '../Nav'
import Foot from '../Foot'

function OrderGood(){
    return(
        <body>
            <Nav />
            <div>
                <h1>We have your order!</h1>
                <p>We have sent you a confirmation email.</p>
            </div>
            <Foot />
        </body>
    )
}

export default OrderGood