import React from "react";
import './topCrypto.scss';
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'

import bnb_lg from './assets/binance.svg';
import ada_lg from './assets/cardano-ada-logo.svg';
import eth_lg from './assets/ethereum.svg';
import btc_lg from './assets/btc.svg';


const TopCrypto = () => {
    getAssets();
    const assets = useSelector((state) => state.assets.data);
    const langTokens = useSelector((state) => state.language.data);
    let btc = "BTCUSD";
    let bnb = "BNBUSD";
    let ada = "ADAUSD";
    let eth = "ETHUSD";
    if (!assets) { return null; }
    const crypto = [
        { alt: "Bitcoin", logo: btc_lg, title: "Bitcoin", currency: assets.assets[btc].ask, persent: parseFloat(((assets.assets[btc].ask - assets.assets[btc].open) / assets.assets[btc].open) * 100).toFixed(2) },
        { alt: "BNB", logo: bnb_lg, title: "BNB", currency: assets.assets[bnb].ask, persent: parseFloat(((assets.assets[bnb].ask - assets.assets[bnb].open) / assets.assets[bnb].open) * 100).toFixed(2) },
        { alt: "Cardano", logo: ada_lg, title: "Cardano", currency: assets.assets[ada].ask, persent: parseFloat(((assets.assets[ada].ask - assets.assets[ada].open) / assets.assets[ada].open) * 100).toFixed(2) },
        { alt: "Ethereum", logo: eth_lg, title: "Ethereum", currency: assets.assets[eth].ask, persent: parseFloat(((assets.assets[eth].ask - assets.assets[eth].open) / assets.assets[eth].open) * 100).toFixed(2) },
    ]

    return (
        <section className="top_crypto container">
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <a className="title" href="/assets" onClick={(() => localStorage.setItem("asset", "Crypto"))}>
                        <h2>
                            {langTokens.CRYPTO_TOP_TITTLE}
                            <svg viewBox="0 0 8 14" id="icon_general_arrow_thin_narrow" xmlns="http://www.w3.org/2000/svg" className="arrow">
                                <path fill="currentColor" fill-rule="evenodd" d="M.852 0a.866.866 0 0 0-.603.236.806.806 0 0 0 0 1.165l5.715 5.603L.25 12.592a.806.806 0 0 0 0 1.165.85.85 0 0 0 1.191 0L7.76 7.593a.803.803 0 0 0 .24-.59.866.866 0 0 0-.241-.59L1.44.237A.83.83 0 0 0 .852 0z"></path>
                            </svg>
                        </h2>
                    </a>
                    <div className="panel">
                        <div className="names row">
                            <div className="col-md-4" style={{ 'textAlign': 'center' }}>{langTokens.CRYPTO_TOP_PANEL_CRYPTO}</div>
                            <div className="col-md-3 d-none d-md-inline-block" style={{ 'paddingLeft': '12px' }}>{langTokens.CRYPTO_TOP_PANEL_PRICE}</div>
                            <div className="col-md-3 d-none d-md-inline-block">{langTokens.CRYPTO_TOP_PANEL_CHANGE_1D}</div>
                            <div className="col-md-2"></div>
                        </div>
                        <ul className="list-unstyled body">
                            {crypto.map((i, index) =>
                                <div className="row center_mob" key={index}>
                                    <div className="col-md-4"><img src={i.logo} alt={i.alt} style={{ 'width': '30px' }} />{i.title}</div>
                                    <div className="col-md-3">{i.currency}</div>
                                    <div className={`col-md-2 ${i.persent > 0 ? 'positive' : 'negative'}`}>{i.persent}%</div>
                                    <div className="col-md-3 mobile_view"><a className="btn-Crypto btn-Crypto--create" href="https://trade.a-book.com/en/sign-up">{langTokens.CRYPTO_TOP_PANEL_BTN_BUY}</a></div>
                                </div>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopCrypto