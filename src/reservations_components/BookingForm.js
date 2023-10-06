import { FlashAuto } from '@material-ui/icons';
import './BookingForm.css'
import React, { useState } from "react";

// Need to set date, time, party size, occasion, and submit button

export default function BookingForm() {

	const [formData, setFormData] = useState({})

	const [selectedTime, setSelectedTime] = useState("default");

	    const  handleDropdownChange = (event) => {
		setSelectedTime(event.target.value);
	};

	const [selectedOccasion, setSelectedOccasion] = useState("default1");

	    const  handleDropdownChange2 = (event) => {
		setSelectedOccasion(event.target.value);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	 };

	const handleSubmit = (event) => {
		event.preventDefault();
		alert()
	}

	const [isChecked, setIsChecked] = useState(false)

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	}

return  (
	<form className='ResForm' onSubmit={handleSubmit}>

		<div><lable htmlFor='name'>
			Name:
		</lable>
		<input required placeholder='Name' type='text' id='name' name='name' value={formData.name} onChange={handleChange}/></div>

		<div><label htmlFor='phone'>
			Phone:
		</label>
		<input required placeholder='Phone Number' type='tel' id='tel' name='tel' value={formData.tel} onChange={handleChange}/></div>


		<div><lable htmlFor='email'>
			Email:
		</lable>
		<input required placeholder='Email' type='email' id='email' name='email' value={formData.email} onChange={handleChange}/></div>

		<div><label>
			Date:
		</label>
		<input required type='date' id='date' name='date' value={formData.date} onChange={handleChange}/></div>

		<div><label htmlFor='time'>
				Time:</label>
				<select required value={selectedTime} onChange={handleDropdownChange} defaultValue={'default'}>
					<option disabled value='default'>Select Time</option>
					<option value='17:00'>17:00</option>
                	<option value='18:00'>18:00</option>
                	<option value='19:00'>19:00</option>
               		<option value='20:00'>20:00</option>
                	<option value='21:00'>21:00</option>
               	 	<option value='22:00'>22:00</option>
				</select></div>

			<div><lable htmlFor='guests'>
				Party Size:
			</lable>
			<input required type='number' id='guests' name='guests' value={formData.guest} onChange={handleChange} placeholder='Guest#' min='1' max='10'/></div>

			<div><lable htmlFor='event'>
				Are you celebating a special occasion with us?
			</lable>
			<input  type='checkbox' id='event' name='event' value={formData.eventTrue} onChange={handleCheckboxChange} />Yes</div>

			<div><lable htmlFor='occasion'>
				Occasion
			</lable>
			<select disabled={isChecked ? false : true} required name='EventSelect'  value={selectedOccasion} onChange={handleDropdownChange2}>
					<option disabled value='default1'>Select Occasion</option>
					<option value='Birthday'>Birthday</option>
                	<option value='Engagement'>Engagement</option>
                	<option value='Anniversary'>Anniversary</option>
               		<option value='Business'>Business</option>
                	<option value='Other'>Other</option>
				</select></div>

				<div><label htmlFor='comments'>Comments and Special Requests:</label>
				<input type='text' id='comments' name='comments' value={formData.comments} onChange={handleChange} placeholder='How can we best serve you?'/></div>

				<button className='ResButton' type='submit'>Make Your Reservation</button>
				</form>
	);
}