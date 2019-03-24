import React from 'react';
import './List.css';

function List({border__css, title, item1, item2, item3, item4, item5, item6}) {
    return <div className={`list ${border__css}`}>
        <h3 className='list__title'>{title}</h3>
        <ul className='list__box'>
            <li className='list__box_item'>
                <a className='list__box_item-link' href='#'>{item1}</a>
            </li>
            <li className='list__box_item'>
                <a className='list__box_item-link' href="#">{item2}</a>
            </li>
            <li className='list__box_item'>
                <a className='list__box_item-link' href="#">{item3}</a>
            </li>
            <li className='list__box_item'>
                <a className='list__box_item-link' href="#">{item4}</a>
            </li>
            <li className='list__box_item'>
                <a className='list__box_item-link' href="#">{item5}</a>
            </li>
            <li className='list__box_item'>
                <a className='list__box_item-link' href="#">{item6}</a>
            </li>
        </ul>
    </div>
}

export default List;