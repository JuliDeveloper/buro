import React from 'react';
import './Article.css';

function Article({article, subtitle, subt, title, tit, author, text, date, date_left, image}) {
    return <div className={`article ${article}`}>
        <h3 className={`article__subtitle ${subt}`}>{subtitle}</h3>
        <h2 className={`article__title ${tit}`}>{title}</h2>
        <span className='article__author'>{author}</span>
        <div className={`article__image ${image}`} />
        <p className='article__text'>{text}</p>
        <span className={`article__date ${date_left}`}>{date}</span>
    </div>
}

export default Article;