import * as React from "react"
import arrow from "../images/icons/arrow-black.svg"
import "./imagetext.css"

const ImageText = props => {
  let CustomTag
  if (props.size === "large") {
    CustomTag = "h1"
  } else if (props.size === "medium") {
    CustomTag = "h2"
  } else if (props.size === "small") {
    CustomTag = "h3"
  }

  return (
    <section className={`${props.bg} ${props.margin} section`}>
      <div
        className={`section imagetext ${props.size} ${props.reverse} ${props.width} ${props.padding}`}
      >
        <div className="imagetext-content">
          <CustomTag className="heading" id={props.id}>
            {props.title}
          </CustomTag>
          <p
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
          <div className="link-arrow-black">
            {props.button && (
              <a href={props.link}>
                {props.button} <img alt="arrow icon" src={arrow} />
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
