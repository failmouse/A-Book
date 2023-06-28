import React from "react";
import { useSelector } from 'react-redux';
import wallet from './assets/digital-wallet.svg'
import signIn from './assets/sign-in.svg'
import trade from './assets/trade.svg'
import './howTrade.scss';


const HowTrade=()=>{
    const langTokens = useSelector((state) => state.language.data);
    let boxinfo = [
        {img: signIn, alt: langTokens.CRYPTO_TRADE_REGISTER_ALT , tittle: langTokens.CRYPTO_TRADE_REGISTER_TITTLE, text: langTokens.CRYPTO_TRADE_REGISTER_TEXT},
        {img: wallet, alt: langTokens.CRYPTO_TRADE_DEPOSIT_ALT , tittle: langTokens.CRYPTO_TRADE_DEPOSIT_TITTLE, text: langTokens.CRYPTO_TRADE_DEPOSIT_TEXT},
        {img: trade, alt: langTokens.CRYPTO_HOW_TRADE_TRADE_ALT, tittle: langTokens.CRYPTO_HOW_TRADE_TRADE_TITTLE, text: langTokens.CRYPTO_HOW_TRADE_TRADE_TEXT}
    ]
    return(
        <section className="trade">
            <div className="container">
                <div className="row trade__block_box">
                    {boxinfo.map((i,index) =>
                    <div className="col-md-4 .box">
                        <img src={i.img} alt={i.alt} className="box__view"/>
                        <h2>{i.tittle}</h2>
                        <span>{i.text}</span>
                    </div>)}
                </div>
            </div>
        </section>
    )
}
export default HowTrade;