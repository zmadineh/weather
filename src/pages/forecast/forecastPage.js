import React, {useState} from "react";
import ContentBox from "../../component/content-box/ContentBox";
import CardItem from "../../component/card-item/CardItem";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentDay} from "../../helper/getCurrentDay";
import {fetchWeatherAsync} from "../../toolkit/slices/weather.slice";
import {fetchWeatherForecastAsync} from "../../toolkit/slices/weather_forecast.slice";
import {useParams} from "react-router-dom";
import Layout from "../../component/layout/Layout";

const ForecastPage = ({ theme }) => {

    const {lang, unit} = useParams();

    const isReceived = useSelector((state) => state.weather.isReceived);

    const forecastData_isReceived = useSelector((state) => state.weatherForecast.isReceived);
    const forecastData = useSelector((state) => state.weatherForecast.data);

    const dispatch = useDispatch();

    // const searchLocation = (search_) => {
    //     // setLocation(search_);
    //     const payload = {location:search_, unit};
    //     dispatch(fetchWeatherAsync(payload));
    //     dispatch(fetchWeatherForecastAsync(payload));
    // }

    return (

            <Layout theme={theme}>
            {isReceived && forecastData_isReceived ?
                <ContentBox className={'large-forecast_box'}>
                    {forecastData[lang].map(fdata =>
                        <CardItem key={fdata.dt_txt} data={fdata} day_index={fdata.day_index} icon={fdata.weather[0].icon} unit={'°C'} expand={true}/>
                    )}
                </ContentBox>
                : null}
            </Layout>

    );
}

export default ForecastPage;