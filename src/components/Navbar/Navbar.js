import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className="navbar bg-base-100">
      <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal p-0"> 
      <li><Link to='/Topics'>Topics</Link></li>
      <li><Link to='/Statistics'>Statistics</Link></li> 
      <li><Link to='/Blog'>Blog</Link></li>
    </ul>
  </div>
</div>
 </div>
    );
};

export default Navbar;