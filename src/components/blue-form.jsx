import React from "react"
import Bookdemo from "../components/bookdemo"


function Blue({ children }) {
 
  return (
    <section className="blue-form"  >
      <div className="landing">
        <div className="landing-wrapper">
          <div className="flex-left">
          {children}
          </div>
          <Bookdemo />
        </div>
      </div>
    </section>
  )
}

export default Blue
