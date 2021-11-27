import React from "react"
import "./country-landing.css"

function CountryLanding({ title, bgimg }) {
  console.log(title)
  return (
    <div
      className="country-landing-main country-section"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="medium country-landing-content">
        <h1 className="heading">Hire employees and contractors in {title}</h1>
        <p className="paragraph">Our guide to employing in {title}.</p>
        <div className="cta-btn">
          <a href="mailto:info@internago.com">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default CountryLanding
