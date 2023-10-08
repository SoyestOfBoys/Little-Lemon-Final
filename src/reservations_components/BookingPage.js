import './BookingPage.css'
import BookingForm from './BookingForm'

function BookingPage(){
    return(
        <div className='FormDiv'>
            <h1>Reservation Form</h1>
            <div className='Form'>
                <BookingForm />
            </div>
        </div>
    )
}

export default BookingPage