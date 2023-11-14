import React from "react"
import { useEffect } from "react"

import Aos from "aos"

import "./grey.css"

function GreyAnimation({ children, props }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="grey" data-aos="fade-in">
      <div className="section grey-inside">
        <div className="grey-bottom">{children}</div>
      </div>
    </section>
  )
}

export default GreyAnimation
