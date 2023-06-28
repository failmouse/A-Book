import React, { useState } from "react";
import './newsPage.scss';
import NewsSlider from "./components/newsSlider/newsSlider";
import NewsList from "./components/newsList/newsList";
import NewsCalendar from "./components/newsCalendar/newsCalendar";
import { getNews } from '../../actions/actions.js';
import { useSelector } from 'react-redux';
import MayInteresting from "../../components/mayInteresting/mayInteresting";


const News = () => {
    const langTokens = useSelector((state) => state.language.data);
    const selectedLang = useSelector((state) => state.language.selected);

    const [limit, setLimit] = useState(20);
    getNews(limit, selectedLang);

    return (
        <section className="news">
            <div className="container">
                <h2 className="indent__title_auxilary more-news__title"><p>{langTokens.NEWS_PAGE_MARKETS}</p></h2>
                <div className="row">
                    <div className="col-xl-8">
                        <NewsSlider />
                        <NewsList />
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                        <NewsCalendar />
                    </div>
                </div>
                <div className="more-news indent__btn_auxilary">
                    <div className="more-news__btn lg-btn" onClick={() => {
                        setLimit(limit + 10)
                    }}>
                        {langTokens.NEWS_PAGE_LOAD}
                    </div>
                </div>
                <MayInteresting title= "Market"/>
            </div>
        </section>
    )
}

export default News;