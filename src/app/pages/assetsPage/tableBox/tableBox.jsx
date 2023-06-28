import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../../../components/chart/chart";


const TableView =(props) =>{
  const langTokens = useSelector((state) => state.language.data);
    let i=-1;
    const [value, setValue] = useState('')
    const filteredAssets = props.asset.arr.filter(asset => {
        i++;
        return props.asset.arr[i].symbol.toLowerCase().includes(value.toLowerCase())
    })
    return(
        <>
        <div className="centered search_div">
                <input className="search_input container" id="card" placeholder="Search" 
                onChange={(event) => setValue(event.target.value)}>
                </input>
            </div>
        <div className="row assets_panel__table">
            
            <div className="header">
                <div className="header__item_first">
                    {langTokens.TABLE_BOX_FIRST}
                </div>
                <div className="header__item_second">
                    {langTokens.TABLE_BOX_SECOND}
                </div>
                {/* <div className="header__item_thirt">
                    {langTokens.TABLE_BOX_THIRD}
                </div>
                <div className="header__item_fourth">
                    {langTokens.TABLE_BOX_FOURTH}
                </div> */}
                <div className="header__item_five">

                </div>
            </div>
            <div className="body">
                {filteredAssets.map((i, index) =>
                <a className="body__list_element line">
                    <div className="name_box">
                        <div className="name">
                            <img src={`https://static.alfatrading.io/static/images/icon/${i.symbol.toUpperCase()}.png`} alt=""  className="logo" width="54px" height="54px"/>
                            <span>{i.symbol}</span>
                        </div>
                    </div>
                    <div className="price">
                            {parseFloat(i.ask).toFixed(i.digits) }
                    </div>
                    {/* <div className={`change ${((i.ask - i.open)/i.open)*100 > 0 ? 'positive': 'negative'}`}>
                    {parseFloat(((i.ask - i.open)/i.open)*100).toFixed(2)}%
                    </div> */}
                    {/* <div className={`day_change ${((i.ticks[23] - i.ticks[0])/i.ticks[0])*100 > 0 ? 'positive': 'negative'}`}>
                    {parseFloat(((i.ticks[23] - i.ticks[0])/i.ticks[0])*100).toFixed(2)}%
                    </div> */}
                    <div style={{ height: "42px", width: "180px" }}>
                    {/* <Chart asset={i.symbol} /> */}
                    </div>
                </a>)}
            </div>
        </div>
    </>
    )
}
export default TableView