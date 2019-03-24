import React from 'react';
import './Blog.css';
import Article from '../Article/Article.jsx';

function Blog() {
    return <div className='blog'>
        <div className='blog__articles'>
            <Article article='article article__small small__one' subt='subtitle__normal' subtitle='Искусство' tit='title__normal' title='Уличный художник Триттман рисует для Buro' author='М. Иванов и другие' text='Осенью французский уличный художник Триттман (3ttman) приезжал в Москву, чтобы принять участие в выставке «Campo Viejo:Streets of color» — спецпроекте биеннале искусства уличнойволны «Артмоссфера». На счету у Триттмана — сотрудничество с Tate Modern и яркие муралы во всех мировых столицах.' date_left='date' date='14.01.19' image='image1' />
            <Article article='article article__small small__two' subt='subtitle__normal' subtitle='Искусство' tit='title__normal' title='Что можно увидеть в этом году на BRAFA' author='Мария Севастьянова' text='В Брюсселе идёт 64-я сессия старейшей европейской ярмарки искусства BRAFA — не только старейшей, но и в Брюсселе идёт 64-я сессия старейшей европейской ярмарки искусства BRAFA — не только старейшей, но и открытой самым разнообразным формам и течениям в искусстве, дружелюбной по отношению буквально ко всем художникам, что очень вдохновляет.' date_left='date' date='14.01.19' image='image2' />
            <Article article='article article__big' subt='subtitle__big-image' subtitle='Индустрия' tit='title__big' title='Cовременное искусство на выставке «Анна Франк. Дневники холокоста»' author='Алина Вострикова' text='Герман Нитч — представитель венского акционизма, идеолог шокирующих перформансов с использованием крови и туш животных. В 1960-х Нитч занимался имитацией жертвоприношений — так он пытался противостоять логике товарного производстваи потребления.' date_left='date date__big' date='14.01.19' image='image3' />
            <Article article='article article__middle middle__one' subt='subtitle__normal' subtitle='Театр' tit='title__normal' title='2019-й — Год театра: что это значит и чего ждать' author='Алина Исмаилова' text='Переключиться на радикальный оптимизм, который подразумевает под собой Год театра, после такого болезненного в культурном (и не только) плане 2018-го — не самая простая задача. Наиболее тяжелая часть года пришлась на весну и лето: в начале марта от сердечного приступа скончался Олег Табаков' date_left='date margin__bottom' date='14.01.19'/>
            <Article article='article article__middle middle__two' subt='subtitle__normal' subtitle='Театр' tit='title__normal' title='Сергей Полунин: премьера перформанса The Frames' author='Алина Исмаилова' text='Выступление Полунина будет сопровождаться музыкальным произведением Рихтера «The Song of Distant Earth», которое было специально создано для Перекрёстного года культуры Катара и России — 2018' date_left='date date__last margin__bottom' date='14.01.19' />
        </div>
    </div>
}

export default Blog;