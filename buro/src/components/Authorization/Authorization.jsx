import React from 'react';
import './Authorization.css';
import ModalWindow from '../Modal_window/ModalWindow.jsx';
import Button from '../Button/Button.jsx';

function Authorization() {
    return <div className='band'>
        <ModalWindow />
        <div className='band__block'>
            <Button text='Подпишись' visual='band__block_button-subscribe button' />
            
            <label htmlFor="singIn" className='band__block_buttons-singIn button'>
            <span className='band__block_buttons-avatar'></span>
            Войти
            </label>
        
            <Button text='Создать аккаунт' visual='band__block_buttons-singUp button' />
            <Button text='подписка' visual='band__block_buttons-subscription' />
            
        </div>
    </div>
}

export default Authorization;