import React, {useState} from "react";
import './header.style.css';
import SearchBox from "../searchBox/SearchBox";
import Button from "../button/Button";
import clsx from "clsx";
import Select from "react-select";
import {lang_options, theme_option} from "../../data/options";
import {Link} from "react-router-dom";


const Header = ({theme, setTheme, lang, setLang, location, setLocation, searchLocation, home}) => {

    const [search, setSearch] = useState('')

    const handleTheme = (e) => {
        setTheme(e.value);
    }

    const handleLang = (e) => {
        setLang(e.value);
    }

    const submitLocation = () => {
        searchLocation(search);
    }

    return(
        <div className={'header_container'}>
            <div className={'btn_container'}>
                <Select options={theme_option} value={theme} className={'select_width'} placeholder={`${theme_option.filter(t => t.value === theme)[0].label}`} onChange={handleTheme}/>
                <Select options={lang_options} value={lang} className={'select_width'} placeholder={`${lang_options.filter(l => l.value === lang)[0].label}`} onChange={handleLang}/>
            </div>
            <div className={'link_container'}>
                <Link className={clsx(home && 'd-none', 'link')} to={'/'}> -> </Link>
            </div>

            <div className={clsx(!home && 'd-none', 'search_container')}>
                <SearchBox search={location} setSearch={setSearch} placeholder={'Search for location'} theme={theme} setLocation={setLocation}/>
                <Button text={'Search'} buttonFunction={submitLocation} theme={theme} />
            </div>
        </div>
    )
}

export default Header;