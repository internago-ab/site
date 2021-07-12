import React, { useState } from "react"
import "./tabs.css"
import info from "./tabs-data"

function Tabs() {
  const [value, setValue] = useState(0)

  const { duties } = info[value]
  return (
    <section>
      <div className="tabs">
        <div className="btn-container">
          {info.map((job, index) => (
              <button
                key={job.id}
                className={`tabs-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
          ))}
        </div>

        <ul className="tabs-info">         
          {duties.map((dutie, index) => <li key={index}>{dutie}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default Tabs
