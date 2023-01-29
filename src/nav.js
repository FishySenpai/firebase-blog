import React from 'react'
import Profile from './profile';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="bg-slate-600 flex justify-center text-gray-300 text-2xl p-6">
      <ul className="flex flex-row space-x-28">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          
            <Link to="/createblog">Create Blog</Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;