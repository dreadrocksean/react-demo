import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Nav = ({ pathname }) => {

  const getClass = path => {
    return path === pathname ? 'active' : '';
  }

  return (
    <nav className='Header-nav'>
      <ul>
        <li><Link to='/' className={getClass('/')}>Render</Link></li>
        <li><Link to='/render1' className={getClass('/render1')}>Render1</Link></li>
        <li><Link to='/render2' className={getClass('/render2')}>Render2</Link></li>
        <li><Link to='/render3' className={getClass('/render3')}>Render3</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
