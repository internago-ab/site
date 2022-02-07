import React, { useState, useEffect } from "react"
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

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      toggleTab()
    }
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
            alt="computer"
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
            alt="computer"
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
            alt="computer"
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
            alt="computer"
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
            <li>
              <button
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`img-tab ${getActiveClass(1, "active-tabs")}`}
                onClick={() => toggleTab(1)}
              >
                Preboard
              </button>
            </li>
            <li>
              <button
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`img-tab ${getActiveClass(2, "active-tabs")}`}
                onClick={() => toggleTab(2)}
              >
                Manage
              </button>
            </li>
            <li>
              <button
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`img-tab ${getActiveClass(3, "active-tabs")}`}
                onClick={() => toggleTab(3)}
              >
                Automate
              </button>
            </li>
            <li>
              <button
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`img-tab img-tab-last ${getActiveClass(4, "active-tabs")}`}
                onClick={() => toggleTab(4)}
              >
                Analyze
              </button>
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
                Simplify the onboarding process by gathering all critical
                employee and payroll data and upload it to the Internago Web
                Portal.
              </p>
              <div className="cta-btn">
                <a href="/">Read more</a>
              </div>
            </div>

            <div
              className={`tab-text content-slider ${getActiveClass(
                2,
                "active-content"
              )}`}
            >
              <p>
                Store all important payroll and employee data in one place. Get
                a 360 degree view of critical personal information, promotions,
                salaries, employment contracts, insurance documents and
                absences.
              </p>
              <div className="cta-btn">
                <a href="/">Read more</a>
              </div>
            </div>
            <div
              className={`tab-text content-slider ${getActiveClass(
                3,
                "active-content"
              )}`}
            >
              <p className="">
                Put your payroll on autopilot. Define approval processes,
                delegate tasks, and make sure no one misses important deadlines.
                Internago offers the perfect payroll tool to quickly identify
                bottlenecks and ensure smooth processes.
              </p>
              <div className="cta-btn">
                <a href="/">Read more</a>
              </div>
            </div>
            <div
              className={`tab-text content-slider ${getActiveClass(
                4,
                "active-content"
              )}`}
            >
              <p className="">
                Put your payroll on autopilot. Define approval processes,
                delegate tasks, and make sure no one misses important deadlines.
                Internago offers the perfect payroll tool to quickly identify
                bottlenecks and ensure smooth processes.
              </p>
              <div className="cta-btn">
                <a href="/">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
