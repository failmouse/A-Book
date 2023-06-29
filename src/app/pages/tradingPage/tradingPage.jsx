import React from "react";
import './tradingPage.scss';



import trade from './assets/trade.svg'
import choose from './assets/search.svg'
import simple from './assets/website-4283.svg'
import over from './assets/winner-1315.svg'
import support from './assets/24-7-support-10895.svg'
import trusted from './assets/digital-wallet-9890.svg'
import notebook from './assets/10.png'
import phonebook from './assets/20.png'
import mobile from './assets/30.png'
import TradingSwiper from "./components/swiper/swiper.jsx";
import { tradingLink } from '../../constants/variables.js'
import { useSelector } from 'react-redux';
import MayInteresting from "../../components/mayInteresting/mayInteresting";
import appl from './assets/btns/btn-app-store.svg';
import direct from './assets/btns/apk-download-badge.webp';
import android from './assets/btns/btn-google-play-high-res.png';

import langTokens from '../../languages/en.json';   // for new implementation 


const Trading = () => {
    // const langTokens = useSelector((state) => state.language.data);
    const appStorePath = 'https://apps.apple.com/de/app/pro-trading-app/id6447182562';

    return (
        <>

            <div className="container trading">
                <div className="trading__header row">
                    <div className="trading__header__text col-lg-6">
                        <h1 className="indent__title_auxilary">
                            {langTokens.TRADIN_PAGE_TITTLE}
                        </h1>
                        <p>
                            {langTokens.TRADING_PAGE_EXPIRIENCE}
                        </p>
                        <ul className="indent__list">
                            <li>{langTokens.TRADING_PAGE_LIST_ITEM_1}</li>
                            <li>{langTokens.TRADING_PAGE_LIST_ITEM_2}</li>
                            <li>{langTokens.TRADING_PAGE_LIST_ITEM_3}</li>
                        </ul>
                        <a className="btn btn--create lg-btn" href={tradingLink}>{langTokens.TRADING_BTN_CREATE}</a>

                        {/* <div className="btn_group row"> */}
                        {/* <a className="btn btn--demo" href={loginLink}>{langTokens.TRADING_BTN_TRY}</a> */}
                        {/* </div> */}
                    </div>
                    <div className="trading__header__img col-lg-6 d-sm-none d-md-block">
                        <img src={phonebook} alt="" width="700px" height="525px" />
                    </div>
                </div>

                <div className="trading__platform">
                    <div className="indent__title">
                        <h2>{langTokens.TRADING_PLATFORM_TITTLE}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="trading__platform__img indent__svg_icon trading__platform__auxilary_img" src={trade} alt="" width="72px" height="82px" />
                            <div className="card_title_min"><h3>{langTokens.TRADING_PLATFORM_TRADE_TITTLE}</h3></div>
                            <div><p className="">{langTokens.TRADING_PLATFORM_TRADE_MAIN}</p></div>
                        </div>
                        <div className="col-md-4">
                            <img className="trading__platform__img indent__svg_icon" src={choose} alt="" width="72px" height="82px" />
                            <div className="card_title_min"><h3>{langTokens.TRADING_PLATFORM_CHOOSE_TITTLE}</h3></div>
                            <div><p>{langTokens.TRADING_PLATFORM_CHOOSE_MAIN}</p></div>
                        </div>
                        <div className="col-md-4">
                            <img className="trading__platform__img indent__svg_icon" src={simple} alt="" width="72px" height="82px" />
                            <div className="card_title_min"><h3>{langTokens.TRADING_PLATFORM_SIMPLE_TITTLE}</h3></div>
                            <div><p className="">{langTokens.TRADING_PLATFORM_SIMPLE_MAIN}</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trading__platform__mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={mobile} alt="" className="desk_img" width="700px" height="478px" />
                        </div>
                        <div className="col-lg-6 trading__platform__mobile__text ">
                            <h2 className="indent__title_auxilary">{langTokens.TRADING_PLATFORM_MOBILE_TITTLE}</h2>
                            <p className="auxilary indent__text">{langTokens.TRADING_PLATFORM_MOBILE_MAIN}</p>
                            {/* <img src={phone} alt="" className="phone_img d-sm-none d-md-block"/> */}
                            {/* <div className="btn_group row" style={{'justifyContent':'center'}}> */}
                            {/* <a className="btn btn--download" href="https://trade.a-book.com/en/sign-up">{langTokens.TRADING_PLATFORM_MOBILE_BTN_MOBILE}</a> */}
                            {/* </div> */}
                            <div className="row">
                                <div className="col-6 col-md-4 trading__platform__mobile__centered">
                                    <a href={appStorePath} target="_blanc"><img src={appl} alt='' className="trading__download-btn" width={"150px"} height={"50px"} /></a>
                                </div>
                                {/* <div className="col-6 col-md-4 trading__platform__mobile__centered">
                                    <img src={android} alt='' className="trading__download-btn" width={"150px"} height={"50px"}/>
                                </div>
                                <div className="trading__mobile-center col-md-4 trading__platform__mobile__centered">
                                    <a href={process.env.PUBLIC_URL + `/assets/documents/a-book.apk`}><img src={direct} alt='' className="trading__download-btn" width={"150px"} height={"50px"}/></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trading__platform__web trading__platform__web__liner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 trading__platform__web__text">
                            <ul className="list-unstyled nav">
                                <li className="nav-item indent__title_auxilary"><h3>{langTokens.TRADING_PLATFORM_WEB_TITTLE}</h3></li>
                            </ul>
                            <p className="indent__text">{langTokens.TRADING_PLATFORM_WEB_MAIN}</p>
                            {/* <div className="btn_group row" style={{padding: 0}}> */}
                            <a className="btn btn--create lg-btn" href={tradingLink}>{langTokens.TRADING_BTN_CREATE}</a>
                            {/* <a className="btn btn--demo" href={loginLink}>{langTokens.TRADING_BTN_TRY}</a> */}
                            {/* </div> */}
                        </div>
                        <div className="col-lg-6">
                            <img src={notebook} alt="" className="trading__platform__web__img" width="561px" height="383px" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="trading__platform__md5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="trading__platform__md5__title">
                                Our own A-Book MT5 Terminal
                            </h3>
                            <div className="trading__platform__md5__text">
                                MT5 Terminal Window
                            </div>
                            <a className="btn btn--create lg-btn" href="https://8021d35e-a6b3-4144-95cf-3b859085f4fc.usrfiles.com/archives/8021d3_d2c76ae1a6914ae8ad4dc9eb82154c0a.zip ">Download</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trading__platform__discover container">
                <h2>{langTokens.TRADING_PLATFORM_DISCOVER}</h2>
                <div>
                    <TradingSwiper />
                </div>
            </div>

            <div className="trading__xtb">
                <div className="container">
                    <div className="indent__title_auxilary">
                        <h2>{langTokens.TRADING_PLATFORM_SWITCH_TITTLE}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="trading__xtb__img indent__svg_icon trading__xtb__img__first" src={over} alt="" width="72px" height="82px" />
                            <h3>{langTokens.TRADING_PLATFORM_LIST_ITEM_1_TITTLE}</h3>
                            <p>{langTokens.TRADING_PLATFORM_LIST_ITEM_1_MAIN}</p>
                        </div>
                        <div className="col-md-4">
                            <img className="trading__xtb__img indent__svg_icon" src={support} alt="" width="72px" height="82px" />
                            <div>
                                <h3>{langTokens.TRADING_PLATFORM_LIST_ITEM_2_TITTLE}</h3>
                            </div>
                            <p>{langTokens.TRADING_PLATFORM_LIST_ITEM_2_MAIN}</p>
                        </div>
                        <div className="col-md-4">
                            <img className="trading__xtb__img indent__svg_icon" src={trusted} alt="" width="72px" height="82px" />
                            <h3>{langTokens.TRADING_PLATFORM_LIST_ITEM_3_TITTLE}</h3>
                            <p>{langTokens.TRADING_PLATFORM_LIST_ITEM_3_MAIN}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MayInteresting title="Trading" />
            </div>
        </>
    )
}

export default Trading;