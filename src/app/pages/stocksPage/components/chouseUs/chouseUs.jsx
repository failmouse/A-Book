import React from "react";
import './chouseUs.scss';
import { useSelector } from 'react-redux';

import two_phone from './assets/two_phone.png'

import langTokens from '../../../../languages/en.json';   // for new implementation 

const ChouseUs =() =>{
    // const langTokens = useSelector((state) => state.language.data);  // for old implementation
    return(
        <section className="stocks_chouseUs">
            <div className="container">
                <div>
                    <h2 className="indent__title_auxilary">{langTokens.STOCKS_CHOUSE_US_TITTLE}</h2>
                    <div className="desk_view">
                        <img src={two_phone} alt="" className="desk_img d-sm-none d-md-block" width="600px" height="524px"/>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="indent__list">{langTokens.STOCKS_CHOUSE_US_TEXT}</p>
                                <a className="stocks_chouseUs__btn stocks_chouseUs__btn--download lg-btn" href="https://trade.stocksfinex.com/en/sign-up" style={{padding: "16px 40px"}}>{langTokens.BTN_DOWNLOAD}</a>

                                {/* <div className="btn_group row btn_mobile_group" style={{padding: '0 10px'}}> */}
                                    {/* <a className="btn btn--find" href="">{langTokens.BTN_TRY}</a> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default ChouseUs