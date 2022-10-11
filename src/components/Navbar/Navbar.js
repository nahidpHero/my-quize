import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className="navbar bg-cyan-600">
      <div className="flex-1">
      <a className="btn btn-ghost normal-case text-3xl font-bold text-white">My Quiz</a>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal p-3 text-xl  text-white"> 
      <li><Link to='/topics'>Topics</Link></li>
      <li><Link to='/statistics'>Statistics</Link></li> 
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>
</div>
 </div>
    );
};

export default Navbar;