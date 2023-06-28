import { lang } from "moment";
import React from "react";
import { useSelector } from 'react-redux';
import MayInteresting from "../../components/mayInteresting/mayInteresting";


import './conditionsPage.scss'

const Conditions =() => {
    const langTokens = useSelector((state) => state.language.data);
    const info =[
        {main: langTokens.CONDITION_TABLE_ACC_MAIN, ecn: langTokens.CONDITION_TABLE_ACC_ECN, desc: langTokens.CONDITION_TABLE_ACC_DESC},
        {main: langTokens.CONDITION_TABLE_TRANS_MAIN, ecn: langTokens.CONDITION_TABLE_TRANS_ECN, desc: langTokens.CONDITION_TABLE_TRANS_DESC},
        {main: langTokens.CONDITION_TABLE_DEPO_MAIN, ecn: langTokens.CONDITION_TABLE_DEPO_ECN, desc: langTokens.CONDITION_TABLE_DEPO_DESC},
        {main: langTokens.CONDITION_TABLE_HEDG_MAIN, ecn: langTokens.CONDITION_TABLE_HEDG_ECN, desc: langTokens.CONDITION_TABLE_HEDG_DESC},
        {main: langTokens.CONDITION_TABLE_TRAD_MAIN, ecn: langTokens.CONDITION_TABLE_TRAD_ECN, desc: langTokens.CONDITION_TABLE_TRAD_DESC},
        {main: langTokens.CONDITION_TABLE_LEVE_MAIN, ecn: langTokens.CONDITION_TABLE_LEVE_ECN, desc: langTokens.CONDITION_TABLE_LEVE_DESC},
        {main: langTokens.CONDITION_TABLE_COMM_MAIN, ecn: langTokens.CONDITION_TABLE_COMM_ECN, desc: langTokens.CONDITION_TABLE_COMM_DESC},
        {main: langTokens.CONDITION_TABLE_MARG_MAIN, ecn: langTokens.CONDITION_TABLE_MARG_ECN, desc: langTokens.CONDITION_TABLE_MARG_DESC},
        {main: langTokens.CONDITION_TABLE_STOP_MAIN, ecn: langTokens.CONDITION_TABLE_STOP_ECN, desc: langTokens.CONDITION_TABLE_STOP_DESC},
        {main: langTokens.CONDITION_TABLE_PRIC_MAIN, ecn: langTokens.CONDITION_TABLE_PRIC_ECN, desc: langTokens.CONDITION_TABLE_PRIC_DESC}
    ]
    return(
        <section>
        <div className="conditions container">
            <div className="conditions__title">
                <h2 className="indent__title_auxilary">{langTokens.CONDITION_TITLE}</h2>
                <p className="indent__text">{langTokens.CONDITION_FIRST_TEXT_BOX}</p>
            </div>
            <div className="conditions__mobile">
            <table className="conditions__table indent__list" style={{marginBottom: '100px'}}>
                <thead className="conditions__table__head">
                    <tr>
                        <th style={{borderLeft: "0px"}}>
                            Main Feature
                        </th>
                        <th>
                            ECN Standard
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody className="conditions__table__body" >
                    {info.map((i,index) => 
                    <tr key={index}>
                        <td>
                            {i.main}
                        </td>
                        <td>
                            {i.ecn}
                        </td>
                        <td>
                            {i.desc}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
            <div style={{marginBottom: "100px"}}>
                <h2 className="conditions__subTitle indent__title_auxilary" style={{marginBottom: "100px"}}>
                    {langTokens.CONDITION_SUB_TITLE}
                </h2>
                <p>
                    {langTokens.CONDITION_SECOND_TEXT_BOX_PART1} <b>{langTokens.CONDITION_SECOND_TEXT_BOX_BOLD} </b>{langTokens.CONDITION_SECOND_TEXT_BOX_PART2}
                </p>
            </div>
        </div>
        <MayInteresting title = "Contacts"/>
        </section>
    )
}
export default Conditions