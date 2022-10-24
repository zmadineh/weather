import React, { useState } from 'react';
import './home-page.style.css';
import { useSelector, useDispatch } from "react-redux";
import {GoLocation} from "react-icons/go";
import Card from "../../component/card/Card";
import Layout from "../../component/layout/Layout";
import MainCardItem from "../../component/main-card-item/MainCardItem";
import ContentBox from "../../component/content-box/ContentBox";
import CardItem from "../../component/card-item/CardItem";
import {fetchWeatherAsync} from "../../toolkit/slices/weather.slice";
import currentDayForecast from "../../helper/getCurrentDayDetailedForcast";
import clsx from "clsx";
import {fetchWeatherForecastAsync} from "../../toolkit/slices/weather_forecast.slice";
import {getCurrentDay} from "../../helper/getCurrentDay";
import {Link, NavLink} from "react-router-dom";
import Header from "../../component/header/Header";

const HomePage= ({ theme, setTheme }) => {


    const isReceived = useSelector((state) => state.weather.isReceived);
    const loading = useSelector((state) => state.weather.loading);
    const error = useSelector((state) => state.weather.error);
    const data = useSelector((state) => state.weather.data);

    const forecastData_isReceived = useSelector((state) => state.weatherForecast.isReceived);
    const forecastData = useSelector((state) => state.weatherForecast.data);

    const dispatch = useDispatch();

    const [location, setLocation] = useState('iran');
    const [lang, setLang] = useState('fa'); // fa / en
    const [unit, setUnit] = useState('metric'); // standard (K) / imperial (F) / metric (C)

    const {current_day_word, current_day_num, current_month} = getCurrentDay();
    const day_index = {en: 'th', fa: 'ام'};

    const searchLocation = (search_) => {
        // setLocation(search_);
        const payload = {location:search_, unit};
        dispatch(fetchWeatherAsync(payload));
        dispatch(fetchWeatherForecastAsync(payload));
    }

    return (
        <div>
            <Layout theme={theme}>
                <Header setTheme={setTheme} lang={lang} setLang={setLang} setLocation={setLocation} searchLocation={searchLocation} />
                <Card theme={theme}>
                    <MainCardItem theme={theme}>
                        <div className={clsx('text_container', lang==='fa' && 'rtl_col', lang==='en' && 'ltr_col')}>
                            <h2>{current_day_word[lang]}</h2>
                            <p>{current_month[lang]} {current_day_num}{day_index[lang]}</p>
                            <div className={clsx('current-loc_p', lang==='fa' && 'rtl_row', lang==='en' && 'ltr_row')}>
                                <GoLocation />
                                <p>{isReceived ? data[lang].name : null}</p>
                            </div>
                        </div>

                        <div className={clsx('text_container', lang==='fa' && 'rtl_col', lang==='en' && 'ltr_col')}>
                            <h2>{isReceived ? data[lang].main.temp : null} °C</h2>
                            <p>{isReceived ? data[lang].weather[0].description : null}</p>
                        </div>
                    </MainCardItem>

                    <div className={'home_content'}>
                        <ContentBox theme={theme} className={'content_box'}>
                            {isReceived ? currentDayForecast(data[lang]).map(obj =>
                                <div key={obj.name[lang]} className={clsx('content_rows', lang==='fa' && 'rtl_row', lang==='en' && 'ltr_row')}>
                                    <div>{obj.name[lang]}</div>
                                    <div>{isReceived ? obj.value : null} {obj.unit}</div>
                                </div>
                            ) : null}
                        </ContentBox>

                        {isReceived && forecastData_isReceived ?
                        <ContentBox className={'forecast_box'}>
                            {forecastData[lang].map(fdata =>
                                <CardItem key={fdata.dt_txt} data={fdata} day_index={fdata.day_index} icon={fdata.weather[0].icon} unit={unit} lang={lang} expand={false}/>
                            )}
                        </ContentBox>
                        : null}
                    </div>
                </Card>
            </Layout>
        </div>
    );
}

export default HomePage;
