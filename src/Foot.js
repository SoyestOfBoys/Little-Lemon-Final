import * as React from 'react';
import { Link } from 'react-router-dom';
import footLogo from './pics/b.png'
import './foot.css'

export default function Foot() {
  return (
    <footer className='footer'>
        <div>
            <img src={footLogo} alt='Little Lemon'  className='footLogo'/>
        </div>
        <nav className='siteMap'>
            <h1>Site Map</h1>
            <ul className='footList'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/reservations'>Reservations</Link>
            </li>
            <li>
                <Link to='/order'>Online Ordering</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
        </nav>
        <div className='contact'>
            <h1>Contact Info</h1>
                <div className='Address'>
                <h2>123 Street St.</h2>
                <h2>Chicago, IL</h2>
                <h2>12345</h2>
                </div>
            <p>(555) 012-3451</p>
            <p>email@email.com</p>
        </div>
        <div className='socials'>
            <h1>Social Media</h1>
            <ul>
                <li><a href='https://www.facebook.com/'>Facebook</a></li>
                <li><a href='https://www.instagram.com/'>Instagram</a></li>
                <li><a href='https://twitter.com/?lang=en'>Twitter</a></li>
                <li><a href='https://www.pinterest.com/'>Pinterest</a></li>
                <li><a href='https://www.tiktok.com/'>TikTok</a></li>
                <li><a href='https://www.yelp.com/'>Yelp</a></li>
            </ul>
        </div>
    </footer>
  );
}