import * as React from "react"
import "./imagetext.css"
import "./home_imagetext.css"
import "./link_arrow.css"

import arrow from "../images/icons/link-arrow.svg"

const ImageText = props => {
  return (
    <section className={`${props.bg} ${props.margin} section section_home`}>
      <div
        className={`section imagetext home_imagetext ${props.size} ${props.reverse} ${props.width} ${props.padding}`}
      >
        <div className="info-imagetext">
          <h2 className="heading" id={props.id}>
            {props.title}
          </h2>
          <p
            className="paragraph_intro"
            dangerouslySetInnerHTML={{ __html: props.text_intro }}
          ></p>
          <br></br>
          <p className="" dangerouslySetInnerHTML={{ __html: props.text }}></p>
          <div className={`link-arrow-black ${props.active}`}>
            {props.button && (
              <a href={props.link}>
                {props.button}
                <img alt="arrow icon" src={arrow} />
              </a>
            )}
          </div>
        </div>
        <img
          src={props.image}
          alt={props.alt}
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
