import React, { useEffect, useRef, useState } from "react";
import "./selector.scss";
import arrow from "./assets/arrow.svg";

const Selector = (props) => {
    const selector = useRef(null);
    const [selectorStatus, setSelectorStatus] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleClickOpen = () => {
        setSelectorStatus(!selectorStatus);
    };

    const handleSelect = (index) => {
        if (selectedItems.includes(index)) {
            let data = [];
            for (let i = 0; i < selectedItems.length; i++) {
                if (selectedItems[i] !== index) {
                    data = data.concat(selectedItems[i]);
                }
            }
            setSelectedItems(data);
        } else {
            setSelectedItems(selectedItems.concat(index));
        }
    };

    useEffect(() => {
        const onClick = e => selector.current.contains(e.target) || setSelectorStatus(!selectorStatus);

        if (selectorStatus) {
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }

    }, [selectorStatus]);

    useEffect(() => {
        props.onSelect(selectedItems);
    }, [selectedItems])

    useEffect(() => {
        if (props.onReset) {
            setSelectedItems([])
        }
    }, [props.onReset]);

    return (
        <div className={`selector${selectorStatus ? " selector--open" : ''}`} ref={selector} >
            <div className="selector__btn" onClick={handleClickOpen}>
                {selectedItems.length !== 0 ?
                    selectedItems.map((i, index) => {
                        return (
                            <span key={index}>
                                {
                                    index !== 0 ? ', ' + props.children[i] : props.children[i]
                                }
                            </span>)
                    })
                    : 'Show All'}
                <img src={arrow} alt="" width="10px" height="10px"/>
            </div>
            <ul className="selector__list">
                {props.children.length > 0 ?
                    props.children.map((i, index) => {
                        return (
                            <li className={`selector__item${selectedItems.includes(index) ? " selector__item--selected" : ""}`} key={index} onClick={() => handleSelect(index)}>
                                <span className="selector__icon"></span>
                                {i}
                            </li>
                        )
                    }) : null}
            </ul>
        </div >
    )
}

export default Selector;