import React from "react";
import './card-list.style.css';

const CardList = ({children}) => {
    return (
        <div className={'card-list_container'}>
            { children }
        </div>
    )
}

export default CardList;