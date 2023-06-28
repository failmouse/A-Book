import React from "react";
import { useSelector } from 'react-redux';
import './cryptoTrade.scss';
import trader from './assets/copy_trader.png'

import langTokens from '../../../../languages/en.json';   // for new implementation 

const Trade =() =>{
    // const langTokens = useSelector((state) => state.language.data);  // for old implementation
    
    return(
        <section className="neverTrade container">
            <div className="row">
                <div className="col-lg-6 text">
                    <h2 className="indent__title_auxilary indent__mobile neverTrade__title">{langTokens.CRYPTO_TRADE_TITTLE}</h2>
                    <div>
                        <span>{langTokens.CRYPTO_TRADE_TEXT_FIRST_PART} <b>{langTokens.CRYPTO_TRADE_TEXT_HREF}</b></span><br />
                        <em>{langTokens.CRYPTO_TRADE_TEXT_SECOND_PART}</em>
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <img src={trader} alt="" style={{'width': '80%'}} width="448px" height="425px"/>
                </div>
            </div>
        </section>
    )
}
export default Trade