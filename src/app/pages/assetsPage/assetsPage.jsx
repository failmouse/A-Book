import React from "react";

import './assetsPage.scss';
import { getAssets } from "../../actions/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CardView from "./cardBox/cardView";
import TableView from "./tableBox/tableBox";
import cards from './assets/card.svg'
import table from './assets/table.svg'
import { getTicks } from "../../actions/general";

let forex = [];
let stocks = [];
let crypto = [];
let energies = {};
let metals = [];
let commodities = []

const rowItems = [
        { name: 'Stocks', arr: stocks},
        { name: 'Crypto', arr: crypto},
        { name: 'Forex', arr: forex},
        { name: 'Commodities', arr: commodities}
        // { name: 'Energies', arr: energies},
        // { name: 'Metals', arr: metals}
]



const Assets =(props) =>{
    getAssets();
    const assets = useSelector((state) => state.assets.data);
    const [selected, setSelected] = useState(rowItems[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
        useEffect(()=>{
            let asset = localStorage.getItem("asset")
            for (let i=0; i<4; i++){
                if (asset === rowItems[i].name) {
                    setSelectedIndex(i);
                    setSelected(rowItems[i])
                }
            }
        },[])
    
    const [open, setOpen] = useState(1);
    if (!assets) {return<div className='preswipeloader' />}
    if (assets) {
        for (let i = 0; i < Object.values(assets.assets).length; i++) {
            if ((Object.values(assets.assets)[i].groups.includes(selected.name) || Object.values(assets.assets)[i].groups.includes('Asia ' + selected.name))) {
                if (selected.name === 'Forex') {
                    if (forex.length >= 39) {
                        forex = [];
                    }
                    forex.push(Object.values(assets.assets)[i])
                }
                if (selected.name === 'Stocks') {
                    if (stocks.length >= 61) {
                        stocks = [];
                    }
                    stocks.push(Object.values(assets.assets)[i])
                    stocks.map((i) => {
                    })
                }
                if (selected.name === 'Crypto') {
                    if (crypto.length >= 34) {
                        crypto = [];
                    }
                    crypto.push(Object.values(assets.assets)[i])
                    // getTicks(crypto[i].symbol).then((response) => crypto[i].ticks = response)
                }
                if (selected.name === 'Commodities') {
                    if (commodities.length >= 16) {
                        commodities = [];
                    }
                    commodities.push(Object.values(assets.assets)[i])
                    commodities.map((i) => {
                    })
                }
                // if (selected.name === 'Energies') {
                //     if (energies.length >= 2) {
                //         energies = [];
                //     }
                //     energies.push(Object.values(assets.assets)[i])
                // }
                // if (selected.name === 'Metals') {
                //     if (metals.length >=3) {
                //         metals = [];
                //     }
                //     metals.push(Object.values(assets.assets)[i])
                // }
            }
        }
    }

    return(
        <section className="assets_panel">
            <div className="container">
                <div className="assets_panel__items">
                {rowItems.map((i, index) =>
                    <div className={`assets_panel__item${selectedIndex === index ? ' assets_panel__item--selected' : ''}`} key={index} onClick={() => {
                        setSelected(rowItems[index]);
                        setSelectedIndex(index);
                    }}>
                        {i.name}
                    </div>
                )}
                <div className="position btn_box mobile_btn_box">
                    <div className={`assets_panel__item assets_panel__btn_switch${open === 2 ? ' assets_panel__btn_switch--selected' : ''} position`} onClick={()=>{setOpen(2)}}>
                        <img src={table} alt="" width="15px" height="15px"/>
                    </div>
                    <div className={`assets_panel__item assets_panel__btn_switch${open === 1 ? ' assets_panel__btn_switch--selected' : ''} position`} onClick={()=>{setOpen(1)}}style={{"right":"50px"}}>
                        <img src={cards} alt="" width="15px" height="15px"/>
                    </div>
                </div>
                </div>
                {open === 1 && <CardView asset= {selected}/>}
                {open === 2 && <TableView asset = {selected}/>}
            </div>
        </section>
    )
}
export default Assets