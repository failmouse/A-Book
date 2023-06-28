import React from "react";
import { useSelector } from 'react-redux';
import real from "./assets/real_time.svg"
import customised from './assets/cryptocurrency.svg'
import practice from './assets/blockchain-coins.svg'

import './startTrading.scss'

const Trading =() =>{
    const langTokens = useSelector((state) => state.language.data);
    let card =[
        {img: real, alt: langTokens.CRYPTO_START_TRADING_CARD_REAL_ALT , label: langTokens.CRYPTO_START_TRADING_CARD_REAL_LABEL, text: langTokens.CRYPTO_START_TRADING_CARD_TEXT},
        {img: customised, alt: langTokens.CRYPTO_START_TRADING_CARD_CUSTOMISED_ALT, label: langTokens.CRYPTO_START_TRADING_CARD_CUSTOMISED_LABEL, text: langTokens.CRYPTO_START_TRADING_CARD_CUSTOMISED_TEXT},
        {img: practice, alt: langTokens.CRYPTO_START_TRADING_CARD_PRACTICE_ALT, label: langTokens.CRYPTO_START_TRADING_CARD_PRACTICE_LABEL, text: langTokens.CRYPTO_START_TRADING_CARD_PRACTICE_TEXT}
    ]
    
    return(
        <section className="tradingStart">
            <div className="container indent__title">
                <h2 className="title indent__title_auxilary">{langTokens.CRYPTO_START_TRADING_TITTLE}</h2>
                <div className="row cardbox">
                {card.map((i,index) =>
                    <div className="col-md-4 cardbox__card" key={index}>
                        <div>
                        <img src={i.img} alt={i.alt} className="indent__svg_icon" width="70px" height="70px"/>
                        </div>
                        <div>
                        <h2 className="card_title_min">{i.label}</h2>
                        </div>
                        <div>
                        <span>{i.text}</span>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="auxiliary">
                <a className="btn btn--join lg-btn" href="https://trade.stocksfinex.com/en/sign-up">
                    {langTokens.BTN_JOIN}
                </a>
            </div>
            
            {/* <div className="auxiliary">
                    
                </div> */}
        </section>
    )
}
export default Trading