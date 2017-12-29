import React, { Component } from 'react';
import '../../styles/Header.css';
import logo from '../../logo.svg';
import Nav from '../Nav';

class Header extends Component {
  render() {
    return (
      <header className='Header-header'>
        <img src={logo} className='Header-logo' alt='logo' />
        <h1 className='Header-title'>The Dom Diggety 2</h1>
        <Nav pathname={this.props.location.pathname} />
      </header>
    );
  }
}

export default Header;