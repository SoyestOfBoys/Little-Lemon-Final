import './BookingPage.css'
import BookingForm from './BookingForm'

const BookingPage = (props) =>{
    return(
        <div className='FormDiv'>
            <h1>Book Your Table</h1>
                <div className='Form'>
                    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}
                    submitForm={props.submitForm}/>
                </div>
        </div>
    )
}

export default BookingPage
