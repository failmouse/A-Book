import React from "react";
import './stocksCurrency.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'

import appl_bg from './assets/apple_bg.jpeg';
import amz_bg from './assets/amazon_bg.jpeg';
import eb_bg from './assets/ebay_bg.jpeg';
import google_bg from './assets/google_bg.jpeg';
import mask from './assets/mask.png';
import Chart from "../../../../components/chart/chart";

import langTokens from '../../../../languages/en.json';   // for new implementation 


const Currency =() =>{
        getAssets();
        const assets = useSelector((state) => state.assets.data);
        // const langTokens = useSelector((state) => state.language.data);
        let appl = "Facebook";
        let amazon = "Amazon";
        let ebay = "E.Bay";
        let google = "Google";
        if (!assets) {return<div className='preswipeloader' />}
        const crypto=[
            {img: appl_bg, alt:"Facebook", logo: `https://static.alfatrading.io/static/images/icon/FACEBOOK.png` , title: "Facebook", currency: assets.assets[appl].ask.toFixed(assets.assets[appl].digits), chart: appl},
            {img: amz_bg, alt:"Amazon", logo: `https://static.alfatrading.io/static/images/icon/AMAZON.png` , title: "Amazon", currency: assets.assets[amazon].ask.toFixed(assets.assets[amazon].digits), chart: amazon},
            {img: eb_bg, alt:"E.Bay", logo: `https://static.alfatrading.io/static/images/icon/E.BAY.png` , title: "EBay", currency: assets.assets[ebay].ask.toFixed(assets.assets[ebay].digits) , chart: ebay},
            {img: google_bg, alt:"Google", logo: `https://static.alfatrading.io/static/images/icon/GOOGLE.png` , title: "Google", currency: assets.assets[google].ask.toFixed(assets.assets[google].digits) ,chart: google},
        ]
        if (assets !== null) {
    return(
        <section className="container stockscurrency_page">
            <div className="title indent__title">
            <h2>{langTokens.STOCKS_CURRENCY_TITTLE}</h2>
            <div className=" d-none d-md-block" style={{width: '200px'}}>
                <a className="see_more md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Stocks"))}>
                    {langTokens.COMMODITIES_CRYPTO_BTN_SHOW}
                </a>
            </div>
            </div>
            <div>
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                // navigation= {true}
                // modules={[Navigation]}
                className="whatSwiper"
                >
                { crypto.map((i, index) =>
                    <SwiperSlide key={index}>
                    <a className="link" href="https://trade.stocksfinex.com/en/sign-in">
                        <div className="card">
                            <div className="card__header">
                                <div className="background" 
                                style={{'background': ` url(${i.img})`, 'backgroundSize': 'cover'}}
                                >
                                    <img src= {mask} alt="" width="220px" height="10px"/>
                                </div>
                                <div className="btn_icon">
                                    <img src={i.logo} alt={i.alt} width="54px" height="54px"/>
                                    </div>
                            </div>
                            <div className="card__body">
                                <div className="title">
                                    <span>
                                        {i.title} 
                                        </span>
                                </div>
                                <div className="block">
                                    <span>
                                        {i.currency}
                                        </span>
                                    {/* <span className={`main__persent ${i.persent> 0 ? 'positive': 'negative'}`}>
                                        {i.persent}% 1DС
                                        </span> */}
                                </div>
                                <div style={{ height: "42px", width: "100%" }}>
                                    {/* <Chart asset={i.chart} /> */}
                                </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                )}  
                </Swiper>
            </div>
            <div className="see_more_btn d-md-none d-sm-flex indent__btn">
            <a className="see_more see_more_auxiliary md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Stocks"))}>
                Show All
            </a>
            </div>
        </section>
    )}else{
        return <div className='preloader' />
    }
}
export default Currency