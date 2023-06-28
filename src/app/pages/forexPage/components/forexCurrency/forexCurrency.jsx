import React from "react";
import './forexCurrency.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'

import appl_bg from './assets/apple_bg.jpeg';
import amz_bg from './assets/amazon_bg.jpeg';
import eb_bg from './assets/ebay_bg.jpeg';
import google_bg from './assets/google_bg.jpeg';
import mask from './assets/mask.png';
import Chart from "../../../../components/chart/chart";


const Currency =() =>{
        getAssets();
        const assets = useSelector((state) => state.assets.data);
        const langTokens = useSelector((state) => state.language.data);
        let eur = "EURUSD";
        let gbp = "GBPJPY";
        let usd = "USDCAD";
        let nzd = "NZDCAD";
        if (!assets) {return<div className='preswipeloader' />}
        const forex=[
            {img: appl_bg, alt:"EURUSD", logo: "https://static.alfatrading.io/static/images/icon/EURUSD.png" , title: "EURUSD", currency: assets.assets[eur].ask.toFixed(assets.assets[eur].digits), chart: eur},
            {img: amz_bg, alt:"GBPJPY", logo: "https://static.alfatrading.io/static/images/icon/GBPJPY.png" , title: "GBPJPY", currency: assets.assets[gbp].ask.toFixed(assets.assets[gbp].digits), chart: gbp},
            {img: eb_bg, alt:"USDCAD", logo: "https://static.alfatrading.io/static/images/icon/USDCAD.png" , title: "USDCAD", currency: assets.assets[usd].ask.toFixed(assets.assets[usd].digits), chart: usd},
            {img: google_bg, alt:"NZDCAD", logo: "https://static.alfatrading.io/static/images/icon/NZDCAD.png" , title: "NZDCAD", currency: assets.assets[nzd].ask.toFixed(assets.assets[nzd].digits), chart: nzd},
        ]
    
    return(
        <section className="container forexcurrency_page">
            <div className="title indent__title">
            <h2>{langTokens.FOREX_CURRENCY_TITTLE}</h2>
            <div className="d-none d-md-block" style={{width: '200px'}}>
            <a className="see_more md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Forex"))}>
            {langTokens.COMMODITIES_CRYPTO_BTN_SHOW}
            </a>
            </div>
            </div>
            <div>
                <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                // navigation= {true}
                // modules={[Navigation]}
                className="whatSwiper"
                >
                { forex.map((i, index) =>
                    <SwiperSlide key={index}>
                    <a className="link" href="https://trade.stocksfinex.com/en/sign-in">
                        <div className="card">
                            <div className="card__header">
                                <div className="background" 
                                style={{backgroundImage: "url(" + (process.env.PUBLIC_URL) + `/assets/backgrounds/${i.alt.toUpperCase()}.jpg` + ")", 'backgroundSize': 'cover'}}
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
                <div className="see_more_btn d-md-none d-sm-flex indent__btn">
            <a className="see_more see_more_auxiliary md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Forex"))}>
                Show All
            </a>
            </div>
            </div>
        </section>
    )
}
export default Currency