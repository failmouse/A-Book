import React, { useState, useEffect } from 'react';
import './postContainer.scss';
import { useLocation } from 'react-router-dom';
import { singleNewsRequest } from '../../../../actions/general';
import { tradingLink } from '../../../../constants/variables';
import { getNews } from '../../../../actions/actions';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';

const mapElements = (el) => {
    const keys = Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(1) + 1)) + 1;
    if (el.type === 'text') {
        return el.content
    } else {
        if (el.tagName === 'br') {
            return <br key={keys} />
        } else {
            if (el.tagName === 'img') {
                let src = null;
                let alt = null;
                el.attributes.forEach(element => {
                    switch (element.key) {
                        case "src":
                            src = element.value;
                            break;
                        case "alt":
                            alt = element.value;
                            break;
                        default:
                            console.log('no atributes')
                    }
                });
                return <img key={keys} src={src} alt={alt} />
            } else {
                return React.createElement(el.tagName, { key: keys },
                    el.children.map((i, index) => {
                        return mapElements(i);
                    }
                    ))
            }
        }
    }
}

const SinglePost = () => {
    const location = useLocation();
    const langTokens = useSelector((state) => state.language.data);
    const selectedLang = useSelector((state) => state.language.selected);

    const [content, setContent] = useState();
    const id = location.pathname.slice(13);

    useEffect(() => {
        singleNewsRequest(id)
            .then(response =>
                setContent(response.data))
            .catch(err => {
                console.log(err)
            })
    }, [id])

    getNews(3, selectedLang);
    const newsData = useSelector((state) => state.news.data);
    return (
        <section className="post">
            {content ?
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <h1>{content.title}</h1>
                            <div className="post__date">
                                <strong><Moment date={content.date} format="HH:mm" /></strong> <Moment date={content.date} format="D MMM YYYY" />
                            </div>
                            <div className="post__content">
                                {content.astDescription.map((i, index) => {
                                    return mapElements(i);
                                })}
                            </div>
                            <div className="post__footer">
                                <h2>{langTokens.NEWS_PAGE_FOOTER}</h2>
                                <a href={tradingLink} className="post__btn post__btn--real lg-btn">{langTokens.NEWS_PAGE_BTN_REAL}</a>
                                {/* <a href={tradingLink} className="post__btn post__btn--demo md-btn">{langTokens.NEWS_PAGE_BTN_TRY}</a> */}
                            </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                            <div className="post__news">
                                <h2>{langTokens.POST_PAGE_NEWS}</h2>
                                <div className="date">
                                    {newsData ? <Moment date={newsData[0].date} format="D MMM YYYY" /> : null}
                                </div>
                                {newsData ? newsData.map((i, index) =>
                                    <a href={`/market-news/${i.id}`} className='single' key={index}>
                                        <span className="time"><Moment date={i.date} format="HH:mm" /></span>
                                        <h3>{i.title}</h3>
                                        <p>{i.shortDescription}</p>
                                    </a>
                                ) : null}
                                <div className="more">
                                    <a href="/market-news">{langTokens.POST_PAGE_MORE}</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                : <div className='preloader' />}
        </section >
    )
}

export default SinglePost;