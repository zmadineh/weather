import React from "react";
import './main-card-item.style.css';
import mountain_img from '../../assets/mountain.jpg';
import clsx from "clsx";

const MainCardItem = ({theme, children}) => {
    return (
        <div className={clsx('MainCardItem_container', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
            <div className={'mainCard_overlay'}></div>

            <div className={'mainCardContent_container'}>
                {children}
            </div>

        </div>
    )
}

export default MainCardItem;