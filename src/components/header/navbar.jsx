import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

 function Navbar() {
  return (
    <div className='container'>
      <h2>Personal finance</h2>
      <div className='menu-btn'>
       
            <Link to="/">
                <li>Home</li>
             </Link>
             <Link to="/credit">
                <li>Credit</li>
             </Link>
             <Link to="/login">
                <li>Login</li>
            </Link>
       
      </div>
    </div>
  )
}
export default Navbar;
