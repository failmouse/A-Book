import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import Arrow from './assets/arrow-right.svg';
import contact from './assets/Contact.jpg';
import news from './assets/news2.jpeg';
import trading from './assets/trading2.png';
import forex from './assets/Forex.jpeg';
import crypto from './assets/Crypto.jpeg';


import './mayInteresting.scss';

const MayInteresting = (props) =>{
    const langTokens = useSelector((state) => state.language.data);
    let interests =[
        {title: langTokens.HEAD_NAVLINK1, img: trading, auxiliary: "Trading", link: "/trading-platforms"},
        {title: langTokens.HEAD_NAVLINK2, img: news, auxiliary: "Market", link: "/market-news"},
        {title: langTokens.HEAD_NAVLINK9, img: forex, auxiliary: "Assets", link: "/assets"},
        {title: langTokens.HEAD_NAVLINK4, img: crypto, auxiliary: "Crypto", link: "/crypto"},
        // {title: langTokens.HEAD_NAVLINK5, img: forex, auxiliary: "Forex", link: "/forex"},
        {title: langTokens.HEAD_NAVLINK6, img: contact, auxiliary: "Contacts", link: "/contacts"},
    ]
    let title = props.title
    return(
        <section className="mayInteresting">
            <div className="container">
                <h2 className='title indent__title_auxilary'>{langTokens.MAY_BE_INTERESTING}</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    className="news-tape__swiper"
                    style={{padding: '0'}}
                >
                {/* eslint-disable-next-line */}
                    {interests ? interests.map((i, index) =>
                        {if (title !== i.auxiliary) {
                        return <SwiperSlide key={index}>
                            <a href={`${i.link}`} className="news-tape__link">
                                <div className="news-tape__slide" style={{background: "url(" + i.img + ") 100% center / cover", "backgroundSize": "cover" }}>
                                    <div className="news-tape__body">
                                        <h3>
                                            {i.title}
                                        </h3>
                                    </div>
                                    <div className="news-tape__footer d-flex justify-content-between align-items-center">
                                        {langTokens.MAIN_BTN_READ_MORE}
                                        <img src={Arrow} alt="" width="20px" height="30px"/>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>}}) : null}
                </Swiper>
                {/* <div className="d-flex justify-content-between align-items-center">
                <div className="d-none d-sm-flex news-tape__navigation">
                        <button onClick={() => SwiperInstance.slidePrev()}>
                            <img src={SlideArrow} alt="" />
                        </button>
                    </div>
                    <div className="d-none d-sm-flex news-tape__navigation">
                    <div></div>
                        <button onClick={() => SwiperInstance.slideNext()}>
                            <img src={SlideArrow} alt="" />
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default MayInteresting