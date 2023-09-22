import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'
import './nav.css'

export default function Nav() {
    return (
        <body className='navBar'>
          <Link to='/'><img src={navLogo} alt='Little Lemon' className='NavLogo'/></Link>
          <nav>
          <ul className='navLinks'>
              <li>
                  <Link to="/" className='NavButton'>Home</Link>
              </li>
              <li >
                  <Link to='/about' className='NavButton'>About</Link>
              </li>
              <li >
                  <Link to='/menu' className="NavButton">Menu</Link>
              </li>
              <li >
                  <Link to='/reservations' className="NavButton">Reservations</Link>
              </li>
              <li >
                  <Link to='/order' className="NavButton">Order</Link>
              </li>
              <li >
                  <Link to='/login' className='NavButton'>Login</Link>
              </li>
          </ul>
          </nav>
      </body>
    );
  }