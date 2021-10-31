import React, { useState , useEffect } from "react"
import landingPageFirst from "../images/illustrations/landingpage-first.png"
import "./imagetabs.css"

import Aos from "aos"
import "aos/dist/aos.css"

const Tab = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  const getActiveClass = (index, className) =>
    toggleState === index ? className : ""

  return (
    <div className="section tabs-large" data-aos="fade-up">
      <h2 className="tab-header">Smooth and powerful</h2>
      <div className=" tabs-main">
        <div className="tab-img-wrapper">
          <img
            className={`tab-img content-slider ${getActiveClass(
              1,
              "active-content"
            )}`}
            src={landingPageFirst}
          />
          <div
            className={`tab-img content-slider circle ${getActiveClass(
              1,
              "active-content"
            )}`}
          ></div>
        </div>
        <div className="tab-img-wrapper">
          <img
            className={`tab-img content-slider ${getActiveClass(
              2,
              "active-content"
            )}`}
            src={landingPageFirst}
          />
          <div
            className={`tab-img content-slider circle ${getActiveClass(
              2,
              "active-content"
            )}`}
          ></div>
        </div>
        <div className="tab-img-wrapper">
          <img
            className={`tab-img content-slider ${getActiveClass(
              3,
              "active-content"
            )}`}
            src={landingPageFirst}
          />
          <div
            className={`tab-img content-slider circle ${getActiveClass(
              3,
              "active-content"
            )}`}
          ></div>
        </div>
        <div className="tab-img-wrapper">
          <img
            className={`tab-img content-slider ${getActiveClass(
              4,
              "active-content"
            )}`}
            src={landingPageFirst}
          />
          <div
            className={`tab-img content-slider circle ${getActiveClass(
              4,
              "active-content"
            )}`}
          ></div>
        </div>
        <div className="container">
          <ul className="tab-list">
            <li
              className={`img-tab ${getActiveClass(1, "active-tabs")}`}
              onClick={() => toggleTab(1)}
            >
              Preboard
            </li>
            <li
              className={`img-tab ${getActiveClass(2, "active-tabs")}`}
              onClick={() => toggleTab(2)}
            >
              Manage
            </li>
            <li
              className={`img-tab ${getActiveClass(3, "active-tabs")}`}
              onClick={() => toggleTab(3)}
            >
              Automate
            </li>
            <li
              className={`img-tab ${getActiveClass(4, "active-tabs")}`}
              onClick={() => toggleTab(4)}
            >
              Analyze
            </li>
          </ul>
          <div className="content-container">
            <div
              className={`tab-text content-slider ${getActiveClass(
                1,
                "active-content"
              )}`}
            >
              <p>
                Simplify the preboarding process by gathering all critical
                employee data, digitalize the signing process, hand out tasks
                and give your candidates a proper introduction to the company
                and team members.
              </p>
              <a className="img-tabs-link" href="/">Read more</a>
            </div>

            <div
              className={`tab-text content-slider ${getActiveClass(
                2,
                "active-content"
              )}`}
            >
              <p>
                Store all important employee data in one place. Get a 360 degree
                view of critical personal information, promotions, salaries,
                feedback sessions, employment contracts, timesheets and absence.
              </p>
              <a className="img-tabs-link" href="/">Read more</a>
            </div>
            <div
              className={`tab-text content-slider ${getActiveClass(
                3,
                "active-content"
              )}`}
            >
              <p className="">
                Put your HR on autopilot. Define approval processes, delegate
                tasks and make sure no one misses important meetings or events.
                The perfect HR tool to quickly identify bottle necks and ensure
                smooth processes.
              </p>
              <a className="img-tabs-link" href="/">Read more</a>
            </div>
            <div
              className={`tab-text content-slider ${getActiveClass(
                4,
                "active-content"
              )}`}
            >
              <p className="">
                Use analytics to make data-driven decisions and become more
                proactive in your daily work. Hailey HR keeps all employee data
                in one place and makes it easier for HR organizations to elevate
                their HR game.
              </p>
              <a className="img-tabs-link" href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab