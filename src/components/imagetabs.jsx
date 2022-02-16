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
                Onboarding
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
                Process
              </button>
            </li>
            <li>
              <button
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`img-tab img-tab-last ${getActiveClass(
                  4,
                  "active-tabs"
                )}`}
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
                Simplify the onboarding process by using Internago’s payroll
                platform to gather and upload your critical employee and payroll
                data.
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
                Store and manage all payroll and employee data in one place
                online. Get an instant view of critical personal information,
                salaries, employment contracts, insurance documents and absences
                on multiple markets. Add new employees, update salaries, bonuses
                etc. as your company grows.
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
                Use the payroll platform to improve work efficiency. Define and
                customise approval processes, delegate tasks and use specific
                reminders to make sure no one in your organization misses
                important deadlines. A perfect payroll tool to ensure a smooth
                payroll process.
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
                Use the data to make qualified decisions and become more
                proactive in your daily work. Internago keeps all payroll data
                in one place and makes it easy for your company to manage your
                international employees.
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
