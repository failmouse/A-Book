import axios from 'axios';
import moment from "moment/moment";

export const newsRequest = (limit, selectedLang) => {
    return axios.get(`https://api.alfatrading.io:8080/v1/news/headlines/list?limit=${limit}&offset=1&select=["*"]&orderBy=["id", "DESC"]&where=[["language", "=", "${selectedLang}"],["image","!=", 0]]`,);
}

export const singleNewsRequest = (id) => {
    return axios.get(`https://api.alfatrading.io:8080/v1/news/headline/:id?id=${id}`);
}

export const calendarRequest = (limit) => {
    return axios.get(`https://api.alfatrading.io:8080/v1/calendar/events?limit=${limit}&offset=1&orderBy=["date", "DESC"]&select=["*"]`);
}

export const calendarRequestByDate = (filter) => {
    const date = moment(filter).format("YYYY-MM-D");
    const nextdate = moment(filter).add(+1, "d").format("YYYY-MM-D");
    return axios.get(`https://api.alfatrading.io:8080/v1/calendar/events?offset=1&orderBy=["date", "DESK"]&select=["*"]&limit=100&whereBetween=[["date",[ "${date}T00:00:00.000Z", "${nextdate}T00:00:00.000Z"]]]`);
}

export const assetsRequest = () => {
    return axios.get("https://api.alfatrading.io:8080/dev/mt/markets/brand?brand=alfa")
}

export const languageRequest = (language) => {
    return axios.get(`https://web.alfatrading.io/api/tokens/3/${language}`);
}

export const snapsRequest = () => {
    return axios.get(`#`);
}

export const getTicks = (symbol) => {
  return axios.get(`https://api.alfatrading.io:8080/v1/quotes/candles/?symbol=${symbol}&frame=3600&count=24&prefix=dv`)
}