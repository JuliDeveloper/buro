import React from 'react';
import './Navigation.css';

function Navigation() {
    return <div className='menu'>
        <input type="checkbox" name="menu" id="menu" hidden/>
        <label className='menu__open' htmlFor="menu">
            <span className='menu__open_line'></span>
            <span className='menu__open_line'></span>
            <span className='menu__open_line'></span>
        </label>
        <div className='menu__container'>
            <div className='box'>
                <form className='box__form' action="" method="get">
                    <input className='box__search' name="search" placeholder="Введите слово, автора или" type="text" />
                    <button className='box__search-image' type="submit"></button>
                </form>
                <label className='menu__close' htmlFor="menu"></label>
            </div>
            <a className='link__start-page' href="#">Главная</a>
            <ul className='menu__list'>

                <input type="checkbox" name="arrow1" id="arrow1" hidden />
                <input type="checkbox" name="arrow2" id="arrow2" hidden />
                <input type="checkbox" name="arrow3" id="arrow3" hidden />
                <input type="checkbox" name="arrow4" id="arrow4" hidden />
                <input type="checkbox" name="arrow5" id="arrow5" hidden />
                <input type="checkbox" name="arrow6" id="arrow6" hidden />


                <li className='menu__list_item'>
                    <label htmlFor='arrow1' className='menu__list_item_link'>Мода</label>
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Авторы</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Подписчики</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Медиа</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Агенты</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Инструкции</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Вакансии</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Авторы</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Подписчики</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Медиа</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Агенты</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Инструкции</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__item_link' href="#">Вакансии</a>
                        </li>
                    </ul>
                </li>
                <li className='menu__list_item'>
                    <label htmlFor='arrow2' className='menu__list_item_link'>Культура</label>
                </li>
                <li className='menu__list_item'>
                    <label htmlFor='arrow3' className='menu__list_item_link'>Красота</label>
                </li>
                <li className='menu__list_item'>
                    <label htmlFor='arrow4' className='menu__list_item_link'>Технологии</label>
                </li>
                <li className='menu__list_item'>
                    <label htmlFor='arrow5' className='menu__list_item_link'>Личность</label>
                </li>
                <li className='menu__list_item'>
                    <label htmlFor='arrow6' className='menu__list_item_link'>Видео</label>
                </li>
            </ul>
        </div>
        
    </div>
}

export default Navigation;