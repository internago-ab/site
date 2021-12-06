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
import netherlands from "../images/flags/netherlands.png"
import belgium from "../images/flags/belgium.png"
import switzerland from "../images/flags/switzerland.png"
import portugal from "../images/flags/portugal.png"
import hungary from "../images/flags/hungary.png"

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
    setHeightState(setActive === "accordion-active" ? "0px" : "650px")
    setRotateState(
      setActive === "accordion-active"
        ? "accordion-icon"
        : "accordion-icon rotate"
    )
  }
  return (
    <section className="collapse section medium" data-aos="fade-up">
      <div className={`collapse-btn ${setActive}`} onClick={toggleAccordion}>
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
              <img src={belgium} alt="flag-belgium" />
              <a href="mailto:belgium@internago.com">belgium@internago.com</a>
            </li>
            <li>
              <img src={finland} alt="flag-finland" />
              <a href="mailto:finland@internago.com">finland@internago.com</a>
            </li>
            <li>
              <img src={france} alt="flag-france" />
              <a href="mailto:france@internago.com">france@internago.com</a>
            </li>
            <li>
              <img src={germany} alt="flag-germany" />
              <a href="mailto:germany@internago.com">germany@internago.com</a>
            </li>
            <li>
              <img src={hungary} alt="flag-hungary" />
              <a href="mailto:hungary@internago.com">hungary@internago.com</a>
            </li>
            <li>
              <img src={italy} alt="flag-italy" />
              <a href="mailto:italy@internago.com">italy@internago.com</a>
            </li>
            <li>
              <img src={netherlands} alt="netherlands-netherlands" />
              <a href="mailto:netherlands@internago.com">
                netherlands@internago.com
              </a>
            </li>
            <li>
              <img src={portugal} alt="flag-portugal" />
              <a href="mailto:portugal@internago.com">portugal@internago.com</a>
            </li>
            <li>
              <img src={spain} alt="flag-spain" />
              <a href="mailto:spain@internago.com">spain@internago.comn</a>
            </li>
            <li>
              <img src={sweden} alt="flag-sweden" />
              <a href="mailto:sweden@internago.com">sweden@internago.com</a>
            </li>
            <li>
              <img src={switzerland} alt="flag-switzerland" />
              <a href="mailto:switzerland@internago.com">
                switzerland@internago.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Accordion
