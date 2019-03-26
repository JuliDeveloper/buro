import React from 'react';
import './ModalWindow.css';

const ModalWindow = () => {
    return <section className='modalWindow'>

        <input className='band__box_input' type="checkbox" name="singIn" id="singIn" hidden/>

        <div className='band__popup'>
            <div className='band__popup_plate'>
                <h2 className='plate__title'>Войти</h2>
                <label className='plate__input_close' for="singIn"></label>

                <label className='plate__text' for="email">Ваш e-mail</label>
                <input className='input' type="text" name="" id="email" required />
                
                <label className='plate__text password' for="password">Пароль</label>
                <input className='input' type="password" name="" id="password" required />

                <input type="checkbox" name="" id="remember" hidden/>
                <label className='plate__text remember' for="remember">Запомнить меня</label>

                <button className='plate__singIn'>Войти</button>
                <div className='plate__link'>
                    <a className='plate__registration' href="#">У вас нет аккаунта?</a>
                    <div className='plate__block'>
                        <a className='plate__block_text sinUp' href="#">Создать аккаунт</a>
                        <a className='plate__block_text' href="#">Подписаться</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ModalWindow;