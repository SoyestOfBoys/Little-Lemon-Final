import * as React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './pics/header_logo.png'
import './nav.css'
import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen( !hamburgerOpen )
    }

    return (
        <body className='navBar'>
          <nav>
            <div  className='NavList'>
          <Link to='/'><img src={navLogo} alt='Little Lemon' className='NavLogoMobile'/></Link>
          <ul className='navLinks'>
          <Link to='/'><img src={navLogo} alt='Little Lemon' className='NavLogoWeb'/></Link>
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
          </ul></div>
                <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                </div>

            <style jsx>{`

            @media (max-width: 767px){
                nav ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                }
            }
        `}</style>
          </nav>
      </body>
    );
  }