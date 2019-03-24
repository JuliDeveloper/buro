import React from 'react';
import './Project.css';

function Project({title, text, image, link, block, margin_css}) {
    return <div className={`project ${block}`}>
        <div className={`project__box ${margin_css}`}>
            <h2 className='project__title'>{title}</h2>
            <button className='project__arrow'></button>
        </div>
        <div className={`project__img ${image}`}></div>

        <p className={`project__text ${margin_css}`}>{text}</p>
        <a className={`project__link ${margin_css}`} href="#">{link}</a>
    </div>
}

export default Project;