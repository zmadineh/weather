import React from "react";
import './searchBox.style.css';
import { BiSearch } from "react-icons/bi";
import clsx from "clsx";

const SearchBox = ({search, setSearch, placeholder, theme}) => {

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <div className={clsx('searchBox_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            <BiSearch className={'search_icon'}/>
            <input type={'text'} name={'search'}  value={search} className={'search_input'} placeholder={placeholder} onChange={handleInputChange}/>
        </div>
    )
}

export default SearchBox;