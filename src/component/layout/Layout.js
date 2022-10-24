import React, {useState} from "react";
import './layout.style.css';
import clsx from "clsx";

const Layout = ({children, theme}) => {

    return (
        <div className={clsx('layout', theme === 'dark' && 'dark', theme === 'light' && 'light')}>
                { children }
        </div>

    )
}

export default Layout;
