import Nav from '../Nav'
import Foot from '../Foot'
import OrderApp from '../order_components/OrderApp.js'
import './order.css'

function Order(){
    return(
        <div>
        <h1>Order</h1>
        <Nav />
        <OrderApp />
        <Foot />
        </div>
    )
}

export default Order