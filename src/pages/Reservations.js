import Nav from '../Nav'
import Foot from '../Foot'
import './reservations.css'
import BookingForm from '../reservations_components/BookingForm'

const Reservations = (props) =>{
    return(
        <div>
        <Nav />
        <BookingForm availalbeTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.SubmitForm} />
        <Foot />
        </div>
    )
}

export default Reservations