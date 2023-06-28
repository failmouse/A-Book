import React, { useState } from "react";
import './newsSlider.scss';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { newsImageRequest } from '../../../../constants/variables.js';
import Moment from 'react-moment';
import SlideArrow from './assets/slide-arrow.svg';

const NewsSlider = () => {
    const [SwiperInstance, setSwiperInstance] = useState(null);
    const langTokens = useSelector((state) => state.language.data);

    const newsData = useSelector((state) => state.news.data);
    return (
        <section className="news__slider">
            <Swiper
                spaceBetween={30}
                slidesPerView={'auto'}
                className="news__swiper"
                onSwiper={(swiper) => { setSwiperInstance(swiper) }}
            >
                {newsData ? newsData.map((i, index) =>
                    <SwiperSlide key={index}>
                        <a href={`/market-news/${i.id}`} className="news-slide">
                            <div className="news-slide__background" style={{ backgroundImage: "url(" + newsImageRequest + i.image + ")" }} />
                            <div className="news-slide__content">
                                <h2>{i.title}</h2>
                                <span className="news-slide__date">
                                    <Moment format="D MMM YYYY">
                                        {i.date}
                                    </Moment></span>
                                <p className="news-slide__description">{i.shortDescription} </p>
                                <p className="news-slide__more">
                                    {langTokens.NEWS_SLIDER_MORE}
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                ) : <div className='preloader' />}
                <div className="news-slide__navigation">
                    <button onClick={() => SwiperInstance.slidePrev()}>
                        <img src={SlideArrow} alt="" width="25px" height="13px" />
                    </button>
                    <button onClick={() => SwiperInstance.slideNext()}>
                        <img src={SlideArrow} alt="" width="25px" height="13px" />
                    </button>
                </div>
            </Swiper>
        </section>
    )
}

export default NewsSlider;