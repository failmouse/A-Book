import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';
import collapse from './assets/collapse-arrow.svg';
import './cryptoFAQ.scss'





const Accordion = (props) => {
    const [state, setState] = useState(false);
    const [heightElement, setheightElement] = useState(0);
    const accordionRef = useRef();

    useEffect(() => {
        setheightElement(accordionRef.current.children[0].offsetHeight);
    }, [heightElement, state])

    return (
        <div className='FAQ'>
            <div className={`accordion__row${state ? " open" : ""}`}>
                <div className="accordion__btn" onClick={() => setState(!state)}>
                    <h3>{props.title}</h3>
                    <img src={collapse} alt="" className='accordion__arrow' width="15px" height="15px" />
                </div>
                <div className="accordion__collapse" ref={accordionRef} style={state ? { height: heightElement + "%" } : { height: 0 }}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}



const FAQ = () => {
    const langTokens = useSelector((state) => state.language.data);
    let arrBox = [
        { title: langTokens.CRYPTO_FAQ_CRYPTOCURRENCY_TITTLE, text: langTokens.CRYPTO_FAQ_CRYPTOCURRENCY_TEXT },
        { title: langTokens.CRYPTO_FAQ_BLOCKCHAIN_TITTLE, text: <span>{langTokens.CRYPTO_FAQ_BLOCKCHAIN_FIRST_PART} <br /> {langTokens.CRYPTO_FAQ_BLOCKCHAIN_SECOND_PART}</span> },
        // { title: langTokens.SRYPTO_FAQ_STAKING_TITTLE, text: <span>{langTokens.SRYPTO_FAQ_STAKING_FIRST_PART}<br />{langTokens.SRYPTO_FAQ_STAKING_SECOND_PART}</span> },
        { title: langTokens.CRYPTO_FAQ_TRADE_TITTLE, text: <span>{langTokens.CRYPTO_FAQ_TRADE_FIRST_PART}<br />{langTokens.CRYPTO_FAQ_TRADE_SECOND_PART}</span> },
        {
            title: langTokens.CRYPTO_FAQ_PLATFORM_TITTLE, text: <span>{langTokens.CRYPTO_FAQ_LIST_TITTLE}
                <ul>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BITCOIN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BITCOIN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_XPR_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_XPR_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ETHEREUM_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ETHEREUM_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BITCOIN_CASH_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BITCOIN_CASH_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ETHEREUM_CLASSIC_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ETHEREUM_CLASSIC_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_LITECOIN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_LITECOIN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DASH_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DASH_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_STELLAR_LUMENS_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_STELLAR_LUMENS_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_NEO_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_NEO_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_EOS_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_EOS_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_CARDANO_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_CARDANO_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_IOTA_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_IOTA_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ZCASH_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ZCASH_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_TRON_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_TRON_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_TEZOS_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_TEZOS_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BINANCE_COIN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BINANCE_COIN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_COMPOUND_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_COMPOUND_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_CHAINLINK_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_CHAINLINK_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_UNISWAP_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_UNISWAP_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_YEARN_FINANCE_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_YEARN_FINANCE_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DOGECOIN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DOGECOIN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_AAVE_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_AAVE_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ALGORAND_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ALGORAND_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DECENTRALAND_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_DECENTRALAND_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BASIC_ATTENTION_TOKEN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_BASIC_ATTENTION_TOKEN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_POLYGON_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_POLYGON_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_SPARK_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_SPARK_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_MAKER_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_MAKER_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ENJIN_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_ENJIN_MAIN} </li>
                    <li><b>{langTokens.CRYPTO_FAQ_LIST_ITEM_SHIBA_BOLD} </b>{langTokens.CRYPTO_FAQ_LIST_ITEM_SHIBA_MAIN} </li>
                </ul>
                {/* See the full selection of cryptoassets, including crypto crosses, here. */}
            </span>
        },
        // { title: langTokens.CRYPTO_FAQ_TRANSFER_TITTLE, text: langTokens.CRYPTO_FAQ_TRANSFER_MAIN },

    ]

    return (
        <section className="FAQ">
            <div className="container">
                <h1 className='FAQ__title'>{langTokens.CRYPTO_FAQ_TITTLE}</h1>
                <div className="">
                    <div className="d-block">
                        <div className="card">
                            {arrBox.map((i, index) => <Accordion title={i.title} text={i.text} img={i.img} key={index} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FAQ