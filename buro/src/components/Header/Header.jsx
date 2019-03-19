import React from 'react';
import './Header.css';
import Authorization from '../Authorization/Authorization.jsx';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
    return <div className='header'>
        <div className='header__desktop'>
            <Authorization />
            <Logo />
            <Navigation />
        </div>
        <div className='header__tablet'>
            <Logo />
            <div className='header__tablet_box'>
                <Authorization className='authorization' />
                <Navigation />
            </div>
        </div>
    </div>
}

export default Header;