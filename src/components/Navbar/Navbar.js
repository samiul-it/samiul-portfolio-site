import React from 'react';

const Navbar = () => {
    return (
      <div>
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Samiul</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li>
                <a>Skills</a>
              </li>
              <li tabIndex="0">
            
                <a>Projects</a>
              </li>
              <li>
                  <a href="">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;