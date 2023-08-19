import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'
import './nav.css'

export default function Nav() {
  return (
    <header className='navBar'>
        <div >
            <Link to='/'><img src={navLogo} alt='Little Lemon' className='navLogo'/></Link>
        </div>
        <nav>
        <ul className='navLinks'>
            <li>
                <Link to="/"><button  className='homeNav'>Home</button></Link>
            </li>
            <li >
                <Link to='/about'><button className='aboutNav'>About</button></Link>
            </li>
            <li >
                <Link to='/menu'><button className="menuNav">Menu</button></Link>
            </li>
            <li >
                <Link to='/reservations'><button className="resNav">Reservations</button></Link>
            </li>
            <li >
                <Link to='/order'><button className="orderNav">Online Ordering</button></Link>
            </li>
            <li >
                <Link to='/login'><button className='loginNav'>Login</button></Link>
            </li>
        </ul>
        </nav>
    </header>
  );
}