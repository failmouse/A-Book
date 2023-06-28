import React from "react";
import { useSelector } from 'react-redux';

import './problem.scss';

const Problems =() =>{
    const langTokens = useSelector((state) => state.language.data);
    const problems=[
        {title: langTokens.DOWNLOAD_PROBLEMS_LIST_ANTIVIRUS_TITLE, main: langTokens.DOWNLOAD_PROBLEMS_LIST_ANTIVIRUS_MAIN},
        {title: langTokens.DOWNLOAD_PROBLEMS_LIST_VIDEO_TITLE, main: langTokens.DOWNLOAD_PROBLEMS_LIST_VIDEO_MAIN}
    ]
    return(
        <section className="problems container">
            <h2 className="main_title">
                {langTokens.DOWNLOAD_PROBLEMS_TITLE}
            </h2>
            {problems.map((i, index) =>
            <ul className="list-unstyled" key={index}>
                <li className="list_title">{i.title}</li>
                <li className="list_main">{i.main}</li>
            </ul>)}
        </section>
    )
}
export default Problems