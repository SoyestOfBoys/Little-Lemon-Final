import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'
import './nav.css'

export default function Nav() {
    return (
        <body className='navBar'>
          <nav>
          <ul className='navLinks'>
          <Link to='/'><img src={navLogo} alt='Little Lemon' className='NavLogo'/></Link>
              <li className='NavButton'>
                  <Link to="/" className="NavLink">Home</Link>
              </li>
              <li className='NavButton'>
                  <Link to='/about' className="NavLink">About</Link>
              </li>
              <li className='NavButton'>
                  <Link to='/menu' className="NavLink">Menu</Link>
              </li>
              <li className='NavButton'>
                  <Link to='/booking' className="NavLink">Reservations</Link>
              </li>
              <li className='NavButton'>
                  <Link to='/order' className="NavLink">Order</Link>
              </li>
              <li className='NavButton'>
                  <Link to='/login' className="NavLink">Login</Link>
              </li>
          </ul>
          </nav>
      </body>
    );
  }