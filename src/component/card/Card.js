import React from "react";
import './card.style.css';
import clsx from "clsx";

const Card = ({theme, children}) => {
    return (
        <div className={clsx('card_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            { children }
        </div>
    )
}

export default Card;