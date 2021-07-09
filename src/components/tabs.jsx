import React, { useState, useEffect } from "react"
import "./tabs.css"
import info from "./tabs-data"

function Tabs() {
  const [jobs, setJobs] = useState(info)
  const [value, setValue] = useState(0)

  useEffect(() => {}, [value])

  const { company, duties } = jobs[value]
  return (
    <section>
      <div className="tabs">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`tabs-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>

        <article className="tabs-info">
          <h3>{company} :</h3>
         
          {duties.map((dutie, index) => {
            return (
              <div key={index}>
                  <br></br>
                <p>{dutie}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Tabs
