import React from "react";
import './main-card-item.style.css';
import clsx from "clsx";

const MainCardItem = ({theme, children}) => {
    return (
        <div className={clsx('MainCardItem_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            <div className={'mainCard_overlay'}></div>

            <div className={'mainCardContent_container'}>
                { children }
            </div>

        </div>
    )
}

export default MainCardItem;