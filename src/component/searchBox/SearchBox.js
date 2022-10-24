import React from "react";
import './searchBox.style.css';
import clsx from "clsx";
import {search_options} from "../../data/options";
import Select from 'react-select'



const SearchBox = ({search, setSearch, placeholder, theme, setLocation}) => {

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setLocation(e.value)
        setSearch(e.value)
    }

    return (
        <div className={clsx('searchBox_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            {/*<BiSearch className={'search_icon'}/>*/}
            {/*<input type={'text'} name={'search'}  value={search} className={'search_input'} placeholder={placeholder} onChange={handleInputChange}/>*/}
            <Select options={search_options} value={search} className={'select_box'} placeholder={placeholder} onChange={handleInputChange}/>
        </div>
    )
}

export default SearchBox;