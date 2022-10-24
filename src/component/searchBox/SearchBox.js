import React from "react";
import './searchBox.style.css';
import { BiSearch } from "react-icons/bi";
import clsx from "clsx";

import Select from 'react-select'

const options = [
    { value: 'iran', label: 'iran' },
    { value: 'london', label: 'london' },
    { value: 'japon', label: 'japon' }
]

const SearchBox = ({search, setSearch, placeholder, theme, setLocation}) => {

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setLocation(e.label)
        setSearch(e.label)
    }

    return (
        <div className={clsx('searchBox_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            {/*<BiSearch className={'search_icon'}/>*/}
            {/*<input type={'text'} name={'search'}  value={search} className={'search_input'} placeholder={placeholder} onChange={handleInputChange}/>*/}
            <Select options={options} value={search} className={'select_box'} placeholder={placeholder} onChange={handleInputChange}/>
        </div>
    )
}

export default SearchBox;