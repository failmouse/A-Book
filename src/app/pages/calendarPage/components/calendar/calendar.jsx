import React, { useRef, useState, useEffect } from "react";
import './calendar.scss';
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { Selector } from "../../../../components/components";
import iso31661Alpha2 from "iso-3166-1-alpha-2";

const ListRow = (props) => {
    const langTokens = useSelector((state) => state.language.data);

    const [state, setState] = useState(false);
    const [heightElement, setheightElement] = useState(0);
    const accordionRef = useRef();

    useEffect(() => {
        if (accordionRef) {
            setheightElement(accordionRef.current.children[0].offsetHeight);
        }
    }, [accordionRef, heightElement, state]);

    const impactData = (impact) => {
        switch (impact) {
            case -1:
                return <div className="impact impact--1" />
            case 0:
                return <div className="impact impact--2" />
            case 1:
                return <div className="impact impact--3" />
            default:
                break;
        }
    }

    return (
        <li>
            <div className="d-none d-md-flex calendar__row" onClick={() => setState(!state)}>
                <div className="col-time">
                    <Moment format="HH:mm">{props.arr.date}</Moment>
                </div>
                <div className="col-impact">
                    {impactData(props.arr.importance)}
                </div>
                <div className="col-country">
                    <img alt={props.arr.country} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.arr.country}.svg`} width="40px" height="30px"/>
                </div>
                <div className="col-indicator">
                    {props.arr.title}
                </div>
                <div className="col-period">
                    {props.arr.period}
                </div>
                <div className="col-previous">
                    {props.arr.previous !== null ? `${props.arr.previous} ${props.arr.unit}` : '-'}
                </div>
                <div className="col-current">
                    {props.arr.actual !== null ? `${props.arr.actual} ${props.arr.unit}` : '-'}
                </div>
                <div className="col-forecast">
                    {props.arr.forecast !== null ? `${props.arr.forecast} ${props.arr.unit}` : '-'}
                </div>
            </div>
            <div className={`calendar__details ${state ? " calendar__details--open" : ""}`} ref={accordionRef} style={state ? { height: heightElement + "px" } : { height: 0 }}>
                <p>
                    <b>{props.arr.title}</b>
                    <br /><br />
                    {props.arr.comment ? props.arr.comment : langTokens.CALENDAR_EMPTY}
                </p>
            </div>
            <div className="d-flex d-md-none calendar__row" onClick={() => setState(!state)} style={{backgroundColor: "rgb(250 250 250)", minHeight: '60px'}}>
                <div className="mobile__sub_info">
                    <div>
                    <Moment format="HH:mm">{props.arr.date}</Moment> 
                    </div>
                    <div style={{height: '10px'}}>
                    {impactData(props.arr.importance)}
                    </div>
                    <div>
                    <img alt={props.arr.country} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.arr.country}.svg`} width="40px" height="30px"/>
                    </div>
                </div>
                <div className="mobile__sub_info">
                    <div className="mobile__title">{props.arr.title}</div>
                    <div className="mobile__row mobile__li_title">
                    <div className="col-md-4">{langTokens.CALENDAR_LIST_ITEM6}</div>
                    <div className="col-md-4">{langTokens.CALENDAR_LIST_ITEM7}</div>
                    <div className="col-md-4">{langTokens.CALENDAR_LIST_ITEM8}</div>
                    </div>
                    <div className="mobile__row mobile__li_info">
                        <div style={{textAlign: "center"}}>
                        {props.arr.previous !== null ? `${props.arr.previous} ${props.arr.unit}` : '-'}
                        </div>
                        <div style={{textAlign: "center"}}>
                        {props.arr.actual !== null ? `${props.arr.actual} ${props.arr.unit}` : '-'}
                        </div>
                        <div style={{textAlign: "center"}}>
                        {props.arr.forecast !== null ? `${props.arr.forecast} ${props.arr.unit}` : '-'}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}


const Calendar = (props) => {
    const calendarData = useSelector((state) => state.calendar.data);
    const langTokens = useSelector((state) => state.language.data);
    const [filteredCalendarData, setFilteredCalendarData] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState();
    const [filterCountries, setfilterCountries] = useState([]);
    const [selectedImpact, setSelectedImpact] = useState([]);
    const [countries, setCountries] = useState([]);
    const [reset, setReset] = useState(false);
    const impacts = [
        { name: 'Light', value: -1 },
        { name: 'Medium', value: 0 },
        { name: 'High', value: 1 }
    ];

    useEffect(() => {
        let data = [];
        if (calendarData) {
            for (let i = 0; i < calendarData.length; i++) {
                data[i] = calendarData[i].country;
            }
            const filter = new Set(data);
            setCountries(Array.from(filter));
        }
    }, [calendarData, setCountries]);

    useEffect(() => {
        let data = [];
        if (selectedCountries) {
            selectedCountries.forEach(element => {
                data = data.concat(countries[element]);
            });
            setfilterCountries(data);
        }
    }, [selectedCountries, countries]);

    useEffect(() => {
        let filteredByImpactArr = [];
        let filteredByCountriesArr = [];
        let filteredArr = [];

        if (selectedImpact.length > 0) {
            calendarData.forEach(element => {
                selectedImpact.forEach(filteredByImpactElement => {
                    if (element.importance === impacts[filteredByImpactElement].value) {
                        filteredByImpactArr = filteredByImpactArr.concat(element);
                    }
                });
            });
        };

        if (filterCountries.length > 0) {
            calendarData.forEach(element => {
                filterCountries.forEach(filteredByCounrtryElement => {
                    if (element.country === filteredByCounrtryElement) {
                        filteredByCountriesArr = filteredByCountriesArr.concat(element);
                    }
                });
            });
        };

        if (filteredByCountriesArr.length > 0) {
            if (filteredByImpactArr.length > 0) {
                filteredArr = filteredByCountriesArr.concat(filteredByImpactArr).filter((number, index, numbers) => {
                    return numbers.indexOf(number) !== index;
                });
            } else {
                filteredArr = filteredByCountriesArr;
            };
        } else {
            if (filteredByImpactArr.length > 0) {
                filteredArr = filteredByImpactArr;
            }
        };

        setFilteredCalendarData(filteredArr);
        // eslint-disable-next-line
    }, [filterCountries, selectedImpact, calendarData, setFilteredCalendarData]);

    const onReset = () => {
        setReset(true);
        const timer = setTimeout(() => {
            setReset(false);
        }, 100);
        return () => clearTimeout(timer);
    }

    useEffect(() => {
        onReset();
    }, [calendarData, setReset])

    return (
        <section className="calendar indent__title_auxilary">
            <div className="container">
                <div className="d-block d-md-flex justify-content-between align-items-center calendar__filters">
                    <div className="calendar__filter">
                        <label>Country</label>
                        {countries ?
                            <Selector onSelect={(selectedItems) => setSelectedCountries(selectedItems)} onReset={reset} >
                                {countries.map((i, index) => {
                                    return iso31661Alpha2.getCountry(i)
                                })}
                            </Selector>
                            : null
                        }
                    </div>
                    <div className="calendar__filter">
                        <label>Impact</label>
                        {impacts ?
                            <Selector onSelect={(selectedItems) => setSelectedImpact(selectedItems)} onReset={reset}>
                                {impacts.map((i, index) => {
                                    return i.name;
                                })}
                            </Selector>
                            : null
                        }
                    </div>
                    <button className="calendar__reset" onClick={() => { onReset() }}>Reset Filter</button>
                </div>
                {props.children}
                <div className="d-none d-md-flex calendar__header">
                    <div className="col-time">{langTokens.CALENDAR_LIST_ITEM1}</div>
                    <div className="col-impact">{langTokens.CALENDAR_LIST_ITEM2}</div>
                    <div className="col-country">{langTokens.CALENDAR_LIST_ITEM3}</div>
                    <div className="col-indicator">{langTokens.CALENDAR_LIST_ITEM4}</div>
                    <div className="col-period">{langTokens.CALENDAR_LIST_ITEM5}</div>
                    <div className="col-previous">{langTokens.CALENDAR_LIST_ITEM6}</div>
                    <div className="col-current">{langTokens.CALENDAR_LIST_ITEM7}</div>
                    <div className="col-forecast">{langTokens.CALENDAR_LIST_ITEM8}</div>
                </div>
                <div className="calendar__wrapper mobile">
                    <ul className="d-none d-md-block list-unstyled calendar__list">
                        {calendarData ?
                            calendarData.length > 0 ?
                                filteredCalendarData.length > 0 ?
                                    filteredCalendarData.map((i, index) =>
                                        <ListRow arr={i} key={index + i.uid} />
                                    ) :
                                    calendarData.map((i, index) =>
                                        <ListRow arr={i} key={index + i.uid} />
                                    )
                                : <div className="calendar__empty">
                                    <h2>Sorry, there are no events for this day.</h2>
                                    <p>You can choose a different date.</p>
                                </div>
                            : <div className='preloader' />}
                    </ul>
                    <ul className="d-md-none d-block list-unstyled calendar__list">
                        {calendarData ?
                                calendarData.length > 0 ?
                                    filteredCalendarData.length > 0 ?
                                        filteredCalendarData.map((i, index) =>
                                            <ListRow arr={i} key={index + i.uid} />
                                        ) :
                                        calendarData.map((i, index) =>
                                            <ListRow arr={i} key={index + i.uid} />
                                        )
                                    : <div className="calendar__empty">
                                        <h2>Sorry, there are no events for this day.</h2>
                                        <p>You can choose a different date.</p>
                                    </div>
                        : <div className='preloader' />}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Calendar;