import React from "react"
import "./country-landing.css"

function CountryLanding({ title }) {
  console.log(title)
  return (
    <div className="country-landing-main country-section">
      <div className="medium country-landing-content">
        <h1 className="heading">
          Hire employees and contractors in Country {title}
        </h1>
        <p className="paragraph">Remote’s guide to employing in {title}.</p>
        <div className="cta-btn">
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default CountryLanding
