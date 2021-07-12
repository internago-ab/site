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
    <section className="grey" data-aos="fade-up">
      {children}
    </section>
  )
}

export default Grey
