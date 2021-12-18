import * as React from "react"
import { useEffect } from "react"
import "./imagetext.css"

import Aos from "aos"
import "aos/dist/aos.css"

const ImageText = props => {
  let CustomTag
  if (props.size === "large") {
    CustomTag = "h1"
  } else if (props.size === "medium") {
    CustomTag = "h2"
  } else if (props.size === "small") {
    CustomTag = "h3"
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className={props.bg} data-aos="fade-up">
      <div className={`section imagetext ${props.size} ${props.reverse}`}>
        <div className="info-imagetext">
          <CustomTag className="heading" id={props.id}>
            {props.title}
          </CustomTag>
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
          style={
            props.reverse
              ? { marginRight: "var(--spacing-s)" }
              : { marginLeft: "var(--spacing-s)" }
          }
        />
      </div>
    </section>
  )
}

export default ImageText
