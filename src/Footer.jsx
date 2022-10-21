import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
          <footer className='text-center footer mb-0'>
            <p className='mb-0 p-3'>© 2022 Copyright: <NavLink to="/"> Navbar.com </NavLink></p>
          </footer>
        </>
    );
};

export default Footer;