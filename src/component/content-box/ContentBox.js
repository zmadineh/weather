import React from "react";
import './content-box.css';

const ContentBox = ({theme, children}) => {
    return (
        <div className={'content_container'}>
            {children}
        </div>
    )
}

export default ContentBox;
