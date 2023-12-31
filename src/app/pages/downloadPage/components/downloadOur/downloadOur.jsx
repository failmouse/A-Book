import React from "react";
import { useSelector } from 'react-redux';

import laptop from "./assets/laptop.svg";
import notebook from "./assets/notebook.svg";
import comp from "./assets/comp.svg";


import "./downloadOur.scss";

const DownloadOur =() =>{
    const langTokens = useSelector((state) => state.language.data);

    const sys_req=[
        {title: langTokens.DOWNLOAD_SYS_REQ_OPERATING_TITLE , win: langTokens.DOWNLOAD_SYS_REQ_OPERATING_MAIN , mac: langTokens.DOWNLOAD_SYS_REQ_OPERATING_SUB_MAIN },
        {title: langTokens.DOWNLOAD_SYS_REQ_RAM_TITLE , win: langTokens.DOWNLOAD_SYS_REQ_RAM_MAIN , mac: "" },
        {title: langTokens.DOWNLOAD_SYS_REQ_VIDEO_TITLE , win: langTokens.DOWNLOAD_SYS_REQ_VIDEO_MAIN , mac: langTokens.DOWNLOAD_SYS_REQ_VIDEO_SUB_MAIN },
        {title: langTokens.DOWNLOAD_SYS_REQ_HARD_TITLE , win: langTokens.DOWNLOAD_SYS_REQ_HARD_MAIN , mac: "" }
    ]
    const mob_sys_req=[
        {title: langTokens.DOWNLOAD_MOB_SYS_REG_OPERATING_TITLE ,android: langTokens.DOWNLOAD_MOB_SYS_REG_OPERATING_ANDROID , ios: langTokens.DOWNLOAD_MOB_SYS_REG_OPERATING_IOS },
        {title: langTokens.DOWNLOAD_MOB_SYS_REG_HARD_TITLE ,android: langTokens.DOWNLOAD_MOB_SYS_REG_HARD_ANDROID , ios: "" },
    ]
    return(
        <section className="downloadOur container">
            <h2>{langTokens.DOWNLOAD_TITLE}</h2>
            <h4>{langTokens.DOWNLOAD_SUB_TITLE}</h4>
            <div className="row">
                <div className="col-lg-7">
                    <div className="icons_group">
                        <img src={laptop} alt="" className="icons_group__laptop"/>
                        <img src={notebook} alt="" className="icons_group__notebook"/>
                        <img src={comp} alt="" className="icons_group__comp"/>
                    </div>
                    <div className="btn_group">
                        <a className="downloadBtn downloadBtn--orange" href="#">
                        <svg viewBox="0 0 30 35" id="icon_download_apple" xmlns="http://www.w3.org/2000/svg" className="icon_apple">
                        <g>
                        <path d="M26.05 22.544c-.95-1.362-1.424-2.897-1.424-4.603 0-1.555.448-2.98 1.342-4.274.482-.702 1.266-1.514 2.354-2.436-.716-.88-1.431-1.569-2.148-2.064-1.294-.895-2.76-1.342-4.398-1.342-.977 0-2.168.234-3.572.702-1.35.468-2.334.702-2.953.702-.468 0-1.418-.206-2.85-.62-1.445-.412-2.664-.618-3.655-.618-2.368 0-4.323.99-5.864 2.972-1.556 2.01-2.334 4.583-2.334 7.722 0 3.33 1.012 6.792 3.036 10.384 2.05 3.565 4.123 5.347 6.215 5.347.702 0 1.61-.234 2.726-.702 1.115-.454 2.092-.681 2.932-.681.895 0 1.934.22 3.118.66 1.253.44 2.217.66 2.891.66 1.762 0 3.531-1.348 5.307-4.046 1.156-1.72 2.003-3.44 2.54-5.161-1.225-.372-2.313-1.239-3.263-2.602z"></path>
                        <path d="M19.03 6.586c.867-.867 1.507-1.817 1.92-2.849.399-1.032.598-1.968.598-2.808 0-.055-.003-.123-.01-.206a2.876 2.876 0 0 1-.01-.206 1.98 1.98 0 0 1-.052-.227 1.917 1.917 0 0 0-.052-.227c-2.422.564-4.143 1.583-5.162 3.055-1.032 1.487-1.57 3.255-1.61 5.306.922-.083 1.637-.2 2.147-.351.744-.248 1.486-.744 2.23-1.487z"></path>
                        </g></svg>
                            <div className="downloadBtn__text">
                                <div className="downloadBtn__title">
                                    {langTokens.DOWNLOAD_BTN_DOWNLOAD}
                                </div>
                                <div className="downloadBtn__subTitle">
                                {langTokens.DOWNLOAD_BTN_DOWNLOAD_MAC}
                                </div>
                            </div>
                        </a>
                        <a className="downloadBtn downloadBtn--orange" href="#">
                        <svg viewBox="0 0 31 31" id="icon_download_windows" xmlns="http://www.w3.org/2000/svg" className="icon_windows">
                        <g>
                        <path d="M.498 26.18l12.199 1.682V16.214H.498zM.498 14.711h12.199V2.92L.498 4.602zM14.038 28.041l16.223 2.236V16.214H14.038zM14.038 2.741v11.97h16.223V.504z"></path>
                        </g>
                        </svg>
                            <div className="downloadBtn__text">
                                <div className="downloadBtn__title">
                                    {langTokens.DOWNLOAD_BTN_DOWNLOAD}
                                </div>
                                <div className="downloadBtn__subTitle">
                                    {langTokens.DOWNLOAD_BTN_DOWNLOAD_WIN}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="system">
                    <svg viewBox="0 0 21 17" id="icon_download_desktop-mini" xmlns="http://www.w3.org/2000/svg" className="laptop_svg">
                    <path d="M20.598 15.92l-1.282-4.977a.822.822 0 0 0-.091-.217c.073-.198.113-.41.113-.632V1.888c0-1.029-.862-1.866-1.921-1.866h-14.2c-1.06 0-1.922.837-1.922 1.866v8.206c0 .222.04.434.114.632a.82.82 0 0 0-.091.217L.026 15.96a.818.818 0 0 0 .156.717.87.87 0 0 0 .68.322h18.911a.85.85 0 0 0 .862-.836.815.815 0 0 0-.037-.243zm-8.098-.228H8.135a.172.172 0 0 1-.13-.059.162.162 0 0 1-.038-.135l.34-1.833a.169.169 0 0 1 .168-.136h3.684c.082 0 .153.058.167.136l.337 1.818a.16.16 0 0 1 .007.044.167.167 0 0 1-.17.165zm5.16-5.598a.236.236 0 0 1-.143.215h-14.4a.236.236 0 0 1-.143-.215V1.888c0-.13.109-.236.243-.236h14.2a.24.24 0 0 1 .243.236v8.206z" fill="#FF5722"></path>
                    </svg>
                    <h2>{langTokens.DOWNLOAD_SYS_REQ_TITLE}</h2>
                    </div>
                    <div className="system_list">
                        { sys_req.map((i,index) =>
                            <ul className="list-unstyled system_list__info" key={index}>
                            <li className="system_list__info__title">
                                {i.title}
                            </li>
                            <li className="system_list__info__main">
                                {i.win}
                                <br />
                                {i.mac}
                            </li>
                        </ul>)}
                    </div>
                </div>
                <div className="col-lg-5 side_panel">
                    <div className="phone_group">
                        <svg viewBox="0 0 90 132" id="icon_download_mobile-large" className="phone_group__tab">
                            <g fill="none">
                                <path d="M88.723 7.331C88.723 3.848 85.877 1 82.397 1H7.326C3.848 1 1 3.848 1 7.331v117.332c0 3.483 2.848 6.332 6.326 6.332h75.071c3.48 0 6.326-2.849 6.326-6.332V7.331z" stroke="#1B202E" strokeWidth="1.2" fill="#FFF"></path>
                                <path stroke="#1B202E" strokeWidth=".6" fill="#FFF" d="M5.396 120.28h79.11V9.256H5.396z"></path>
                                <path d="M45.487 5.221c0-.508-.388-.918-.864-.918-.478 0-.868.41-.868.918 0 .51.39.917.868.917.476 0 .864-.406.864-.917" fill="#1B202E"></path>
                                <path d="M45.729 125.29a2.63 2.63 0 0 0-2.628-2.631 2.633 2.633 0 1 0 0 5.267 2.631 2.631 0 0 0 2.628-2.637" stroke="#979797" fill="#FFF"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 99 68" id="icon_download_mobile-medium" className="phone_group__pad">
                            <g fill="none">
                                <path d="M93.266 66.434c2.604 0 4.734-2.123 4.734-4.719V5.719C98 3.124 95.87 1 93.266 1H5.529C2.925 1 .795 3.124.795 5.719v55.996c0 2.596 2.13 4.719 4.734 4.719h87.737z" stroke="#1B202E" strokeWidth="1.2" fill="#FFF"></path>
                                <path stroke="#1B202E" strokeWidth=".6" fill="#FFF" d="M10.817 3.898v59.008H89.02V3.898z"></path>
                                <path d="M93.476 33.185c.516 0 .932-.393.932-.874 0-.484-.416-.878-.932-.878-.517 0-.93.394-.93.878 0 .481.413.874.93.874" fill="#1B202E"></path>
                                <path d="M5.707 34.607a2.483 2.483 0 1 0 0-4.964 2.487 2.487 0 0 0-2.493 2.485 2.486 2.486 0 0 0 2.493 2.48" stroke="#1B202E" strokeWidth=".6" fill="#FFF"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 82 41" id="icon_download_mobile-small" className="phone_group__phone">
                            <g fill="none">
                                <path d="M58.352 1.566H59.5v-.464h6.035v.464h1.539v-.464h2.606v.464h5.288c3.258 0 5.923 2.665 5.923 5.922V33.42c0 3.258-2.665 5.922-5.923 5.922h-9.433v.465H59.5v-.465H7.511c-3.258 0-5.923-2.664-5.923-5.922V7.488c0-3.257 2.665-5.922 5.923-5.922h44.806v-.464h6.035v.464z" stroke="#1B202E" strokeWidth="1.2" fill="#FFF"></path>
                                <path stroke="#1B202E" strokeWidth=".6" fill="#FFF" d="M12.41 4.37v32.175h57.27V4.37z"></path>
                                <path d="M3.724 20.456a2.937 2.937 0 0 0 2.94 2.935 2.936 2.936 0 1 0 0-5.873 2.94 2.94 0 0 0-2.94 2.938z" stroke="#1B202E" strokeWidth=".6"></path>
                                <path d="M73.416 24.615c0 .32.238.58.535.58.295 0 .533-.26.533-.58v-5.217c0-.321-.238-.58-.533-.58-.297 0-.535.259-.535.58v5.217zM73.334 16.335a.617.617 0 1 0 1.233-.002.617.617 0 0 0-1.233.002" fill="#1B202E"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="download_group">
                        <div className="android">
                            <a className="download_btn download_btn__black apk" href="#">
                                <svg viewBox="0 0 32 40" id="icon_download_android" xmlns="http://www.w3.org/2000/svg" className="download_btn__icon">
                                    <g fill="#A3CC28">
                                        <path d="M25.166 13.19H6.834c-.408 0-.739.354-.739.79v16.452c0 .436.33.79.739.79h3.268v5.544c0 1.286.974 2.33 2.177 2.33 1.202 0 2.176-1.044 2.176-2.33v-5.544H17.5v5.544c0 1.286.975 2.33 2.177 2.33s2.177-1.044 2.177-2.33v-5.544h3.313c.408 0 .739-.354.739-.79V13.98c0-.437-.33-.79-.739-.79zM2.286 13.19C1.023 13.19 0 14.203 0 15.453v9.19c0 1.249 1.023 2.262 2.286 2.262 1.262 0 2.285-1.013 2.285-2.263v-9.189a2.274 2.274 0 0 0-2.285-2.263zM29.714 13.19c-1.262 0-2.285 1.013-2.285 2.263v9.19c0 1.249 1.023 2.262 2.285 2.262 1.263 0 2.286-1.013 2.286-2.263v-9.189c0-1.25-1.023-2.263-2.286-2.263zM6.847 12.19h18.306c.477 0 .834-.485.735-1.001-.605-3.186-2.442-5.872-4.936-7.423L22.517.65a.462.462 0 0 0-.154-.594c-.192-.117-.432-.04-.538.17l-1.577 3.141A9.278 9.278 0 0 0 16 2.335c-1.518 0-2.957.37-4.248 1.031L10.175.226c-.106-.212-.347-.288-.538-.171a.462.462 0 0 0-.154.594l1.565 3.117c-2.493 1.551-4.33 4.236-4.936 7.423-.099.516.258 1.001.735 1.001zm14.615-4.645c0 .519-.38.94-.851.94-.47 0-.851-.421-.851-.94 0-.52.38-.94.85-.94.471 0 .852.42.852.94zm-10.073-.94c.47 0 .851.42.851.94 0 .519-.38.94-.851.94-.47 0-.851-.421-.851-.94 0-.52.38-.94.85-.94z"></path>
                                    </g>
                                </svg>
                                <div className="download_btn__text">
                                    <div className="download_btn__title">
                                        {langTokens.DOWNLOAD_BTN_DOWNLOAD_WIN}
                                    </div>
                                    <div className="download_btn__subTitle">
                                        {langTokens.DOWNLOAD_BTN_DOWNLOAD_ANDROID}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="download_btn download_btn__black apk android">
                            <svg viewBox="0 0 30 35" id="icon_download_apple" xmlns="http://www.w3.org/2000/svg" className="download_btn__icon">
                                <g>
                                    <path d="M26.05 22.544c-.95-1.362-1.424-2.897-1.424-4.603 0-1.555.448-2.98 1.342-4.274.482-.702 1.266-1.514 2.354-2.436-.716-.88-1.431-1.569-2.148-2.064-1.294-.895-2.76-1.342-4.398-1.342-.977 0-2.168.234-3.572.702-1.35.468-2.334.702-2.953.702-.468 0-1.418-.206-2.85-.62-1.445-.412-2.664-.618-3.655-.618-2.368 0-4.323.99-5.864 2.972-1.556 2.01-2.334 4.583-2.334 7.722 0 3.33 1.012 6.792 3.036 10.384 2.05 3.565 4.123 5.347 6.215 5.347.702 0 1.61-.234 2.726-.702 1.115-.454 2.092-.681 2.932-.681.895 0 1.934.22 3.118.66 1.253.44 2.217.66 2.891.66 1.762 0 3.531-1.348 5.307-4.046 1.156-1.72 2.003-3.44 2.54-5.161-1.225-.372-2.313-1.239-3.263-2.602z"></path>
                                    <path d="M19.03 6.586c.867-.867 1.507-1.817 1.92-2.849.399-1.032.598-1.968.598-2.808 0-.055-.003-.123-.01-.206a2.876 2.876 0 0 1-.01-.206 1.98 1.98 0 0 1-.052-.227 1.917 1.917 0 0 0-.052-.227c-2.422.564-4.143 1.583-5.162 3.055-1.032 1.487-1.57 3.255-1.61 5.306.922-.083 1.637-.2 2.147-.351.744-.248 1.486-.744 2.23-1.487z"></path>
                                </g>
                            </svg>
                            <svg viewBox="0 0 117 44" id="icon_download_appstore" xmlns="http://www.w3.org/2000/svg" className="download_btn__icon_text">
                                <g>
                                    <path d="M11.598 30.263l-1.632-5.02c-.173-.513-.498-1.72-.974-3.621h-.058c-.192.817-.498 2.025-.917 3.621l-1.606 5.02h5.187zm5.646 8.015h-3.296l-1.805-5.646H5.867l-1.72 5.646H.94l6.218-19.223h3.84l6.247 19.223zM6.383.94c1.71 0 2.8.78 3.577 1.87l-1.244.778c-.467-.623-1.245-1.09-2.333-1.09-1.711 0-2.956 1.246-2.956 3.115 0 1.869 1.245 3.115 2.956 3.115.933 0 1.71-.467 2.022-.779V6.547h-2.49V5.146h4.2v3.27c-.777.935-2.022 1.558-3.577 1.558-2.644 0-4.666-1.87-4.666-4.517C1.872 2.654 3.894.94 6.382.94zM11.982 1.096h5.91v1.402h-4.51v2.18h4.355V6.08h-4.355v2.492h4.51v1.402l-5.91-.156zM22.248 2.498h-2.644V1.096h6.844v1.402h-2.645v7.32h-1.555zM31.736 1.096h1.555v8.722h-1.555V1.096zM37.491 2.498h-2.644V1.096h6.844v1.402h-2.644v7.32H37.49zM51.179.94c2.644 0 4.51 1.87 4.51 4.517 0 2.648-1.866 4.517-4.51 4.517-2.644 0-4.51-2.025-4.51-4.517 0-2.648 1.866-4.517 4.51-4.517zm-.156 1.402c-1.71 0-2.955 1.402-2.955 3.115 0 1.87 1.089 3.115 2.955 3.115 1.867 0 2.956-1.402 2.956-3.115 0-1.869-1.09-3.115-2.956-3.115zM58.956 3.588v6.23h-1.555V1.096h1.555l4.51 6.074V1.096h1.556v8.722h-1.555zM30.054 31.29c0-1.35-.305-2.462-.918-3.339-.669-.91-1.567-1.368-2.693-1.368-.764 0-1.457.255-2.077.757-.621.505-1.027 1.165-1.218 1.984-.095.38-.143.692-.143.937v2.313c0 1.007.31 1.857.931 2.552.622.695 1.429 1.042 2.421 1.042 1.166 0 2.073-.45 2.721-1.34.65-.895.976-2.074.976-3.538m3.152-.113c0 2.357-.643 4.22-1.93 5.589-1.153 1.217-2.585 1.826-4.293 1.826-1.845 0-3.171-.655-3.977-1.968V43.9h-3.094V28.973c0-1.48-.04-3-.115-4.556h2.722l.172 2.198h.058c1.032-1.657 2.598-2.483 4.7-2.483 1.643 0 3.014.646 4.111 1.939 1.096 1.294 1.646 2.996 1.646 5.106M46.07 31.29c0-1.35-.306-2.462-.918-3.339-.67-.91-1.565-1.368-2.69-1.368-.766 0-1.458.255-2.08.757-.622.505-1.027 1.165-1.217 1.984-.094.38-.143.692-.143.937v2.313c0 1.007.31 1.857.928 2.552.622.694 1.43 1.042 2.424 1.042 1.167 0 2.074-.45 2.721-1.34.649-.895.976-2.074.976-3.538m3.153-.113c0 2.357-.644 4.22-1.93 5.589-1.154 1.217-2.585 1.826-4.294 1.826-1.845 0-3.172-.655-3.977-1.968V43.9h-3.094V28.973c0-1.48-.04-3-.115-4.556h2.721l.173 2.198h.058c1.03-1.657 2.596-2.483 4.7-2.483 1.64 0 3.012.646 4.112 1.939 1.095 1.294 1.646 2.996 1.646 5.106M67.133 32.887c0 1.636-.575 2.967-1.717 3.994-1.257 1.12-3.011 1.682-5.26 1.682-2.078 0-3.745-.4-5.002-1.197l.715-2.568c1.357.8 2.848 1.199 4.47 1.199 1.167 0 2.074-.262 2.722-.785.65-.523.976-1.22.976-2.094 0-.782-.27-1.436-.804-1.97-.535-.53-1.42-1.026-2.663-1.483-3.383-1.255-5.075-3.09-5.075-5.505 0-1.577.6-2.868 1.792-3.878 1.193-1.007 2.775-1.513 4.742-1.513 1.757 0 3.222.305 4.386.913l-.777 2.512c-1.094-.59-2.33-.885-3.71-.885-1.092 0-1.949.267-2.561.8-.515.474-.776 1.053-.776 1.74 0 .76.297 1.389.89 1.883.514.455 1.452.95 2.806 1.482 1.665.667 2.885 1.444 3.668 2.337.785.894 1.178 2.007 1.178 3.336M77.39 26.728h-3.41v6.73c0 1.711.6 2.566 1.806 2.566.552 0 1.012-.047 1.375-.143l.084 2.339c-.61.227-1.41.34-2.406.34-1.222 0-2.177-.369-2.865-1.111-.687-.743-1.032-1.987-1.032-3.737v-6.987h-2.033v-2.311h2.033v-2.538l3.037-.913v3.45h3.411v2.315zM89.539 31.304c0-1.27-.276-2.36-.829-3.27-.648-1.1-1.577-1.65-2.78-1.65-1.241 0-2.19.55-2.838 1.65-.554.91-.831 2.02-.831 3.328 0 1.27.277 2.363.831 3.271.67 1.1 1.603 1.65 2.81 1.65 1.184 0 2.11-.56 2.78-1.679.573-.93.857-2.028.857-3.3m3.209-.071c0 2.13-.613 3.88-1.835 5.248-1.278 1.408-2.978 2.11-5.098 2.11-2.048 0-3.675-.674-4.888-2.022-1.213-1.35-1.819-3.054-1.819-5.106 0-2.148.626-3.908 1.876-5.276 1.253-1.369 2.94-2.054 5.06-2.054 2.044 0 3.685.676 4.926 2.027 1.187 1.31 1.778 3 1.778 5.073M102.81 27.125a5.41 5.41 0 0 0-.976-.085c-1.089 0-1.93.409-2.522 1.228-.516.722-.773 1.635-.773 2.737v7.273h-3.094v-9.497c0-1.596-.03-3.052-.09-4.363h2.697l.113 2.653h.084c.328-.912.842-1.647 1.549-2.198.688-.494 1.434-.74 2.236-.74.286 0 .544.018.774.056v2.936h.001zM113.697 29.893c.022-.914-.182-1.702-.601-2.367-.536-.857-1.36-1.285-2.464-1.285-1.013 0-1.836.418-2.465 1.256-.515.666-.821 1.464-.914 2.395h6.444v.001zm2.95.799c0 .552-.036 1.017-.113 1.397h-9.281c.035 1.37.485 2.416 1.345 3.139.783.645 1.796.967 3.037.967 1.374 0 2.628-.216 3.755-.654l.485 2.138c-1.318.57-2.875.855-4.669.855-2.16 0-3.854-.631-5.088-1.895-1.23-1.264-1.847-2.963-1.847-5.092 0-2.089.571-3.83 1.72-5.217 1.202-1.483 2.827-2.224 4.87-2.224 2.007 0 3.527.741 4.557 2.224.819 1.177 1.23 2.631 1.23 4.362z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="download_btn download_btn__black apk android">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"clip-rule="evenodd" baseProfile="basic"  className="download_btn__icon">
                            <linearGradient id="jFdG-76_seIEvf-hbjSsaa" x1="1688.489" x2="1685.469" y1="-883.003" y2="-881.443" gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#047ed6"/><stop offset="1" stop-color="#50e6ff"/>
                            </linearGradient>
                            <path fill="url(#jFdG-76_seIEvf-hbjSsaa)" fill-rule="evenodd" d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z" clip-rule="evenodd"/>
                            <linearGradient id="jFdG-76_seIEvf-hbjSsab" x1="1645.286" x2="1642.929" y1="-897.055" y2="-897.055" gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#ffda1c"/>
                            <stop offset="1" stop-color="#feb705"/>
                            </linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsab)" fill-rule="evenodd" d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z" clip-rule="evenodd"/>
                            <linearGradient id="jFdG-76_seIEvf-hbjSsac" x1="1722.978" x2="1720.622" y1="-889.412" y2="-886.355" gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#d9414f"/><stop offset="1" stop-color="#8c193f"/>
                            </linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsac)" fill-rule="evenodd" d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561" clip-rule="evenodd"/>
                            <linearGradient id="jFdG-76_seIEvf-hbjSsad" x1="1721.163" x2="1722.215" y1="-891.39" y2="-890.024" gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#33c481"/><stop offset="1" stop-color="#61e3a7"/>
                            </linearGradient>
                            <path fill="url(#jFdG-76_seIEvf-hbjSsad)" fill-rule="evenodd" d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z" clip-rule="evenodd"/>
                        </svg>
                            <svg viewBox="0 0 117 44" id="icon_download_appstore" xmlns="http://www.w3.org/2000/svg" className="download_btn__icon_text">
                                <g>
                                    <path d="M11.598 30.263l-1.632-5.02c-.173-.513-.498-1.72-.974-3.621h-.058c-.192.817-.498 2.025-.917 3.621l-1.606 5.02h5.187zm5.646 8.015h-3.296l-1.805-5.646H5.867l-1.72 5.646H.94l6.218-19.223h3.84l6.247 19.223zM6.383.94c1.71 0 2.8.78 3.577 1.87l-1.244.778c-.467-.623-1.245-1.09-2.333-1.09-1.711 0-2.956 1.246-2.956 3.115 0 1.869 1.245 3.115 2.956 3.115.933 0 1.71-.467 2.022-.779V6.547h-2.49V5.146h4.2v3.27c-.777.935-2.022 1.558-3.577 1.558-2.644 0-4.666-1.87-4.666-4.517C1.872 2.654 3.894.94 6.382.94zM11.982 1.096h5.91v1.402h-4.51v2.18h4.355V6.08h-4.355v2.492h4.51v1.402l-5.91-.156zM22.248 2.498h-2.644V1.096h6.844v1.402h-2.645v7.32h-1.555zM31.736 1.096h1.555v8.722h-1.555V1.096zM37.491 2.498h-2.644V1.096h6.844v1.402h-2.644v7.32H37.49zM51.179.94c2.644 0 4.51 1.87 4.51 4.517 0 2.648-1.866 4.517-4.51 4.517-2.644 0-4.51-2.025-4.51-4.517 0-2.648 1.866-4.517 4.51-4.517zm-.156 1.402c-1.71 0-2.955 1.402-2.955 3.115 0 1.87 1.089 3.115 2.955 3.115 1.867 0 2.956-1.402 2.956-3.115 0-1.869-1.09-3.115-2.956-3.115zM58.956 3.588v6.23h-1.555V1.096h1.555l4.51 6.074V1.096h1.556v8.722h-1.555zM30.054 31.29c0-1.35-.305-2.462-.918-3.339-.669-.91-1.567-1.368-2.693-1.368-.764 0-1.457.255-2.077.757-.621.505-1.027 1.165-1.218 1.984-.095.38-.143.692-.143.937v2.313c0 1.007.31 1.857.931 2.552.622.695 1.429 1.042 2.421 1.042 1.166 0 2.073-.45 2.721-1.34.65-.895.976-2.074.976-3.538m3.152-.113c0 2.357-.643 4.22-1.93 5.589-1.153 1.217-2.585 1.826-4.293 1.826-1.845 0-3.171-.655-3.977-1.968V43.9h-3.094V28.973c0-1.48-.04-3-.115-4.556h2.722l.172 2.198h.058c1.032-1.657 2.598-2.483 4.7-2.483 1.643 0 3.014.646 4.111 1.939 1.096 1.294 1.646 2.996 1.646 5.106M46.07 31.29c0-1.35-.306-2.462-.918-3.339-.67-.91-1.565-1.368-2.69-1.368-.766 0-1.458.255-2.08.757-.622.505-1.027 1.165-1.217 1.984-.094.38-.143.692-.143.937v2.313c0 1.007.31 1.857.928 2.552.622.694 1.43 1.042 2.424 1.042 1.167 0 2.074-.45 2.721-1.34.649-.895.976-2.074.976-3.538m3.153-.113c0 2.357-.644 4.22-1.93 5.589-1.154 1.217-2.585 1.826-4.294 1.826-1.845 0-3.172-.655-3.977-1.968V43.9h-3.094V28.973c0-1.48-.04-3-.115-4.556h2.721l.173 2.198h.058c1.03-1.657 2.596-2.483 4.7-2.483 1.64 0 3.012.646 4.112 1.939 1.095 1.294 1.646 2.996 1.646 5.106M67.133 32.887c0 1.636-.575 2.967-1.717 3.994-1.257 1.12-3.011 1.682-5.26 1.682-2.078 0-3.745-.4-5.002-1.197l.715-2.568c1.357.8 2.848 1.199 4.47 1.199 1.167 0 2.074-.262 2.722-.785.65-.523.976-1.22.976-2.094 0-.782-.27-1.436-.804-1.97-.535-.53-1.42-1.026-2.663-1.483-3.383-1.255-5.075-3.09-5.075-5.505 0-1.577.6-2.868 1.792-3.878 1.193-1.007 2.775-1.513 4.742-1.513 1.757 0 3.222.305 4.386.913l-.777 2.512c-1.094-.59-2.33-.885-3.71-.885-1.092 0-1.949.267-2.561.8-.515.474-.776 1.053-.776 1.74 0 .76.297 1.389.89 1.883.514.455 1.452.95 2.806 1.482 1.665.667 2.885 1.444 3.668 2.337.785.894 1.178 2.007 1.178 3.336M77.39 26.728h-3.41v6.73c0 1.711.6 2.566 1.806 2.566.552 0 1.012-.047 1.375-.143l.084 2.339c-.61.227-1.41.34-2.406.34-1.222 0-2.177-.369-2.865-1.111-.687-.743-1.032-1.987-1.032-3.737v-6.987h-2.033v-2.311h2.033v-2.538l3.037-.913v3.45h3.411v2.315zM89.539 31.304c0-1.27-.276-2.36-.829-3.27-.648-1.1-1.577-1.65-2.78-1.65-1.241 0-2.19.55-2.838 1.65-.554.91-.831 2.02-.831 3.328 0 1.27.277 2.363.831 3.271.67 1.1 1.603 1.65 2.81 1.65 1.184 0 2.11-.56 2.78-1.679.573-.93.857-2.028.857-3.3m3.209-.071c0 2.13-.613 3.88-1.835 5.248-1.278 1.408-2.978 2.11-5.098 2.11-2.048 0-3.675-.674-4.888-2.022-1.213-1.35-1.819-3.054-1.819-5.106 0-2.148.626-3.908 1.876-5.276 1.253-1.369 2.94-2.054 5.06-2.054 2.044 0 3.685.676 4.926 2.027 1.187 1.31 1.778 3 1.778 5.073M102.81 27.125a5.41 5.41 0 0 0-.976-.085c-1.089 0-1.93.409-2.522 1.228-.516.722-.773 1.635-.773 2.737v7.273h-3.094v-9.497c0-1.596-.03-3.052-.09-4.363h2.697l.113 2.653h.084c.328-.912.842-1.647 1.549-2.198.688-.494 1.434-.74 2.236-.74.286 0 .544.018.774.056v2.936h.001zM113.697 29.893c.022-.914-.182-1.702-.601-2.367-.536-.857-1.36-1.285-2.464-1.285-1.013 0-1.836.418-2.465 1.256-.515.666-.821 1.464-.914 2.395h6.444v.001zm2.95.799c0 .552-.036 1.017-.113 1.397h-9.281c.035 1.37.485 2.416 1.345 3.139.783.645 1.796.967 3.037.967 1.374 0 2.628-.216 3.755-.654l.485 2.138c-1.318.57-2.875.855-4.669.855-2.16 0-3.854-.631-5.088-1.895-1.23-1.264-1.847-2.963-1.847-5.092 0-2.089.571-3.83 1.72-5.217 1.202-1.483 2.827-2.224 4.87-2.224 2.007 0 3.527.741 4.557 2.224.819 1.177 1.23 2.631 1.23 4.362z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="mob_sys_req">
                        <svg viewBox="0 0 12 19" id="icon_download_mobile-mini" className="phone_svg">
                            <path d="M9.835 0H2C1.25 0 .645.608.645 1.356v15.91c0 .748.606 1.355 1.355 1.355h7.835c.749 0 1.355-.607 1.355-1.355V1.356C11.19.608 10.584 0 9.835 0zm-5.85.824h3.867c.098 0 .178.146.178.326 0 .18-.08.327-.178.327H3.985c-.099 0-.177-.146-.177-.327 0-.18.078-.326.177-.326zm1.933 16.459a.866.866 0 0 1 0-1.73.865.865 0 0 1 0 1.73zm4.257-2.965H1.661V2.288h8.514v12.03z" fill="#1D2330" fill-rule="evenodd"></path>
                        </svg>
                        <h2 className="mob_sys_req__title">{langTokens.DOWNLOAD_SYS_REQ_TITLE}</h2>
                    </div>
                    <div className="system_list">
                        { mob_sys_req.map((i,index) =>
                            <ul className="list-unstyled system_list__info" key={index}>
                            <li className="system_list__info__title">
                                {i.title}
                            </li>
                            <li className="system_list__info__main">
                                {i.android}
                                <br />
                                {i.ios}
                            </li>
                        </ul>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DownloadOur