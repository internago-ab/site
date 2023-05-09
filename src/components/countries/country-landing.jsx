import React from "react"
import "./country-landing.css"
import arrow from "../../images/icons/arrow-white.svg"

function CountryLanding({ title, bgimg }) {
  return (
    <div
      className="country-landing-main country-section"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="medium country-landing-content">
        <h1 className="heading">Hire employees and manage payroll in {title}</h1>
        <p className="paragraph">Our guide to employing in {title}.</p>
        <div className="link-arrow">
            <a href="mailto:info@internago.com">
              Contact us <img alt="arrow icon" src={arrow} />
            </a>
          </div>
      </div>
    </div>
  )
}

export default CountryLanding
