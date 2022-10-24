import React from "react";
import './content-box.css';
import clsx from "clsx";

const ContentBox = ({theme, children, className = 'content_box'}) => {
    return (
            <div className={clsx(className, theme === 'dark' && 'dark', theme === 'light' && 'light')}>
                {children}
            </div>

    )
}

export default ContentBox;
