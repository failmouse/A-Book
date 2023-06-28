import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { getAssets } from '../../actions/actions';
import MayInteresting from '../../components/mayInteresting/mayInteresting.jsx';

import './contractPage.scss';

const ImageRequest = "https://static.alfatrading.io/static/images/icon/";


const forex = [
    { shortname: "AUDUSD", fullname: "Australian Dollar vs US Dollar", nominal: "100 000 AUD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-4.910", short: "2.066", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPUSD", fullname: "British Pound vs US Dollar", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-5.994", short: "2.662", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "NZDUSD", fullname: "New Zealand Dollar vs US Dollar", nominal: "100 000 NZD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-2.940", short: "-0.253", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDCAD", fullname: "US Dollar vs Canadian Dollar", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "0.072", short: "-3.673", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDCHF", fullname: "US Dollar vs Swiss Franc", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "7.202", short: "-11.088", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDJPY", fullname: "US Dollar vs Japanese Yen", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "12.785", short: "-18.557", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURUSD", fullname: "Euro vs US Dollar", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-10.241", short: "6.907", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "AUDCAD", fullname: "Australian Dollar vs Canadian Dollar", nominal: " 100 000 AUD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-4.910", short: "2.066", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURCHF", fullname: "Euro vs Swiss Franc", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1.369", short: "-2.519", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURGBP", fullname: "Euro vs British Pounds", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-5.121", short: "2.233", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURJPY", fullname: "Euro vs Japanese Yen", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "0.053", short: "-5.830", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPJPY", fullname: "British Pounds vs Japanese Yen", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "6.359", short: "-12.133", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "AUDCHF", fullname: "Australian Dollar vs Swiss Franc", nominal: "100 000 AUD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "3.554", short: "-6.887", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "AUDJPY", fullname: "Australian Dollar vs Japanese Yen", nominal: "100 000 AUD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "7.368", short: "-12.317", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "AUDNZD", fullname: "Australian Dollar vs New Zealand Dollar", nominal: "100 000 AUD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-6.721", short: "2.176", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "CADCHF", fullname: "Canadian Dollar vs Swiss Franc", nominal: "100 000 CAD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "6.178", short: "-9.370", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "CADJPY", fullname: "Canadian Dollar vs Japanese Yen", nominal: "100 000 CAD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "11.265", short: "-16.006", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "CHFJPY", fullname: "Swiss Franc vs Japanese Yen", nominal: "100 000 CHF", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1.214", short: "-5.389", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURAUD", fullname: "Euro vs Australian Dollar", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-9.431", short: "5.091", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURCAD", fullname: "Euro vs Canadian Dollar", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-11.637", short: "8.032", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURNZD", fullname: "Euro vs New Zealand Dollar", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-15.208", short: "9.703", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPAUD", fullname: "British Pounds vs Australian Dollar", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-2.797", short: "-1.541", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPCHF", fullname: "British Pounds vs Swiss Franc", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "2.875", short: "-6.762", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPCAD", fullname: "British Pounds vs Canadian Dollar", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-5.839", short: "2.237", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "GBPNZD", fullname: "British Pounds vs New Zealand Dollar", nominal: "100 000 GBP", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-7.892", short: "2.391", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "NZDCAD", fullname: "New Zealand Dollar vs Canadian Dollar", nominal: "100 000 NZD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1.669", short: "-1.744", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "NZDCHF", fullname: "New Zealand Dollar vs Swiss Franc", nominal: "100 000 NZD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "5.928", short: "-9.675", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "NZDJPY", fullname: "New Zealand Dollar vs Japanese Yen", nominal: "100 000 NZD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "10.894", short: "-16.459", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDSGD", fullname: "US Dollar vs Singapore Dollar", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1.871", short: "-1.645", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURTRY", fullname: "Euro vs Turkish Lira", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1336.077", short: "105.303", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDZAR", fullname: "US Dollar vs Turkish Lira", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1175.740", short: "-54.290", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDZAR", fullname: "US Dollar vs South African Rand", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-19.947", short: "4.963", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURSEK", fullname: "Euro vs Swedish Krona", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-4.377", short: "0.712", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDSEK", fullname: "US Dollar vs Swedish Krona", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "5.049", short: "-8.712", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDNOK", fullname: "US Dollar vs Norwegian Krone", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "1.854", short: "-5.307", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "EURNOK", fullname: "Euro vs Norwegian Krone", nominal: "100 000 EUR", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-7.037", short: "3.580", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDHKD", fullname: "US Dollar vs Hong Kong Dollar", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-6.343", short: "-9.030", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "USDCNH", fullname: "US Dollar vs Chinese Yuan", nominal: "100 000 USD", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "11.300", short: "-74.450", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
    { shortname: "CHFZAR", fullname: "Swiss Franc vs South African Rand", nominal: "100 000 CHF", quote: "0.01", margin: "1%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-6.343", short: "-9.030", sunday: "00:00", trading: "00:00-23:59", friday: "23:50"},
]
const indices =[
    { shortname: "SPX500", fullname: "S&P 500 Index", nominal: "Instrument level * USD 1", quote: "0.01", margin: "20%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-0.165000", short: "-0.231000", sunday: "22:00", trading: "00:00-21:00; 22:00-23:59", friday: "20:00"},
    { shortname: "NAS100", fullname: "Nasdaq-100 Index", nominal: "Instrument level * USD 1", quote: "0.01", margin: "20%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-0.836000", short: "-0.132000", sunday: "22:00", trading: "00:00-21:00; 22:00-23:59", friday: "20:00"},
    { shortname: "AUS200", fullname: "ASX 200 Index - Australian index", nominal: "Instrument level * USD 1", quote: "0.01", margin: "20%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-1.012000", short: "-0.127000", sunday: "-", trading: "00:00-05:30; 06:10-20:00; 22:50-23:59", friday: "20:00"},
    { shortname: "HKIND", fullname: "Hang-Seng", nominal: "Instrument level * USD 1", quote: "0.01", margin: "20%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-2.740000", short: "0.000000", sunday: "-", trading: "01:10-04:00; 05:00-08:30; 09:15-19:00", friday: "19:00"},
    { shortname: "EUSTX50", fullname: "EURO STOXX 50 Index", nominal: "Instrument level * USD 1", quote: "0.01", margin: "20%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-3.670000", short: "-2.353000", sunday: "-", trading: "07:00-21:00", friday: "20:00"},
    
]
const stocks = [
    { shortname: "AbbVie", fullname: "AbbVie Inc", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Adobe", fullname: "Adobe Systems Inc", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "AIG", fullname: "American International Group", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "AIRBNB", fullname: "AirBNB Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Amazon", fullname: "Amazon Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Apple", fullname: "Apple Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "AstraZeneca", fullname: "AstraZeneca PLC", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Blackrock", fullname: "Blackrock Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "BofAmerica", fullname: "Bank of America Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Citigroup", fullname: "Citigroup Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "CAT.US", fullname: "Caterpillar Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Chevron", fullname: "Chevron Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "CocaCola", fullname: "Coca Cola corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Dropbox", fullname: "Dropbox Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "E.Bay", fullname: "eBay Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "ExxonMobil", fullname: "ExxonMobil Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "FedEx", fullname: "FedEx Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Ferrari", fullname: "Ferrari (USA)", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Facebook", fullname: "Facebook Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "GoldmanSach", fullname: "Goldman Sachs", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "GenElectric", fullname: "General Electric Company", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Disney", fullname: "Disney corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Google", fullname: "Google Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "IBM", fullname: "International Business Machines", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Intel", fullname: "Intel Corporation", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Mastercard", fullname: "MasterCard Worldwide", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "McDonalds", fullname: "McDonald's Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Microsoft", fullname: "Microsoft Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "NVDA", fullname: "NVIDIA Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Netflix", fullname: "Netflix Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Nike", fullname: "Nike Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "ORCL", fullname: "Oracle Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "PMI", fullname: "Philip Morris International", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Pfizer", fullname: "Pfizer Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Sony", fullname: "Sony Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Spotify", fullname: "Spotify Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Tesla", fullname: "Tesla Motors Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Twitter", fullname: "Twitter Inc", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Uber", fullname: "Uber Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Virgin", fullname: "Virgin Galactic", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Verizon", fullname: "Verizon Communications", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "Visa", fullname: "Visa Inc.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
    { shortname: "WalMart", fullname: "WalMart Corp.", nominal: "1", quote: "0.01", margin: "20%", minimumOrder: "1",minimumTransaction: "1", long: "5%", short: "5%", sunday: "-", trading: "13:30-20:55", friday: "8:55"},
]

const crypto = [
    { shortname: "AAVEUSD", fullname: "AAVE vs US Dollar", nominal: "100 AAVE", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "ALICEUSD", fullname: "My neighbor Alice vs US Dollar", nominal: "1 000 ALICE", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "ATOMUSD", fullname: "Cosmos vs US Dollar", nominal: "1 000 ATOM", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "AVAXUSD", fullname: "Avalanche vs US Dollar", nominal: "1 000 AVAX", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "BNBUSD", fullname: "Binance coin vs US Dollar", nominal: "10 BNB", quote: "0.0001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "BTCUSD", fullname: "Bitcoin vs US Dollar", nominal: "1 BTC", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "ADAUSD", fullname: "Cardano vs US Dollar", nominal: "10 000 ADA", quote: "0.0001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "BABUSD", fullname: "Basic Attention coin vs US Dollar", nominal: "10 BAB", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "BSVUSD", fullname: "Bitcoin SV vs US Dollar", nominal: "100 BSV", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "CHZUSD", fullname: "Chiliz vs US Dollar", nominal: "10 000 CHZ", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "CROUSD", fullname: "Cronos vs US Dollar", nominal: "100 000 CRO", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "DCRUSD", fullname: "Decred vs US Dollar", nominal: "100 DCR", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "DOGEUSD", fullname: "Dogecoin vs US Dollar", nominal: "100 000 DOGE", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "DOTUSD", fullname: "Polkadot vs US Dollar", nominal: "1 000 DOT", quote: "0.001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "DSHUSD", fullname: "Dash vs US Dollar", nominal: "10 000 DASH", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "EOSUSD", fullname: "EOS vs US Dollar", nominal: "10 000 EOS", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "ETCUSD", fullname: "Ethereum Classic vs US Dollar", nominal: "100 ETC", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "ETHUSD", fullname: "Ethereum vs US Dollar", nominal: "1 ETH", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "IOTAUSD", fullname: "IOTA vs US Dollar", nominal: "10 000 IOTA", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "LNKUSD", fullname: "Chainlink vs US Dollar", nominal: "1 000 LINK", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "LTCUSD", fullname: "Litecoin vs US Dollar", nominal: "100 LTC", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "MANAUSD", fullname: "Decentraland vs US Dollar", nominal: "10 000 MANA", quote: "0.001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "NEOUSD", fullname: "NEO vs US Dollar", nominal: "1 000 NEO", quote: "0.001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "SOLUSD", fullname: "Solana vs US Dollar", nominal: "100 SOL", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "SUSHIUSD", fullname: "Sushi vs US Dollar", nominal: "1 000 SUSHI", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "TRXUSD", fullname: "Tron vs US Dollar", nominal: "100 000 TRX", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "VETUSD", fullname: "VeChain vs US Dollar", nominal: "100 000 VET", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "WAVESUSD", fullname: "Waves vs US Dollar", nominal: "1 000 WAVES", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "XLMUSD", fullname: "Stellar vs US Dollar", nominal: "100 000 XLM", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "XMRUSD", fullname: "Monero US Dollar", nominal: "10 XMR", quote: "0.01", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "XRPUSD", fullname: "Ripple vs US Dollar", nominal: "10 000 XRP", quote: "0.0001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "XTZUSD", fullname: "Tezos vs US Dollar", nominal: "1 000 XTZ", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"},
    { shortname: "YCCUSD", fullname: "Yuan Chain Coin vs US Dollar", nominal: "100 000 YCC", quote: "0.00001", margin: "33%", minimumOrder: "0.01",minimumTransaction: "0.01", long: "-20%", short: "-10%", sunday: "-", trading: "00:00-23:59", friday: "Sunday to Sunday"}
]

const commodities = [
    { shortname: "USOil", fullname: "Crude Oil (WTI)", nominal: "Instrument level * USD 1000", quote: "0.001", margin: "5%", minimumOrder: "0.001",minimumTransaction: "0.001", long: "-2.5%", short: "-2.5%", sunday: " ", trading: "00:00-23:59", friday: " "},
    { shortname: "UKOil", fullname: "Crude Oil (Brent)", nominal: "Instrument level * USD 1000", quote: "0.001", margin: "5%", minimumOrder: "0.001",minimumTransaction: "0.001", long: "-2.5%", short: "-2.5%", sunday: " ", trading: "00:00-23:59", friday: " "},
    { shortname: "XAUUSD", fullname: "Gold troy ounce", nominal: "Instrument level * USD 100", quote: "0.01", margin: "5%", minimumOrder: "1",minimumTransaction: "1", long: "-15.341000", short: "-1.300000", sunday: "-", trading: "00:00-23:59", friday: "11:50"},
    { shortname: "XAGUSD", fullname: "Silver troy ounce", nominal: "Instrument level * USD 100", quote: "0.001", margin: "1%", minimumOrder: "50",minimumTransaction: "50", long: "-2.776", short: "-0.720000", sunday: "-", trading: "00:00-23:59", friday: "11:50"},
    { shortname: "XPTUSD", fullname: "Platinum troy ounce", nominal: "Instrument level * USD 100", quote: "0.01", margin: "1%", minimumOrder: "1",minimumTransaction: "1", long: "-8.470000", short: "-1.800000", sunday: "-", trading: "00:00-23:59", friday: "11:50"}
]

const contractbannerIcons = [
    { name: 'stocks', icons: ['amazon', 'airbus', 'airbnb', 'apple', 'bank-of-america', 'disney-records', 'ebay', 'facebook', 'fedex-express', 'ferrari-ges', 'general-electric', 'intel', 'microsoft', 'nvidia', 'pfizer', 'philip-morris', 'spotify', 'uber'] },
    { name: 'crypto', icons: ['BTC', 'AAVE', 'AVAX', 'ADA', 'LINK', 'CRO', 'DASH', 'MANA', 'DOGE', 'ETC', 'IOTA', 'XMR', 'NEO', 'DOT', 'SUSHI', 'XTZ', 'TRX', 'WAVES'] },
    { name: 'forex', icons: ['USD', 'CNY', 'EUR', 'GBP', 'INR', 'JPY', 'KRW', 'RUB'] },
    { name: 'commodities', icons: [] },
    { name: 'indices', icons: [] },
]

const rowItems = [
    { name: 'Stocks', arr: stocks, img: contractbannerIcons[0], leverages: 5, panel: "Stocks" },
    { name: 'Crypto', arr: crypto, img: contractbannerIcons[1], leverages: 3, panel: "Cryptocurrencies" },
    { name: 'Forex', arr: forex, img: contractbannerIcons[2], leverages: 100, panel: "Forex Pairs" },
    { name: 'Commodities', arr: commodities, img: contractbannerIcons[3], leverages: 100, panel: "Commodities" },
    { name: 'Indices', arr: indices, img: contractbannerIcons[4], leverages: 100, panel: "Indices" },

]

const TableRows = (props) => {
    getAssets();
    const assets = useSelector((state) => state.assets.data);

if (!assets) {
    return null
}
    return (
        assets ?
            props.selected.arr.map((i, index) =>
                <div className={`contract_panel__row ${index % 2 !== 0 ? 'grey-bg': ''}`} key={i.short + index}>
                    <div className="contract-banner-table__column contract__first_li">
                    <p>{i.shortname}</p>
                    </div >
                    <div className="contract-banner-table__column">
                    <p>{i.fullname}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.nominal}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.margin}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.minimumOrder}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.long}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.short}</p>
                    </div>
                    <div className="contract-banner-table__column">
                    <p>{i.trading}</p>
                    </div>
                </div >
            )
            : <div className='preloader' />
    )
}



const Contract = () =>{
    const [selected, setSelected] = useState(rowItems[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const langTokens = useSelector((state) => state.language.data);
    return(
    <>
        <section className="container contract">
            <div className="contract__title">
                <h2>
                {langTokens.CONTRACT_TITTLE}
                </h2>
            </div>
            <div className="contract-banner__instruments" style={{'marginTop': 0}}>
                <div className="container">
                    <div className="row">
                        <div className="contract-banner__items">
                            {rowItems.map((i, index) =>
                                <div className={`contract_item${selectedIndex === index ? ' contract_item--selected' : ''}`} key={index} onClick={() => {
                                    setSelected(rowItems[index]);
                                    setSelectedIndex(index);
                                }}>
                                    {i.name}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="contract-banner-table overflow">
                        <div className='contract-banner-table__rows--first contract_panel'>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_INSTRUMENT}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_FULL}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_NOMINAL}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_MARGIN}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_ORDER}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_LONG}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_SHORT}
                            </div>
                            <div className="contract-banner-table__column">
                                {langTokens.CONTRACT_COLUMN_TITTLE_HOURS}
                            </div>
                        </div>
                        <TableRows selected={selected} />
                    </div>
                </div>
            </div>
        </section>
        <MayInteresting title= 'Assets'/>
    </>
    )
}
export default Contract;