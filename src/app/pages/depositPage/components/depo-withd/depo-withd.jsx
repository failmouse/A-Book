import React from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import iqpay from './assets/iqpay.svg';
import efi from './assets/EFI_logo.png';
import eleven from './assets/7-eleven.jpeg';
import advcash from './assets/advcash.svg';
import alfa from './assets/alfa.png';
import bbva from './assets/BBVA.svg';
import bnb from './assets/bnb.svg';
import btc from './assets/btc.svg';
import eth from './assets/eth.svg';
import halyk from './assets/Halyk.svg';
import imps from './assets/imps.jpeg';
import neft from './assets/neft.jpeg';
import oxxo from './assets/OXXO.svg';
import paytm from './assets/paytm.png';
import phonePe from './assets/PhonePe.svg';
import rtgs from './assets/rtgs.png';
import spei from './assets/spei.svg';
import tether from './assets/tether.svg';
import upi from './assets/upi.svg';

import './depo-withd.scss';


const DepoWithd =() =>{
    const langTokens = useSelector((state) => state.language.data);
    const [type, setType] = useState(1);
    const tableDepo=[
        {payment: 'iqPay', method: 'Bitcoin', accept: 'BTC', fees: langTokens.DEPO_TABLE_FEES_FREE, min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_6_TIMES_INST, payLogo: iqpay, metLogo: btc, length: 4},
        {                  method: 'Ethereum', accept: 'ETH', fees: langTokens.DEPO_TABLE_FEES_FREE, min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_20_TIMES_INST, metLogo: eth},
        {                  method: 'Tether USDT (ERC-20)', accept: 'USDT', fees: langTokens.DEPO_TABLE_FEES_FREE, min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_20_TIMES_INST, metLogo: tether},
        {                  method: 'Binance coin BNB', accept: 'BNB', fees: langTokens.DEPO_TABLE_FEES_FREE, min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_20_TIMES_INST, metLogo: bnb},
        {payment: 'EfiPay', method: 'UPI', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, payLogo: efi, metLogo: upi, length: 13},
        {                  method: 'Paytm', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: paytm},
        {                  method: 'IMPS', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: imps},
        {                  method: 'NEFT', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: neft},
        {                  method: 'RTGS', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: rtgs},
        {                  method: 'PhonePe', accept: 'INR', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: phonePe},
        {                  method: 'Mexico SPEI', accept: 'MXN', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: spei},
        {                  method: 'OXXO/Banquier', accept: 'MXN', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: oxxo},
        {                  method: 'BBVA Bancomer', accept: 'MXN', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: bbva},
        {                  method: '7-eleven', accept: 'MXN', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: eleven},
        {                  method: 'AdvCash', accept: 'KZT', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: advcash},
        {                  method: 'Halyk bank', accept: 'KZT', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: halyk},
        {                  method: 'Alfa-Bank', accept: 'KZT', fees: langTokens.DEPO_TABLE_FEES_FREE, min: '$50', max: '$10000', process: langTokens.DEPO_TABLE_INST, metLogo: alfa},
    ]
    const tableWithd=[
        {payment: 'iqPay', method: 'Bitcoin', accept: 'BTC', fees: '0.005 BTC', min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_PROCEED, payLogo: iqpay, metLogo: btc, length: 4},
        {                  method: 'Ethereum', accept: 'EHT', fees: '0.0005 ETH', min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_PROCEED, metLogo: eth},
        {                  method: 'Tether USDT (ERC-20)', accept: 'USDT', fees: '10 USDT', min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_PROCEED, metLogo: tether},
        {                  method: 'Binance coin BNB', accept: 'BNB', fees: '0.01 BNB', min: langTokens.DEPO_TABLE_NO_LIMIT, max: langTokens.DEPO_TABLE_NO_LIMIT, process: langTokens.DEPO_TABLE_PROCEED, metLogo: bnb},
    ]
    return(
        <section className="container">
            <div className="depo_Withd">
                <div className="indent__title_auxilary depo_Withd__items">
                    <a className={`depo_Withd__item ${type === 1 ? 'depo_Withd__item--selected': ''}`} onClick={(()=> setType(1))}>
                        {langTokens.DEPO_BTN_DEPOSIT}
                    </a>
                    <a className={`depo_Withd__item ${type === 2 ? 'depo_Withd__item--selected': ''}`} onClick={(()=> setType(2))}>
                        {langTokens.DEPO_BTN_WITHDRAWALS}
                    </a>
                </div>
                <div className="depo_Withd__tableBox">
                    <table className="depo_Table">
                        <thead className="depo_Table__head">
                            <tr>
                                <th>{langTokens.DEPO_TABLE_HEADER_1_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_2_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_3_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_4_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_5_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_6_COLUMN_TITLE}</th>
                                <th>{langTokens.DEPO_TABLE_HEADER_7_COLUMN_TITLE}</th>
                            </tr>
                        </thead>
                        <tbody className="depo_Table__body">
                            {type ===1 ? tableDepo.map((i,index) => <tr key={index}>
                                {i.payment && <td rowSpan={i.length} className="depo_Table__first"><div>{i.payment}</div><div><img src={i.payLogo} width="134px" height="42px" /></div></td>}
                                <td className="depo_Table__body__td">{i.metLogo && <img src={i.metLogo} width="110px" height="30px"/>} {i.method}</td>
                                <td className="depo_Table__body__td">{i.accept}</td>
                                <td className="depo_Table__body__td">{i.fees}</td>
                                <td className="depo_Table__body__td">{i.min}</td>
                                <td className="depo_Table__body__td">{i.max}</td>
                                <td className="depo_Table__body__td">{i.process}</td>
                            </tr>):
                            tableWithd.map((i,index) => <tr key={index}>
                            {i.payment && <td rowSpan={i.length} className="depo_Table__first"><div>{i.payment}</div><div><img src={i.payLogo} width="134px" height="42px" /></div></td>}
                            <td className="depo_Table__body__td">{i.metLogo && <img src= {i.metLogo} width="110px" height="30px"/>}  {i.method}</td>
                            <td className="depo_Table__body__td">{i.accept}</td>
                            <td className="depo_Table__body__td">{i.fees}</td>
                            <td className="depo_Table__body__td">{i.min}</td>
                            <td className="depo_Table__body__td">{i.max}</td>
                            <td className="depo_Table__body__td">{i.process}</td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default DepoWithd;