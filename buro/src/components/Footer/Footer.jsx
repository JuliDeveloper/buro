import React from 'react';
import './Footer.css';
import List from '../List/List.jsx';

function Footer() {
    return <div className='footer'>
        <div className='footer__box'>
            <div className='footer__up'>
                <span className='footer__up_arrow'></span>
                <a className='footer__up_link' href="#">Вернуться наверх</a>
            </div>
        </div>
        <div className='footer__lists'>
            <List title='Контакты' item1='Поиск' item2='Просмотры' item3='Комментарии' item4='Прочее' border__css='grid_a' />
            <List title='О проекте' item1='Авторы' item2='Подписчики' item3='Медиа' item4='Агенты' item5='Инструкции' item6='Вакансии' border__css='list__border grid_b' />
            <List title='Подписки' item1='Подписка' item2='Новости' item3='Создать аккаунт' item4='Личный кабинет' border__css='list__border grid_c' />
            <List title='Архив статей' item1='Искусство' item2='Кино' item3='Музыка' item4='Театр' item5='Мода' item6='Поп-культура' border__css='list__border grid_d' />
            <List title='Ресурсы' item1='Свяжитесь с нами' item2='Продукт' item3='FAQs' item4='Помощь' border__css='list__border grid_e' />
            <List title='Подпишитесь на нас' item1='Facebook' item2='Twitter' item3='Instagram' item4='YouTube' border__css='list__border grid_f' />
        </div>
    </div>
}

export default Footer;