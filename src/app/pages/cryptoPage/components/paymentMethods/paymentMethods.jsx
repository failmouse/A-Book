import React from "react";
import { useSelector } from 'react-redux';
import './paymentMethods.scss';
import mastercard from './assets/logo-mastercard.svg';
import visa from './assets/logo-visa.svg';
import imps from './assets/imps.jpeg';
import neft from './assets/neft.jpeg';
import paytm from './assets/paytm.png';
import rtgs from './assets/rtgs.png';
import spei from './assets/spei.svg';
import upi from './assets/upi.svg';
import wise from './assets/wise.svg'


const Methods =() => {
    const langTokens = useSelector((state) => state.language.data);
    let paymentList=[
        {img: mastercard , alt: "mastercard"},
        {img: visa , alt: "visa"},
        {img: upi , alt: "upi"},
        {img: paytm , alt: "paytm"},
        {img: rtgs , alt: "rtgs"},
        {img: imps , alt: "imps"},
        {img: neft , alt: "neft"},
        {img: spei , alt: "spei"},
        {img: wise , alt: "wise"},
    ]

    return(
        <section className="payment container">
            <div className="title">
                <h2 className="indent__title">{langTokens.CRYPTO_PAYMENT_TITTLE}</h2>
                <span>{langTokens.CRYPTO_PAYMENT_LABEL}</span>
            </div>
            <div className="list row">
                {paymentList.map((i,index) =>
                <img className="col-2 col-md-1" src={i.img} alt={i.alt} key={index} width="91px"/>
                )}
            </div>
            <div className="side-text">
            <i>{langTokens.CRYPTO_PAYMENT_SUB_LABEL} <a href="/">{langTokens.CRYPTO_PAYMENT_SUB_LABEL_LINK}</a></i>
            </div>
        </section>
    )
}
export default Methods;