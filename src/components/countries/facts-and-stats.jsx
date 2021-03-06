import React from "react"
import "./facts-and-stats.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function FactsStats({ description, countryImg }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="grey-country">
      <div
        className="section grey-inside-country imagetext medium facts-stats country-section"
        data-aos="fade-up"
      >
        <div className="country-inside">
          <h2 className="heading">Country Facts</h2>
          <p>{description}</p>
        </div>
        <img src={countryImg} alt="country" className="country-inside" />
      </div>
    </div>
  )
}

export default FactsStats
