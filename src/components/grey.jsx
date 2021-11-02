import React from "react"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"
import "./grey.css"

function Grey({ children }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="grey-top">
      <div className="section grey-inside" data-aos="fade-up">
        {children}
      </div>
    </section>
  )
}

export default Grey
