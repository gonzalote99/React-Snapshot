import React from 'react';
import {NavLink} from 'react-router-dom';


function Navigation() {
  return(
    <nav className='main-nav'>
    <ul>
    <li><NavLink to='/mountain'>mountain</NavLink></li>   
      <li><NavLink to='/beach'>beach</NavLink></li>
      <li><NavLink to='/bird'>birds</NavLink></li>
      <li><NavLink to='/food'>food</NavLink></li>

    </ul>
    </nav>
  )
}

export default Navigation;