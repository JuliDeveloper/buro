import React from 'react';
import './Header.css';
import Authorization from '../Authorization/Authorization.jsx';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
    return <div className='header'>
        <Authorization />
        <Logo />
        <Navigation />
    </div>
}

export default Header;