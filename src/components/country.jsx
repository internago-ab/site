import * as React from "react"
import { useEffect } from "react"
import "./imagetext.css"

import Aos from "aos"
import "aos/dist/aos.css"

const Country = props => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="section" data-aos="fade-up">
      <div className="info-imagetext">
        <h2 className="heading">{props.title}</h2>
        <p
          className="paragraph"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></p>
        <div className={`cta-btn ${props.active}`}>
          {props.button && <a href={props.link}>{props.button}</a>}
        </div>
      </div>
      <img
        src={props.image}
        alt=""
        className="img-imagetext"
      />
    </section>
  )
}

export default Country
