import React from "react"
import "./facts-and-stats.css"

function FactsStats({ description, countryImg }) {
  return (
    <div className="grey-country">
      <div className="section grey-inside-country imagetext medium facts-stats country-section">
        <div>
          <h2 className="heading">Country Facts</h2>
          <p>{description}</p>
        </div>

        <img src={countryImg} alt="country" />
      </div>
    </div>
  )
}

export default FactsStats
