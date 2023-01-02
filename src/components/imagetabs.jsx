import React, { useState, useEffect } from "react"
import timeAbsence from "../images/screenshots/time-and-absence.png"
import employees from "../images/screenshots/employees.png"
import expenseClaims from "../images/screenshots/expense-claims.png"
import dashboard from "../images/screenshots/dashboard.png"
import "./imagetabs.css"

import Aos from "aos"
import "aos/dist/aos.css"

const Tab = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
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
    <div className="section tabs-top" data-aos="fade-in">
      <div className="tabs-large">
        <h2 className="tab-header heading">Simple, efficient and powerful</h2>
        <div className=" tabs-main">
          <div className="tab-img-wrapper">
            <img
              className={`tab-img content-slider ${getActiveClass(
                1,
                "active-content"
              )}`}
              src={dashboard}
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
              src={employees}
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
              src={timeAbsence}
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
              src={expenseClaims}
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
                  Simplify the onboarding process by using our platform to
                  upload employee and payroll data.
                </p>
                <div className="cta-btn">
                  <a href="/payroll">Read more</a>
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
                  online. Instant access to personal information‎, salary
                  details, employment contracts, insurance policies, and absence
                  records. As your business evolves, easily add new employees
                  and update salaries, bonuses and other details.
                </p>
                <div className="cta-btn">
                  <a href="/payroll">Read more</a>
                </div>
              </div>
              <div
                className={`tab-text content-slider ${getActiveClass(
                  3,
                  "active-content"
                )}`}
              >
                <p className="">
                  Utilise our payroll platform to improve business efficiency.
                  ‎Approval processes and delegation levels can be defined and
                  customised, and reminders set around important deadlines. In
                  short, the perfect tool for a trouble-free payroll process.
                </p>
                <div className="cta-btn">
                  <a href="/payroll">Read more</a>
                </div>
              </div>
              <div
                className={`tab-text content-slider ${getActiveClass(
                  4,
                  "active-content"
                )}`}
              >
                <p className="">
                  With payroll information in one place, we make it easier for
                  you to manage your employees on an international basis. You
                  will have the data to inform decisions, and to enable your HR
                  team to be more proactive and productive.
                </p>
                <div className="cta-btn">
                  <a href="/payroll">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
