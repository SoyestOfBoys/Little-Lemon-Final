import './BookingForm.css'
import React, { useState } from "react";


// Need to set date, time, party size, occasion, and submit button

const BookingForm = (props) => {

	const [occasion, setOccasion] = useState("default1");
	const [guests, setGuests] = useState("");
	const [date, setDate] = useState("");
	const [times, setTimes] = useState("")
	const [name, setName] = useState("")
	const [phone1, setPhone1] = useState("")
	const [phone2, setPhone2] = useState("")
	const [phone3, setPhone3] = useState("")
	const [email, setEmail]  = useState("")
	const [comments, setComments] = useState('')

	const handleSumbit = (e) => {
		e.preventDefault();
		props.submitForm(e);
		};

	const handleChange = (e) => {
		 setDate(e);
		 props.dispatch(e);
		}

	const [isChecked, setIsChecked] = useState(false)

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	}


return  (
	<form className='ResForm' onSubmit={handleSumbit}>
		<fieldset className='feildset'>

		<div>
			<label htmlFor="book-date">Choose Date:</label>
			<input id="book-date" value={date} onChange={(e) =>
			handleChange(e.target.value)} type="date" required/>
		</div>

		<div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) =>
				setTimes(e.target.value)} required>
                <option value="">Select a Time:</option>
               {props.availableTimes.availableTimes.map(availableTimes =>
				{return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
        </div>

		<div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) =>
				{setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
        </div>


		<div><lable htmlFor='name'>
			Name:
		</lable>
		<input className='ShortText' required placeholder='Name' type='text' id='name' name='name'
		 value={name} onChange={(e) =>
			{setName(e.target.value)}}/></div>

	<div className='phone'><label htmlFor='phone'>
			Phone:
		</label>
		+1 (<input inputmode='numeric'  required placeholder='XXX' type='tel' id='tel' name='tel'
		 value={phone1} minLength={3} maxLength={3} size='3' pattern="[0-9]{3}" onChange={(e) => {setPhone1(e.target.value)}}/>
		 )
		 <input inputmode='numeric' required placeholder='XXX' type='tel' id='tel' name='tel'
		 value={phone2} minLength={3} maxLength={3} size='3' pattern="[0-9]{3}" onChange={(e) => {setPhone2(e.target.value)}}/>
		 -
		 <input inputmode='numeric'  required placeholder='XXXX' type='tel' id='tel' name='tel'
		 value={phone3} minLength={4} maxLength={4} size='4' pattern="[0-9]{4}" onChange={(e) => {setPhone3(e.target.value)}}/>
	</div>

	<div><lable htmlFor='email'>
			Email:
		</lable>
		<input className='ShortText' required placeholder='Email' type='email' id='email' name='email'
		value={email} onChange={(e) => {setEmail(e.target.value)}} /></div>

		<div><lable htmlFor='book-occasion'>
				Are you celebating a special occasion with us?
			</lable>
			<input  type='checkbox' id='event' name='event'
			 onChange={handleCheckboxChange} />Yes
			<select disabled={isChecked ? false : true} required name='EventSelect'
			 value={occasion} onChange={(e) => setOccasion(e.target.value)}>
					<option disabled value='default1'>Select Occasion</option>
					<option value='Birthday'>Birthday</option>
                	<option value='Engagement'>Engagement</option>
                	<option value='Anniversary'>Anniversary</option>
               		<option value='Business'>Business</option>
                	<option value='Other'>Other</option>
				</select></div>

			<div><label htmlFor='comments'>Comments and Special Requests:</label></div>
				<div><textarea className='LongText' id='comments' name='comments'
				 value={comments} onChange={(e) => {setComments(e.target.value)}}
				 placeholder='How can we best serve you?'/></div>

			<div>
              <input className='ResButton' aria-label="On Click" type={"submit"} value={"Book Now"}></input>
            </div>

						</fieldset>
			</form>
	);
}

export default BookingForm