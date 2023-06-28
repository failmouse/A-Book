import React from 'react';
import './newsList.scss';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const NewsList = () => {
    const newsData = useSelector((state) => state.news.data);

    return (
        <section className='news-list indent__btn'>
            {newsData ? newsData.map((i, index) =>
                <article className="news-list__row" key={index}>
                    {console.log(i)}
                    <a href={`${i.link ? i.link : `/market-news/${i.id}`}`} className="news-list__single">
                        <div className="news-list__content">
                            <span className="news-list__time"><Moment format="D MMM">{i.date}</Moment></span>
                            <h2>{i.title}</h2>
                            <p>{i.shortDescription}</p>
                        </div>
                    </a>
                </article>
            ) : <div className='preloader' />}
        </section >
    )
}

export default NewsList;