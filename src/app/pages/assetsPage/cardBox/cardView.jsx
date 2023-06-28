import React, { useState } from "react";
import { getTicks } from "../../../actions/general";
import Chart from "../../../components/chart/chart";
import mask from './assets/mask.png'

const CardView = (props) => {
    let i = -1;
    const [value, setValue] = useState('')
    const filteredAssets = props.asset.arr.filter(asset => {
        i++;
        return (
          props.asset.arr[i].symbol.toLowerCase().includes(value.toLowerCase())
        )
    })

    console.log(filteredAssets);
    return (
        <div>
            <div className="centered search_div">
                <input className="search_input" id="card" placeholder="Search"
                    onChange={(event) => setValue(event.target.value)}>
                </input>
            </div>
        <div className="row">
            {filteredAssets.map((i, index) =>
                <div className="col-sm-6 col-md-4 col-lg-3 mobile_center" key={index} >
                    <div className="card">
                        <div className="card__header">
                            <div className="background" style={{ backgroundImage: "url(" + (process.env.PUBLIC_URL) + `/assets/backgrounds/${i.symbol.toUpperCase()}.jpg` + ")" }}>
                                {/* <img src={process.env.PUBLIC_URL + `/assets/backgrounds/${i.symbol}.jpg`} alt= {i.symbol} className="img-card"/> */}
                                <img src={mask} alt="" className="mask" width="220px" height="10px"/>
                            </div>
                            <div className="icon">
                                <img src={`https://static.alfatrading.io/static/images/icon/${i.symbol.toUpperCase()}.png`} alt={'i.alt'} width="54px" height="54px"/>
                            </div>
                        </div>
                        <div className="card__main">
                            <div className="title">
                                {i.symbol}
                            </div>
                            <div className="info">
                                <span>
                                    {parseFloat(i.ask).toFixed(i.digits) }
                                </span>
                                {/* <span className={`main__persent ${((i.ticks[23] - i.ticks[0]) / i.ticks[0]) * 100 > 0 ? 'positive' : 'negative'}`}> */}
                                    {/* {parseFloat(((i.ticks[23] - i.ticks[0]) / i.ticks[0]) * 100).toFixed(2)}% 1DС */}
                                {/* </span> */}
                            </div>
                            <div style={{ height: "42px", width: "100%" }}>
                                {/* <Chart asset={i.symbol} /> */}
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
        </div>
    )
}
export default CardView