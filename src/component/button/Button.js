import React from "react";
import './button.style.css';
import clsx from "clsx";

const Button = ({text, theme}) => {
    return (
        <div>
            <button className={clsx('button', theme === 'dark' && 'dark', theme === 'light' && 'light')}> {text} </button>
        </div>
    )
}

export default Button;