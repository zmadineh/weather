import React, {useState} from "react";
import './layout.style.css';
import SearchBox from "../searchBox/SearchBox";
import Button from "../button/Button";
import clsx from "clsx";

const Layout = ({children, theme, setTheme}) => {

    const [search, setSearch] = useState('')

    const handleTheme = () => {
        // console.log(theme)
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div className={clsx('layout', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            <div className={'theme_btn_container'}>
                <button onClick={handleTheme}>dark or light</button>
            </div>

            <div>
                <SearchBox search={search} setSearch={setSearch} placeholder={'Search for location'} theme={theme}/>
                <Button text={'Search'} theme={theme}/>
            </div>

            <div>
                { children }
            </div>
        </div>

    )
}

export default Layout;
