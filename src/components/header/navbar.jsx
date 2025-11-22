import React from 'react'
import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <div>
      <h2>Personal finance</h2>
      <div>
       <ul>
            <Link to="/">
                <li>Home</li>
             </Link>
             <Link to="/credit">
                <li>Credit</li>
             </Link>
       </ul>
      </div>
    </div>
  )
}
export default Navbar;
