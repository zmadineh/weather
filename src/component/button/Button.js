import React from "react";
import './button.style.css';
import clsx from "clsx";

const Button = ({text, buttonFunction, theme}) => {
    return (
        <div className={'button_container'}>
            <button className={clsx('button', theme === 'dark' && 'dark', theme === 'light' && 'light')}
            onClick={buttonFunction}> {text} </button>
        </div>
    )
}

export default Button;