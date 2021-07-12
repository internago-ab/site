import * as React from "react"
import { useEffect } from "react"
import "./quotes.css"

import Aos from "aos"
import "aos/dist/aos.css"

const Quotes = props => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className={`quotes ${props.size}`} data-aos="fade-up">
      <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
      <p
        className="quotes-name"
        dangerouslySetInnerHTML={{ __html: props.author }}
      ></p>
    </div>
  )
}

export default Quotes
