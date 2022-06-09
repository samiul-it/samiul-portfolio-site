import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <Link to="/" class="btn btn-ghost normal-case text-2xl">Samiul</Link>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li tabIndex="0">
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;