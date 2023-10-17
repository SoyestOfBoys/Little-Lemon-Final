import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Home";
import BookingPage from "../reservations_components/BookingPage";
import ConfirmedBooking from '../reservations_components/ResGood';
import About from "./About";
import Login from "./Login";
import Menu from './Menu'
import Order from './Order'



const Main = () => {

    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="booking" element={<BookingPage availableTimes={state} 
                    dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="confirmed" element={<ConfirmedBooking/> } />
                <Route path="about" element={<About />} />
                <Route path='login' element={<Login />}  />
                <Route path='menu' element={<Menu />} />
                <Route path='order' element={<Order />} />
            </Routes>
        </main>


    )
}

export default Main;