import React from "react"
import "./country-landing.css"

function CountryLanding({ post }) {
  return (
    <div className="country-landing-main country-section">
      <div className='medium country-landing-content'>
        <h1 className="heading">Hire employees and contractors in Country</h1>
        <p className="paragraph">Remote’s guide to employing in Country.</p>
        <div className="cta-btn">
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default CountryLanding
