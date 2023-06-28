import React, { useState } from 'react';
import './news.scss';
import Moment from 'react-moment';
import { getNews } from '../../../../actions/actions';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { newsImageRequest } from '../../../../constants/variables.js';
import Arrow from './assets/arrow-right.svg';

const News = () => {
    const langTokens = useSelector((state) => state.language.data);
    const selectedLang = useSelector((state) => state.language.selected);
    getNews(4, selectedLang);
    const newsData = useSelector((state) => state.news.data);

    return (
        <section className='news-tape'>
            <div className="container">
                <h2>{langTokens.MAIN_NEWS_TITTLE}</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    className="news-tape__swiper"
                >
                    {newsData ? newsData.map((i, index) =>
                        <SwiperSlide key={index}>
                            <a href={`/market-news/${i.id}`} className="news-tape__link">
                                <div className="news-tape__slide" style={{ backgroundImage: "url(" + newsImageRequest + i.image + ")" }}>
                                    <div className="news-tape__body">
                                        <p>
                                            <Moment format="D MMM YYYY">
                                                {i.date}
                                            </Moment>
                                        </p>
                                        <h3>
                                            {i.title}
                                        </h3>
                                    </div>
                                    <div className="news-tape__footer d-flex justify-content-between align-items-center">
                                        {langTokens.MAIN_BTN_READ_MORE}
                                        <img src={Arrow} alt="" width="19px" height="13px" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ) :
                        <div className='preloader' />}
                </Swiper>
                <div className="d-flex justify-content-between align-items-center">
                    <a className="sf-btn lg-btn indent__btn_auxilary" href="/market-news">{langTokens.MAIN_BTN_SEE_MORE}</a>
                    {/* <div className="d-none d-sm-flex news-tape__navigation">
                        <button onClick={() => SwiperInstance.slidePrev()}>
                            <img src={SlideArrow} alt="" />
                        </button>
                        <button onClick={() => SwiperInstance.slideNext()}>
                            <img src={SlideArrow} alt="" />
                        </button>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default News;