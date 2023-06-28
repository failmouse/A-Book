import React from "react";
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'
import './chooseBest.scss';


const ChooseBest = () =>{
    getAssets();
    const assets = useSelector((state) => state.assets.data);
    const langTokens = useSelector((state) => state.language.data);
    const selectedLang =  useSelector((state) => state.language.selected);
    let AUDCAD = "AUDCAD";
    let AUDJPY = "AUDJPY";
    let CADJPY = "CADJPY";
    let EURUSD = "EURUSD";
    let GBPUSD = "GBPUSD";
    let USDSGD = "USDSGD";
    let USDZAR = "USDZAR";
    if (!assets) {return null;}
    const crypto=[
        {alt:"AUDCAD", logo: "https://static.alfatrading.io/static/images/icon/AUDCAD.png" , title: "AUDCAD", currency: assets.assets[AUDCAD].ask , persent:parseFloat(((assets.assets[AUDCAD].ask - assets.assets[AUDCAD].open)/assets.assets[AUDCAD].open)*100).toFixed(2) },
        {alt:"AUDJPY", logo: "https://static.alfatrading.io/static/images/icon/AUDJPY.png" , title: "AUDJPY", currency: assets.assets[AUDJPY].ask , persent:parseFloat(((assets.assets[AUDJPY].ask - assets.assets[AUDJPY].open)/assets.assets[AUDJPY].open)*100).toFixed(2) },
        {alt:"CADJPY", logo: "https://static.alfatrading.io/static/images/icon/CADJPY.png" , title: "CADJPY", currency: assets.assets[CADJPY].ask , persent:parseFloat(((assets.assets[CADJPY].ask - assets.assets[CADJPY].open)/assets.assets[CADJPY].open)*100).toFixed(2) },
        {alt:"EURUSD", logo: "https://static.alfatrading.io/static/images/icon/EURUSD.png" , title: "EURUSD", currency: assets.assets[EURUSD].ask , persent:parseFloat(((assets.assets[EURUSD].ask - assets.assets[EURUSD].open)/assets.assets[EURUSD].open)*100).toFixed(2) },
        {alt:"GBPUSD", logo: "https://static.alfatrading.io/static/images/icon/GBPUSD.png" , title: "GBPUSD", currency: assets.assets[GBPUSD].ask , persent:parseFloat(((assets.assets[GBPUSD].ask - assets.assets[GBPUSD].open)/assets.assets[GBPUSD].open)*100).toFixed(2) },
        {alt:"USDSGD", logo: "https://static.alfatrading.io/static/images/icon/USDSGD.png" , title: "USDSGD", currency: assets.assets[USDSGD].ask , persent:parseFloat(((assets.assets[USDSGD].ask - assets.assets[USDSGD].open)/assets.assets[USDSGD].open)*100).toFixed(2) },
        {alt:"USDZAR", logo: "https://static.alfatrading.io/static/images/icon/USDZAR.png" , title: "USDZAR", currency: assets.assets[USDZAR].ask , persent:parseFloat(((assets.assets[USDZAR].ask - assets.assets[USDZAR].open)/assets.assets[USDZAR].open)*100).toFixed(2) },
    ]

    return(
        <section className="choose_best container">
            <div className="row" style={{"alignItems":"center"}}>
                <div className="col-md-6 left_side">
                <h2 className="indent__title">{langTokens.FOREX_CHOOSE_TITTLE}</h2>
                    <div className="indent__title_small">
                    <span>{langTokens.FOREX_CHOOSE_WHAT}</span>
                    </div>
                    <ul className="list-unstyled">
                        <li><span>{langTokens.FOREX_LIST_ITEM1_MAIN} <b>{langTokens.FOREX_LIST_ITEM1_BOLD}</b></span></li>
                        <li><span>{langTokens.FOREX_LIST_ITEM2_MAIN} <b>{langTokens.FOREX_LIST_ITEM2_BOLD}</b></span></li>
                        <li><span><b>{langTokens.FOREX_LIST_ITEM3_BOLD}</b></span></li>
                        <li><span>{langTokens.FOREX_LIST_ITEM4_MAIN}</span></li>
                        <li><span><b>{langTokens.FOREX_LIST_ITEM5_MAIN} </b></span></li>
                        <li><span><b>{langTokens.FOREX_LIST_ITEM6_BOLD} </b><a href="https://trade.stocksfinex.com/en/sign-up">{langTokens.FOREX_LIST_ITEM6_HREF}</a> {langTokens.FOREX_LIST_ITEM6_MAIN}</span></li>
                        <li><span><b>{langTokens.FOREX_LIST_ITEM7_BOLD} </b>{langTokens.FOREX_LIST_ITEM7_MAIN}</span></li>
                    </ul>
                    <div className="center indent__list indent__btn">
                        <a className="choose_best__btn choose_best__btn--start md-btn" href="https://trade.stocksfinex.com/en/sign-up">{langTokens.FOREX_LIST_BTN_START}</a>
                    </div>
                </div>
                <div className="col-md-6">
                <a className="title" href="/assets" onClick={(()=>localStorage.setItem("asset","Forex"))}>
                    <h2>
                        Trade Top Forex Pairs {langTokens.FOREX_TOP_PANEL_TABLE_FOREX}
                    <svg viewBox="0 0 8 14" id="icon_general_arrow_thin_narrow" xmlns="http://www.w3.org/2000/svg" className="arrow">
                    <path fill="currentColor" fill-rule="evenodd" d="M.852 0a.866.866 0 0 0-.603.236.806.806 0 0 0 0 1.165l5.715 5.603L.25 12.592a.806.806 0 0 0 0 1.165.85.85 0 0 0 1.191 0L7.76 7.593a.803.803 0 0 0 .24-.59.866.866 0 0 0-.241-.59L1.44.237A.83.83 0 0 0 .852 0z"></path>
                    </svg>
                    </h2>
                </a>
                <div className="panel">
                    <div className="row">
                        <div className="names">
                            <div className="col-md-4" style={{"textAlign":"center"}}>{langTokens.FOREX_TOP_PANEL_FOREX}</div>
                            <div className="col-md-3 d-none d-md-inline-block" style={{'paddingLeft':'12px'}}>{langTokens.CRYPTO_TOP_PANEL_PRICE}</div>
                            <div className="col-md-3 d-none d-md-inline-block"></div>
                            {/* {langTokens.CRYPTO_TOP_PANEL_CHANGE_1D} */}
                            <div className="col-md-2 d-none d-md-inline-block"></div>
                        </div>
                    </div>
                            {crypto.map((i, index) =>
                            <div className="row stroke" key={index}>
                                <div className="col-md-4 col-4"><img src={i.logo} alt={i.alt} width="35px" height="35px"/>{i.title}</div>
                                <div className="col-md-3 col-4">{i.currency}</div>
                                {/* <div className={`col-md-2 col-4 ${i.persent> 0 ? 'positive': 'negative'}`}>{i.persent}%</div> */}
                            <div className="col-md-3 d-none d-md-block mobile_view"><a className={`btn-Crypto btn-Crypto--create sm-btn ${selectedLang === 'ru' ? "md-btn" : ""}`} href="https://trade.stocksfinex.com/en/sign-up">{langTokens.CRYPTO_TOP_PANEL_BTN_SELL}</a></div>
                            </div>)}
                            <div className="d-block d-md-none mobile_view"><a className="btn-Crypto btn-Crypto--create sm-btn" href="https://trade.stocksfinex.com/en/sign-up">{langTokens.COMMODITIES_TOP_PANEL_BTN_SELL}</a></div>
                </div>
                </div>
            </div>
        </section>
    )
} 
export default ChooseBest