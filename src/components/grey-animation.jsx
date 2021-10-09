import React from "react"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

import "./grey.css"

function GreyAnimation({ children }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="grey" data-aos="fade-up">
      <div className='section grey-inside'>
      {children}
      </div>
    </section>
  )
}

export default GreyAnimation
