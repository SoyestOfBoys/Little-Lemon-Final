import './orderApp.css'
import DoorDash from '../pics/doordash.png'
import Uber from '../pics/UberEats.png'
import GrubHub from '../pics/Grubhub Logo.png'

export default function OrderApp() {


    return(
        <body className='Order'>
           <div>
                <h1>Order for pickup or delivery from our partners:</h1>
           </div>
           <div>
                <ul>
                    <li><a href='https://www.doordash.com/'><img src={DoorDash} alt='Door Dash' /></a></li>
                    <li><a href="https://www.ubereats.com/" ><img src={Uber} alt='Uber Eats' /></a></li>
                    <li><a href='https://www.grubhub.com/'><img src={GrubHub} alt="GrubHub" /></a></li>
                </ul>
           </div>
        </body>
    )
}