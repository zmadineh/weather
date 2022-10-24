import React, {useEffect, useState} from "react";
import './card-item.style.css';
import {BsCaretDownFill, BsCaretUpFill} from "react-icons/bs";
import img from '../../assets/mountain.jpg';
import {weather_icons} from '../../data/weather_icons';
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";
import {days} from "../../data/days";
import {units} from "../../data/units";

const CardItem = ({theme, data, icon, lang, day_index, unit, expand}) => {

    const [currDay, setCurrDay] = useState('');
    const [weatherIcon, setWeatherIcon] = useState(weather_icons[0].src)

    const today = new Date()
    const curr_day = new Date(today)
    let curr_day_summary = '';
    let current_day_word = '';

    useEffect(() => {
        curr_day.setDate(curr_day.getDate() + day_index);
        curr_day_summary = curr_day.toString().split(' ')[0];
        current_day_word = days.filter(d => d.summary === curr_day_summary)[0].name;
        setCurrDay(current_day_word);
        setWeatherIcon(weather_icons.filter(wicon => wicon.icon === icon)[0].src)
    });

    return (
        <NavLink className={'navLink'} to={!expand ?`/forecast/${lang}/${unit}` : null}>

            <div className={clsx('card-item_container', expand && 'expand_card_item')}>

                <img src={weatherIcon} className={clsx('card_image', expand && 'expand_card_image')} />
                <p>{currDay[lang]}</p>
                <p>{Math.round(data.main.temp)} {units[unit]}</p>

                <div className={clsx(!expand && 'd-none', expand && 'card_temp_item')}>
                    <p>{Math.round(data.main.temp_max)} {units[unit]} </p>
                    <BsCaretUpFill className={'max_temp_icon'}/>
                </div>

                <div className={clsx(!expand && 'd-none', expand && 'card_temp_item')}>
                    <p>{Math.round(data.main.temp_min)} {units[unit]}  </p>
                    <BsCaretDownFill className={'min_temp_icon'}/>
                </div>

            </div>

        </NavLink>
    )
}

export default CardItem;
