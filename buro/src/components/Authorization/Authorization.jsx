import React from 'react';
import './Authorization.css'

function Authorization() {
    return <div className='band'>

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

        <div className='band__block'>
            <div className='band__block_button'>
                <button className='band__block_button-subscribe button'>Подпишись</button>
            </div>
            <div className='band__block_buttons'>
                <label for="singIn" className='band__block_buttons-avatar'></label>
                <label for="singIn" className='band__block_buttons-singIn button'>Войти</label>
                <button className='band__block_buttons-singUp button'>Создать аккаунт</button>
                <button className='band__block_buttons-subscription'>подписка</button>
            </div>
        </div>
    </div>
}

export default Authorization;