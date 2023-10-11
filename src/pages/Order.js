import Nav from '../Nav'
import Foot from '../Foot'
import OrderApp from '../order_components/OrderApp.js'
import './order.css'

function Order(){
    return(
        <div>
        <Nav />
        <OrderApp />
        <Foot />
        </div>
    )
}

export default Order