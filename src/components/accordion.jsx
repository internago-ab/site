import React from "react"
import { useEffect, useState, useRef } from "react"
import Chevron from "./chevron"
import "./accordion.css"
//flags
import sweden from "../images/flags/sweden.png"
import finland from "../images/flags/finland.png"
import spain from "../images/flags/spain.png"
import france from "../images/flags/france.png"
import italy from "../images/flags/italy.png"
import germany from "../images/flags/germany.png"
import holland from "../images/flags/holland.png"

import Aos from "aos"
import "aos/dist/aos.css"

function Accordion() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion-icon")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "accordion-active" : "")
    setHeightState(setActive === "accordion-active" ? "0px" : "250px")
    setRotateState(
      setActive === "accordion-active"
        ? "accordion-icon"
        : "accordion-icon rotate"
    )
  }
  return (
    <section className="collapse section medium" data-aos="fade-up">
      <div
        
        className={`collapse-btn ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title">
          show list of emails for our main markets
        </p>
        <Chevron className={`${setRotate}`} width={20} fill={"#4E4E4E"} />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content "
      >
        <div />
        <div className="collapse-content show">
          <ul>
            <li>
              <img src={finland} />
              <a href="mailto:finland@internago.com">Finland</a>
            </li>
            <li>
              <img src={france} />
              <a href="mailto:finland@internago.com">France</a>
            </li>
            <li>
              <img src={spain} />
              <a href="mailto:finland@internago.com">Spain</a>
            </li>
            <li>
              <img src={sweden} />
              <a href="mailto:finland@internago.com">Sweden</a>
            </li>
            <li>
              <img src={italy} />
              <a href="mailto:finland@internago.com">Italy</a>
            </li>
            <li>
              <img src={holland} />
              <a href="mailto:finland@internago.com">Holland</a>
            </li>
            <li>
              <img src={germany} />
              <a href="mailto:finland@internago.com">Germany</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Accordion
