import Nav from '../Nav'
import Foot from '../Foot'
import './reservations.css'
import BookingPage from '../reservations_components/BookingPage'

function Res(){
    return(
        <div>
        <Nav />
        <BookingPage />
        <Foot />
        </div>
    )
}

export default Res