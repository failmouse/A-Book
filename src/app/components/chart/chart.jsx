import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { useSelector } from "react-redux";

const Chart = (props) => {
    const [data, setData] = useState([]);
    const [color, setColor] = useState({});
    const assets = useSelector((state) => state.assets.data);
    useEffect(() => {
        const arrValues = [];
        let gapColor = {};
        if (props.ticks[0]) {
            if (props.ticks[0][24][0]) {
              props.ticks.map((ind, index) => {
              // setData([arrValues[index] = { value: i }])
              for (let i = 0; i < ind.length; i++) {
                setData([arrValues[i] = { value: ind[i][0] }])
              }
            });
                setData(arrValues);
                if (props.ticks[0][0][0] < props.ticks[0][24][0]) {
                    gapColor.fill = "url(#slPositiveGradient)";
                    gapColor.stroke = "#35a947";
                } else {
                    gapColor.fill = "url(#slNegativeGradient)";
                    gapColor.stroke = "#e34828";
                }
                setColor(gapColor);
            } else {
                console.log('Такого ассета нет');
            }
        }
    }, [assets, props.ticks]);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} strokeWidth={2}>
                    <YAxis hide domain={['dataMin', 'dataMax']} />
                    <defs>
                        <linearGradient id="slPositiveGradient" x2="0" y2="100%">
                            <stop offset="0%" stopColor="rgb(53, 169, 71)" stopOpacity={0.15}></stop>
                            <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity={0.1}></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="slNegativeGradient" x2="0" y2="100%">
                            <stop offset="0%" stopColor="rgb(227, 72, 40)" stopOpacity={0.15}></stop>
                            <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity={0.1}></stop>
                        </linearGradient>
                    </defs>
                    <Area type='linear' dataKey="value" stroke={color.stroke} fill={color.fill} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

export default Chart;