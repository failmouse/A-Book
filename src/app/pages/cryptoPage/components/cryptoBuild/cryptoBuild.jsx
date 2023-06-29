import React from "react";
import './cryptoBuild.scss';
import { useSelector } from 'react-redux';
import { tradingLink } from '../../../../constants/variables.js';
import { getAssets } from "../../../../actions/actions";

import btc_white from './assets/btc_white.svg';
import bnb_lg from './assets/binance.svg';
import ada_lg from './assets/cardano-ada-logo.svg';
import eth_lg from './assets/ethereum.svg';
import btc_lg from './assets/btc.svg';

import langTokens from '../../../../languages/en.json';   // for new implementation 

const Build = () => {
    getAssets();
    let btc = "BTCUSD";
    let bnb = "BNBUSD";
    let ada = "ADAUSD";
    let eth = "ETHUSD";
    const assets = useSelector((state) => state.assets.data);
    // const langTokens = useSelector((state) => state.language.data);  // for old implementation

    if (!assets) { return null; }
    const crypto = [
        { alt: "Bitcoin", logo: btc_lg, title: "BTC", currency: assets.assets[btc].ask, persent: parseFloat(((assets.assets[btc].ask - assets.assets[btc].open) / assets.assets[btc].open) * 100).toFixed(2) },
        { alt: "BNB", logo: bnb_lg, title: "BNB", currency: assets.assets[bnb].ask, persent: parseFloat(((assets.assets[bnb].ask - assets.assets[bnb].open) / assets.assets[bnb].open) * 100).toFixed(2) },
        { alt: "Cardano", logo: ada_lg, title: "ADA", currency: assets.assets[ada].ask, persent: parseFloat(((assets.assets[ada].ask - assets.assets[ada].open) / assets.assets[ada].open) * 100).toFixed(2) },
        { alt: "Ethereum", logo: eth_lg, title: "ETH", currency: assets.assets[eth].ask, persent: parseFloat(((assets.assets[eth].ask - assets.assets[eth].open) / assets.assets[eth].open) * 100).toFixed(2) },
    ]
    return (
        <section className="build">
            <div className="container">
                <div className="title d-sm-none d-lg-block indent__title">
                    <h1>{langTokens.CRYPTO_BUILD_TITTLE}</h1>
                </div>
                <div className="row auxilary-build">
                    <div className="col-lg-6">
                        <div className="phone_cont">
                            <div className="phone">
                                {/* <div className="phone__BTC">
                                    <div className="BTC_card">
                                        <img src={btc_white} alt="btc_logo_white"/>
                                    </div>
                                    <div className="BTC_info">
                                        <div className="BTC_info__name">
                                            <span className="symbol">BTC</span>
                                            <span className="full">Bitcoin</span>
                                        </div>
                                        <div className="BTC_data">
                                        <div className="BTC_data__price">
                                           {assets.assets[btc].ask}
                                        </div>
                                        <div className={`BTC_data__change BTC_data__change${btc_percent > 0 ? '--positive' : '--negative'}`}>
                                            <span>{parseFloat(btc_change).toFixed(2)} ({parseFloat(btc_percent).toFixed(2)}%)</span>
                                        </div>
                                    </div>
                                    <div className="BTC_chart">
                                        <Chart asset = {btc} />
                                    </div>
                                    </div>
                                </div> */}
                                {/* <div className="BTC_footer">
                                        <div className="BTC_footer__title">{langTokens.CRYPTO_BUILD_PHONE_TITTLE}</div>
                                <ul>
                                    {crypto.map((i,index) =>
                                    <li key={index}>
                                        <div className="div_left">
                                            <img src={i.logo} alt={i.alt} />
                                            <span>{i.title}</span>
                                        </div>
                                        <div className="div_mid">
                                            <div className="BTC_footer__price">
                                                {i.currency}
                                            </div>
                                            <div className={`BTC_footer__change BTC_footer__change--${ i.persent>0 ? 'positive': 'negative'}`}>
                                                {i.persent}%
                                            </div>
                                        </div>
                                        <div className="div_right">
                                            <a className="btn-Crypto btn-Crypto--buy" href="https://trade.a-book.com/en/sign-up">{langTokens.CRYPTO_TOP_PANEL_BTN_BUY}</a>
                                        </div>
                                    </li>)}
                                </ul>
                                </div> */}
                                {/* <img src={inside} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mobile">
                        <div className="title indent__title_auxilary indent__mobile">
                            <h2>{langTokens.CRYPTO_BUILD_PORTFOLIO_TITTLE}</h2>
                        </div>
                        <ul className="list-unstyled check_ul indent__list">
                            <li>{langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_1} <b>{langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_1_HREF}</b></li>
                            <li>{langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_2}</li>
                            <li>{langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_3}</li>
                            {/* <li><b>{langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_4}</b> – {langTokens.CRYPTO_BUILD_PORTFOLIO_LIST_ITEM_4_HREF}</li> */}
                        </ul>
                        <a className="btn btn--create indent__btn md-btn" href={tradingLink}>{langTokens.BTN_CREATE_ACCOUNT}</a>

                        {/* <div className="btn_group row" style={{padding: '0 10px'}}>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Build