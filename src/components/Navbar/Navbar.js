import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navlogo' onClick={() => setOpen(false)}>
        Logo
      </Link>
      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link' onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/services'
            className='nav-link'
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className='nav-link'
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
