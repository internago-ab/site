import React from 'react';

import "./cta.css"
import largeWave from "../images/wave.svg"

function Cta(props) {
    
    let heading
    let text

    if (props.content === "next") {
        heading = "What's next?"
        text = "A complete range of services to support your international business. We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
    } else if (props.content === "more") {
        heading = "Want to know more?"
    } else if (props.content === "about") {
        heading = "About Internago"
        text = "Internago offers subsidiary management, HR and international payroll services combined with international payroll software and professional business advisory services."
    }

    return (
        <section className="cta">
            <img src={largeWave} alt="wave border"></img>
            <div className="content">
                <h2>{heading}</h2>
                <p>{text}</p>
                <a href="mailto:info@internago.com" className="cta-btn">Contact us today</a>
            </div>
        </section>
    );
}

export default Cta;