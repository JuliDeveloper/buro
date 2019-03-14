import React from 'react';
import './Block.css';
import Project from '../Project/Project.jsx';

function Block() {
    return <div className='block'>
        <Project title='Russian project' text='За кого проголосуете?' image='image probleski_port' link='Голосовать &raquo;' block='block__project background__grey' margin_css='margin' />
        <Project title='Russian project' text='Выбираем лучшие проекты, созданные в 2018 году россиянами. 6 номинаций — 6 лауреатов.' image='image awards_2018' block='block__project background__white' />
    </div>
}

export default Block;