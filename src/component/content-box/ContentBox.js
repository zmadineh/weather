import React from "react";
import './content-box.css';

const ContentBox = ({theme, children, className = 'content_box'}) => {
    return (

            <div className={className}>
                {children}
            </div>

    )
}

export default ContentBox;
