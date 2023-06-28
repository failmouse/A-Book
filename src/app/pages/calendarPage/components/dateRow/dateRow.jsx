import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import './dateRow.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { getCalendarByDate } from "../../../../actions/actions";

const DateRow = () => {
    const [SwiperInstance, setSwiperInstance] = useState(null);

    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedIndex, setSelectedIndex] = useState(60);
    getCalendarByDate(selectedDate);

    const onSelect = (index) => {
        setSelectedDate(dates[index]);
        setSelectedIndex(index);
    };

    const resetDay = () => {
        setSelectedDate(moment());
        setSelectedIndex(60);
        SwiperInstance.slideTo(60)
    };

    const [dates, setDates] = useState([]);
    useEffect(() => {
        let arr = [];
        for (let i = -60; i <= 14; i++) {
            arr = arr.concat(moment().add(i, "d"))
        }
        setDates(arr);
    }, [setDates]);
    return (
        <section className="calendar-date">
            <div className="d-flex">
                <div className="calendar-date__now" onClick={() => { resetDay() }}>
                    Today
                </div>
            </div>            
            <Swiper
                slidesPerView={'auto'}
                className="calendar-date__swiper"
                initialSlide={60}
                centeredSlides
                centeredSlidesBounds
                onSwiper={(swiper) => { setSwiperInstance(swiper) }}
            >
                {dates.map((i, index) => {
                    return (
                            <SwiperSlide key ={index}>
                                <button onClick={() => { onSelect(index) }} className={`calendar-date__btn${selectedIndex === index ? ' calendar-date__btn--active' : ''} mobile__btn`}>
                                    <span className="calendar-date__text d-none d-md-block">{i.format("MMM")}</span>
                                    <span className="calendar-date__text d-block d-md-none">{i.format("MMMM")}</span>
                                    <span className="calendar-date__number" style={{width: '30px'}}>{i.format("D")}</span>
                                </button>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default DateRow;
