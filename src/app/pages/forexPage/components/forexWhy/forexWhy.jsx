import React from "react";
import { useSelector } from 'react-redux';


import './forexWhy.scss';
import '../../../../app.scss'
import choose from './assets/coin.svg';
import exchange from './assets/exchange.svg';
import variety from './assets/lok.svg';

const WhyTrade = () => {
    const langTokens = useSelector((state) => state.language.data);
    return (
        <section className="whyTrade container">
            <h2 className="indent__title">{langTokens.FOREX_WHY_TITTLE}</h2>
            <div className="row cardbox">
                <div className="col-md-3 card">
                    <h4>{langTokens.FOREX_WHY_CHOOSE_TITTLE}</h4>
                    <img src={choose} alt="Choose coin" className="indent__svg_icon" width="100px" height="100px"/>
                    <p>{langTokens.FOREX_WHY_CHOOSE_MAIN}</p>
                </div>
                <div className="col-md-3 card">
                    <h4 >{langTokens.FOREX_WHY_LONG_TITTLE}</h4>
                    <img src={exchange} alt="exchange" className="indent__svg_icon" width="100px" height="100px"/>
                    <p>{langTokens.FOREX_WHY_LONG_MAIN}</p>
                </div>
                <div className="col-md-3 card">
                    <h4>{langTokens.FOREX_WHY_DIVERSIFY_TITTLE}</h4>
                    <img src={variety} alt="variety" className="indent__svg_icon" width="100px" height="100px"/>
                    <p>{langTokens.FOREX_WHY_DIVERSIFT_MAIN}</p>
                </div>
            </div>
            <div className="text_box indent__text">
                <p>{langTokens.FOREX_WHY_TEXT_BOX_FIRST} <a href="https://trade.stocksfinex.com/en/sign-up">{langTokens.FOREX_WHY_TEXT_BOX_HREF}</a>. {langTokens.FOREX_WHY_TEXT_BOX_SECOND}</p>
                <em>{langTokens.FOREX_WHY_TEXT_EM}</em>
            </div>
            <div className="center">
                <a className="btn btn--start lg-btn" href="https://trade.stocksfinex.com/en/sign-up">{langTokens.FOREX_WHY_BTN_START}</a>
            </div>
        </section>
    )
}
export default WhyTrade;