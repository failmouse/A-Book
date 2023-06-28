import React, { useState } from "react";
import './newsCalendar.scss';
import { getCalendarByDate } from '../../../../actions/actions.js';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import moment from "moment/moment";
import Modal from "../../../../components/modal/modal";
import { tradingLink } from "../../../../constants/variables";


const transferData = (date) => {
    let transfer = moment(date).format("D MMMM YYYY");
    return transfer;
};

const getLenght = (object) => {
    let lenght = Object.keys(object).length;
    return lenght;
}

const CalendarRows = (props) => {
    return (
        <>
            <div className="news__calendar-row">
                <div className="news__calendar-col news__calendar-col--date">
                    <Moment format="HH:mm">{props.date}</Moment>
                    <img alt={props.country} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.country}.svg`} width="40px" height="30px"/>
                </div>
                <div className="news__calendar-col news__calendar-col--title">
                    <span>{props.title}</span>
                </div>
                <div className="news__calendar-col news__calendar-col--value">
                    <span>{props.actual}</span>
                </div>
                <div className="news__calendar-col news__calendar-col--forecast">
                    <span>{props.forecast}</span>
                </div>
            </div>
            {
                transferData(props.date) !== (getLenght(props.arr) > (props.item + 1) ? transferData(props.arr[props.item + 1].date) : transferData(props.date)) ?
                    <div className="news__calendar-date">
                        <div className="news__calendar-day"><Moment format="dddd">{props.arr[props.item + 1].date}</Moment></div>
                        <div><Moment format="D MMMM YYYY">{props.arr[props.item + 1].date}</Moment></div>
                    </div>
                    : null
            }
        </>
    )
}

const NewsCalendar = () => {
    const langTokens = useSelector((state) => state.language.data);
    const [selectedDate, setSelectedDate] = useState(moment());
    getCalendarByDate(selectedDate);
    const calendarData = useSelector((state) => state.calendar.data);
    const [modalState, setModalState] = useState(false);
    const changeModal = () => {
        setModalState(!modalState);
    };

    return (
        <>
            <section className="news__calendar">
                <div className="news__calendar-title">
                    <h3>{langTokens.NEWS_CALENDAR_TITTLE}</h3>
                </div>
                <div className="news__calendar-header">
                    <div className="news__calendar-header-col">
                        {langTokens.NEWS_CALENDAR_TIME}
                    </div>
                    <div className="news__calendar-header-col">
                        {langTokens.NEWS_CALENDAR_INDICATOR}
                    </div>
                    <div className="news__calendar-header-col">
                        {langTokens.NEWS_CALENDAR_VALUE}
                    </div>
                    <div className="news__calendar-header-col">
                        {langTokens.NEWS_CALENDAR_FORECAST}
                    </div>
                </div>
                <div className="news__calendar-content">
                    {calendarData ?
                        <>
                            <div className="news__calendar-date">
                                <div className="news__calendar-day"><Moment format="dddd">{calendarData[0].date}</Moment></div>
                                <div><Moment format="D MMMM YYYY">{calendarData[0].date}</Moment></div>
                            </div>
                            {calendarData.map((i, index) =>
                                <CalendarRows date={i.date} country={i.country} title={i.title} actual={i.actual} forecast={i.forecast} arr={calendarData} item={index} key={index} />
                            )}
                        </> : <div className='preloader' />}
                </div>
                <div className="news__calendar-footer">
                    <div className="news__calendar-btn" onClick={() => changeModal()}>
                        {langTokens.NEWS_CALENDAR_MORE} ➜
                    </div>
                </div>
            </section >
            {modalState ?
                <Modal onClose={() => setModalState()}>
                    <div className="news__calendar-modal-header d-block">
                        {langTokens.NEWS_CALENDAR_HEADER_PART_1} <br /> {langTokens.NEWS_CALENDAR_HEADER_PART_2}
                        <button type="button" className="news__calendar-modal-close" onClick={() => changeModal()}></button>
                    </div>
                    <div className="news__calendar-modal-content">
                        <p>{langTokens.NEWS_CALENDAR_MODAL_CONTENT}</p>
                        <a href={tradingLink} className="login-link" >{langTokens.NEWS_CALENDAR_MODAL_CONTENT_BTN_CREATE}</a>
                        <p>{langTokens.NEWS_CALENDAR_MODAL_CONTENT_ALREDY} <a href='https://trade.stocksfinex.com/en/sign-in' target="_blank" rel="noreferrer">{langTokens.NEWS_CALENDAR_MODAL_CONTENT_BTN_LOGIN}</a></p>
                        <p className="additional">&nbsp;</p>
                    </div>
                </Modal>
                : null}
        </>
    )
}

export default NewsCalendar;