import React, {useState} from "react";
import './header.style.css';
import SearchBox from "../searchBox/SearchBox";
import Button from "../button/Button";

const Header = ({theme, setTheme, lang, setLang, location, setLocation, searchLocation}) => {

    const [search, setSearch] = useState('')

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const handleLang = () => {
        setLang(lang === 'en' ? 'fa' : 'en');
    }

    const submitLocation = () => {
        searchLocation(search);
    }

    return(
        <div className={'header_container'}>
            <div className={'theme_btn_container'}>
                <button onClick={handleTheme}>dark or light</button>
            </div>
            <div className={'lang_btn_container'}>
                <button onClick={handleLang}>fa or en</button>
            </div>

            <div>
                <SearchBox search={location} setSearch={setSearch} placeholder={'Search for location'} theme={theme} setLocation={setLocation}/>
                <Button text={'Search'} buttonFunction={submitLocation} theme={theme} />
            </div>
        </div>
    )
}

export default Header;