import React from 'react';
import './Header.css';
import Authorization from '../Authorization/Authorization.jsx';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const Header = () => {
    return <header className='header'>
        <Authorization />
        <Logo />
        <Navigation />
    </header>
}

export default Header;