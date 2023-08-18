import * as React from 'react';
import { Link } from 'react-router-dom';
import footLogo from './pics/b.png'

export default function Foot() {
  return (
    <footer className='footer'>
        <div className='footLogo'>
            <img src={footLogo} alt='Little Lemon' />
        </div>
        <nav className='siteMap'>
            <h1>Site Map</h1>
            <ul className='footLinks'>
            <li className='homeFoot'>
                <Link to="/">Home</Link>
            </li>
            <li className='aboutFoot'>
                <Link to='/about'>About</Link>
            </li>
            <li className="menuFoot">
                <Link to='/menu'>Menu</Link>
            </li>
            <li className="resFoot">
                <Link to='/reservations'>Reservations</Link>
            </li>
            <li className="orderFoot">
                <Link to='/order'>Online Ordering</Link>
            </li>
            <li className='loginFoot'>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
        </nav>
        <div className='contact'>
            <h2>123 Street St.</h2>
            <h2>Chicago, IL</h2>
            <h2>12345</h2>
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
            </ul>
        </div>
    </footer>
  );
}