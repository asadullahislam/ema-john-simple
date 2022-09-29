import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
      <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="/about">Shop</a>
            <a href="/about">Order</a>
            <a href="/about">Inventory</a>
            <a href="/about">About</a>
        </div>
      </nav>


  
    );
};

export default Header;