import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <section id='navdiv'>
      <div><img src="applogo.png" id='logo' /></div>
      
    <div>
        <nav>
          <ul>
            <li className='menuitem' id="menuitemid"><a href="#headermaindiv">Home</a></li>
            <li className='menuitem' id="menuitemid"><a href="#aboutus">About</a></li>
            <li className='menuitem' id="menuitemid"><a href="#specialmenu">Menu</a></li>
            <li className='menuitem' id="menuitemid"><a href="#awards">Awards</a></li>
            <li className='menuitem' id="menuitemid"><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    </div>

      <div>
        <ul>
          <li className='secondmenuitem'>Log In / Register</li>
          <li className='secondmenuitem'>Book Table</li>
        </ul>
    </div>
  </section>
  )
}

export default Navbar;
