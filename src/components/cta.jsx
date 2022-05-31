import React from "react"

import "./cta.css"
import largeWave from "../images/wave.svg"

function Cta(props) {
  let heading
  let text

  if (props.content === "next") {
    heading = "What's next?"
    text =
      "Internago offers a wide range of services ‎to support your international business. Our experts are available to answer your questions on our payroll services, to arrange a demo of our portal, and generally to guide you."
  } else if (props.content === "more") {
    heading = "Want to know more?"
  } else if (props.content === "about") {
    heading = "About Internago"
    text =
      "Internago offers subsidiary management, HR and international payroll services combined with international payroll software and professional business advisory services."
  }

  return (
    <section className={props.noMargin ? "cta cta-no-margin" : "cta"}>
      <img src={largeWave} alt="wave border"></img>
      <div className="content">
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="cta-btn">
          <a href="/contact#form">Contact us today</a>
        </div>
      </div>
    </section>
  )
}

export default Cta
