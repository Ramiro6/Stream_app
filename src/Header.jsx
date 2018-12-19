import React from 'react';
import GoogleAuth from './GoogleAuth.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
  <nav className="navbar">
    <Link className='navbar-brand' to='/'>Show List</Link>
    <div>
      <GoogleAuth />
    </div>
  </nav>
  )
}

export default Header
