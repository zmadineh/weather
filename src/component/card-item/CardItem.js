import React, {useEffect, useState} from "react";
import './card-item.style.css';
import img from '../../assets/mountain.jpg';
import {weather_icons} from '../../data/weather_icons';
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";

const CardItem = ({data, icon, lang, day_index, unit, expand}) => {

    const [currDay, setCurrDay] = useState('');
    const [weatherIcon, setWeatherIcon] = useState(weather_icons[0].src)

    const today = new Date()
    const curr_day = new Date(today)

    useEffect(() => {
        curr_day.setDate(curr_day.getDate() + day_index);
        setCurrDay(curr_day.toString().split(' ')[0]);
        setWeatherIcon(weather_icons.filter(wicon => wicon.icon === icon)[0].src)
    });

    return (
        <NavLink className={'navLink'} to={!expand ?`/forecast/${lang}/${unit}` : null}>
            <div className={clsx('card-item_container', expand && 'expand_card_item')}>
                <img src={weatherIcon} className={clsx('card_image', expand && 'expand_card_image')} />
                <p>{currDay}</p>
                <p>{data.main.temp.toFixed(0)} °C</p>
            </div>
        </NavLink>
    )
}

export default CardItem;
