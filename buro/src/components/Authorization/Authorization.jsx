import React from 'react';
import './Authorization.css';
import ModalWindow from '../Modal_window/ModalWindow.jsx';

function Authorization() {
    return <div className='band'>
        <ModalWindow />
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