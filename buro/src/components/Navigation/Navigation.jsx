import React from 'react';
import './Navigation.css';

function Navigation() {
    return <div className='menu'>
        <ul className='menu__list'>
            <li className='menu__list_item'>Мода</li>
            <li className='menu__list_item'>Культура</li>
            <li className='menu__list_item'>Красота</li>
            <li className='menu__list_item'>Технологии</li>
            <li className='menu__list_item'>Личность</li>
            <li className='menu__list_item'>Видео</li>
        </ul>
    </div>
}

export default Navigation;