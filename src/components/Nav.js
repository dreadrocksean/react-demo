import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  getClass(pathName) {
    return pathName === this.props.pathname ? 'active' : '';
  }

  render() {
    return (
      <nav className='Header-nav'>
        <ul>
          <li><Link to='/' className={this.getClass('/')}>Render</Link></li>
          <li><Link to='/render1' className={this.getClass('/render1')}>Render1</Link></li>
          <li><Link to='/render2' className={this.getClass('/render2')}>Render2</Link></li>
          <li><Link to='/render3' className={this.getClass('/render3')}>Render3</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
