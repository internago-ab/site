import React from "react"
import { useEffect, useState, useRef } from "react"
import Chevron from "./chevron"
import "./accordion.css"

import Aos from "aos"

function Accordion(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion-icon")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "accordion-active" : "")
    setHeightState(setActive === "accordion-active" ? "0px" : "600px")
    setRotateState(
      setActive === "accordion-active"
        ? "accordion-icon"
        : "accordion-icon rotate"
    )
  }
  const contentMail = props.contentMail

  return (
    <section className="collapse flags-wrapper section accordion-grid medium">
      <div className={`collapse-btn ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={20} fill={"#4E4E4E"} />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content "
      >
        <div className="collapse-content flags-grid show-mail accordion-text">
          {contentMail.map((item, index) => (
            <li key={index} className="">
              <img alt="flag icon" src={item.flag} />
              <a href={item.mail}>{item.adress}</a>
            </li>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accordion
