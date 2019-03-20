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
        <div className='menu__background'>
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

                    <input type="checkbox" name="arrow" id="arrow1" hidden />
                    <input type="checkbox" name="arrow" id="arrow2" hidden />
                    <input type="checkbox" name="arrow" id="arrow3" hidden />
                    <input type="checkbox" name="arrow" id="arrow4" hidden />
                    <input type="checkbox" name="arrow" id="arrow5" hidden />
                    <input type="checkbox" name="arrow" id="arrow6" hidden />


                    <li className='menu__list_item menu__list_item-fashion'>
                        <label htmlFor='arrow1' className='menu__list_item_link arrow_1'>Мода</label>
                        <ul className='submenu submenu__fashion'>
                            <li className='submenu__item '>
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
                    <li className='menu__list_item menu__list_item-culture'>
                        <label htmlFor='arrow2' className='menu__list_item_link arrow_2'>Культура</label>
                        <ul className='submenu submenu__culture'>
                            <li className='submenu__item '>
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
                            <li className='submenu__item submenu__item_padding'>
                                <a className='submenu__item_link' href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className='menu__list_item menu__list_item-beauty'>
                        <label htmlFor='arrow3' className='menu__list_item_link arrow_3'>Красота</label>
                        <ul className='submenu submenu__beauty'>
                            <li className='submenu__item '>
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
                            <li className='submenu__item submenu__item_padding'>
                                <a className='submenu__item_link' href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className='menu__list_item menu__list_item-technology'>
                        <label htmlFor='arrow4' className='menu__list_item_link arrow_4'>Технологии</label>
                        <ul className='submenu submenu__technology'>
                            <li className='submenu__item '>
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
                            <li className='submenu__item submenu__item_padding'>
                                <a className='submenu__item_link' href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className='menu__list_item menu__list_item-personality'>
                        <label htmlFor='arrow5' className='menu__list_item_link arrow_5'>Личность</label>
                        <ul className='submenu submenu__personality'>
                            <li className='submenu__item '>
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
                            <li className='submenu__item submenu__item_padding'>
                                <a className='submenu__item_link' href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className='menu__list_item menu__list_item-video'>
                        <label htmlFor='arrow6' className='menu__list_item_link arrow_6'>Видео</label>
                        <ul className='submenu submenu__video'>
                            <li className='submenu__item '>
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
                            <li className='submenu__item submenu__item_padding'>
                                <a className='submenu__item_link' href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Navigation;