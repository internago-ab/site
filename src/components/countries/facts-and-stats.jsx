import React from "react"
import "./country-landing.css"

function FactsStats({description}) {
  return (
    <section className="section">
      <div className="imagetext medium facts-stats country-section">
        <div>
          <h2 className="heading">Country Facts</h2>
          <p className="paragraph">
            {description}
          </p>
        </div>
        <div className="facts-stats-img"></div>
      </div>
      <div className="small">
        <div className="facts-stats-table-main">
          <ul className="facts-stats-table">
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
            <li>
              <dl>
                <td>Table head</td>
                <dd>Name</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FactsStats
