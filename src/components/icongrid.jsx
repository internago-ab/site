import React from 'react';
import "./icongrid.css"

function Icongrid(props) {
    const content = props.content

    return (
        <div className="icon-grid">
            {content.map((item) => (
                <div className="icon-item">
                    <img src={item.icon} alt="small icon"></img>
                    <p>{item.text}</p>
                </div>
            ))}  
        </div>
    );
}

export default Icongrid;