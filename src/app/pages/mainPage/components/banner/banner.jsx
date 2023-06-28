import React from 'react';
import './banner.scss';
import BanerImageStocks from './assets/stocksImage.png';
import BanerImageCrypto from './assets/cryptoImage.png';
import useWidth from '../../../../hooks/screenWidth.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper';
import { useSelector } from 'react-redux';

const Banner = () => {
    const langTokens = useSelector((state) => state.language.data);

    const bannerInfo = [
        {
            title: <h1>{langTokens.MAIN_BANNER_TITTLE} <span>{langTokens.MAIN_BANNER_TITTLE_SELECTED}</span></h1>,
            text: langTokens.MAIN_BANNER_TEXT,
            btnText: langTokens.MAIN_BANNER_BTN,
            img: BanerImageStocks,
            link: "/cfd"
        },
        {
            title: <h1>{langTokens.MAIN_BANNER_TITTLE} <span>{langTokens.MAIN_BANNER_TITTLE_SELECTED}</span></h1>,
            text: langTokens.MAIN_BANNER_TEXT,
            btnText: langTokens.MAIN_BANNER_BTN,
            img: BanerImageCrypto,
            link: "/cfd"
        },
        {
            title: <h1>{langTokens.MAIN_BANNER_TITTLE} <span>{langTokens.MAIN_BANNER_TITTLE_SELECTED}</span></h1>,
            text: langTokens.MAIN_BANNER_TEXT,
            btnText: langTokens.MAIN_BANNER_BTN,
            img: BanerImageStocks,
            link: "/cfd"
        },
    ]

    const MobileVersion = () => {
        return (
            <div className="d-md-none">
                <Swiper
                    slidesPerView={1}
                    className="banner__swiper"
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false, }}
                >
                    {bannerInfo.map((i, index) =>
                        <SwiperSlide key={index}>
                            <div className="banner__mobile">
                                {i.title}
                                <p>{i.text}</p>
                                <div className="text-center">
                                    <div className="banner__btn-wrapper">
                                        <a href={i.link} className="banner__btn">
                                            <h2 className="banner__btn-text">{i.btnText}</h2>
                                            <div className="btn-arrow-wrapper">
                                                <span className="btn-arrow btn-arrow--right"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.00164222 8.13339C0.0651453 8.81923 0.560033 9.3336 1.14032 9.31802L15.2074 9.31802L11.5461 13.7032C11.3315 13.9552 11.2111 14.3007 11.2133 14.6592C11.2089 15.21 11.4914 15.7036 11.9205 15.9062C12.3519 16.1089 12.8424 15.9764 13.1578 15.5737L18.6935 8.92314L19.4818 7.98791L18.6935 7.05267L13.1578 0.40211C12.722 -0.125259 12.0081 -0.135651 11.5636 0.381327C11.1191 0.898304 11.1103 1.74521 11.5461 2.27258L15.2074 6.65779L1.14032 6.65779C0.835943 6.6526 0.544704 6.79288 0.330108 7.04747C0.11551 7.30207 -0.00273703 7.64758 0.00164222 8.00869C-0.000547407 8.05025 -0.000547407 8.09182 0.00164222 8.13339Z" fill="white"></path>
                                                </svg>
                                                </span>
                                                <span className="btn-arrow btn-arrow--left"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.00164222 8.13339C0.0651453 8.81923 0.560033 9.3336 1.14032 9.31802L15.2074 9.31802L11.5461 13.7032C11.3315 13.9552 11.2111 14.3007 11.2133 14.6592C11.2089 15.21 11.4914 15.7036 11.9205 15.9062C12.3519 16.1089 12.8424 15.9764 13.1578 15.5737L18.6935 8.92314L19.4818 7.98791L18.6935 7.05267L13.1578 0.40211C12.722 -0.125259 12.0081 -0.135651 11.5636 0.381327C11.1191 0.898304 11.1103 1.74521 11.5461 2.27258L15.2074 6.65779L1.14032 6.65779C0.835943 6.6526 0.544704 6.79288 0.330108 7.04747C0.11551 7.30207 -0.00273703 7.64758 0.00164222 8.00869C-0.000547407 8.05025 -0.000547407 8.09182 0.00164222 8.13339Z" fill="white"></path>
                                                </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="banner__img">
                                <img src={i.img} alt="" />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        )
    }

    const DesktopVersion = () => {
        return (
            <div className="d-none d-md-block banner__visual">
                <Swiper
                    slidesPerView={1}
                    className="banner__swiper"
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false, }}
                >
                    {bannerInfo.map((i, index) =>
                        <SwiperSlide key={index}>
                            <div className="container">
                                <div className="banner__content">
                                    <div className="banner__wrapper">
                                        <div className="banner__insights">
                                            {i.title}
                                            <p>{i.text}</p>
                                            <div className="banner__btn-wrapper">
                                                <a href={i.link} className="banner__btn">
                                                    <h2 className="banner__btn-text">{i.btnText}</h2>
                                                    <div className="btn-arrow-wrapper">
                                                        <span className="btn-arrow btn-arrow--right"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.00164222 8.13339C0.0651453 8.81923 0.560033 9.3336 1.14032 9.31802L15.2074 9.31802L11.5461 13.7032C11.3315 13.9552 11.2111 14.3007 11.2133 14.6592C11.2089 15.21 11.4914 15.7036 11.9205 15.9062C12.3519 16.1089 12.8424 15.9764 13.1578 15.5737L18.6935 8.92314L19.4818 7.98791L18.6935 7.05267L13.1578 0.40211C12.722 -0.125259 12.0081 -0.135651 11.5636 0.381327C11.1191 0.898304 11.1103 1.74521 11.5461 2.27258L15.2074 6.65779L1.14032 6.65779C0.835943 6.6526 0.544704 6.79288 0.330108 7.04747C0.11551 7.30207 -0.00273703 7.64758 0.00164222 8.00869C-0.000547407 8.05025 -0.000547407 8.09182 0.00164222 8.13339Z" fill="white"></path>
                                                        </svg>
                                                        </span>
                                                        <span className="btn-arrow btn-arrow--left"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.00164222 8.13339C0.0651453 8.81923 0.560033 9.3336 1.14032 9.31802L15.2074 9.31802L11.5461 13.7032C11.3315 13.9552 11.2111 14.3007 11.2133 14.6592C11.2089 15.21 11.4914 15.7036 11.9205 15.9062C12.3519 16.1089 12.8424 15.9764 13.1578 15.5737L18.6935 8.92314L19.4818 7.98791L18.6935 7.05267L13.1578 0.40211C12.722 -0.125259 12.0081 -0.135651 11.5636 0.381327C11.1191 0.898304 11.1103 1.74521 11.5461 2.27258L15.2074 6.65779L1.14032 6.65779C0.835943 6.6526 0.544704 6.79288 0.330108 7.04747C0.11551 7.30207 -0.00273703 7.64758 0.00164222 8.00869C-0.000547407 8.05025 -0.000547407 8.09182 0.00164222 8.13339Z" fill="white"></path>
                                                        </svg>
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="banner__img">
                                        <img src={i.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        )
    }

    const width = useWidth();
    return (
        <section className="banner">
            {width >= 768 ? <DesktopVersion /> : <MobileVersion />}
        </section>
    )
}

export default Banner;