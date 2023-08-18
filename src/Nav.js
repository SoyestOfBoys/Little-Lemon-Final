import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'

export default function Nav() {
  return (
    <header className='navBar'>
        <div className='navLogo'>
            <Link to='/'><img src={navLogo} alt='Little Lemon' /></Link>
        </div>
        <nav>
        <ul className='navLinks'>
        <li className='homeNav'>
                <Link to="/">Home</Link>
            </li>
            <li className='aboutNav'>
                <Link to='/about'>About</Link>
            </li>
            <li className="menuNav">
                <Link to='/menu'>Menu</Link>
            </li>
            <li className="resNav">
                <Link to='/reservations'>Reservations</Link>
            </li>
            <li className="orderNav">
                <Link to='/order'>Online Ordering</Link>
            </li>
            <li className='loginNav'>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
        </nav>
    </header>
  );
}