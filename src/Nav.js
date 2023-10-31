import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'
import './nav.css'
import Hamburger from './pics/hamburger_icon_ll.png'

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
          <a  href="javascript:void(0);" class="icon" onclick="myFunction()">
            <img disable className='Hamburger' src={Hamburger} alt='menu' />
          </a>
          </nav>
      </body>
    );
  }