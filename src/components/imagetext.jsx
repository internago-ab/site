import * as React from "react"
import "./layout.css"
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
    <section className={`imagetext ${props.size} ${props.reverse}`}>
      <div className="info-imagetext">
        <CustomTag className="heading">{props.title}</CustomTag>
        <p className="paragraph">{props.text}</p>
        <a className="cta-btn" href={props.link}>
          {props.button}
        </a>
      </div>
      <img
        src={props.image}
        alt=""
        srcset=""
        className="img-imagetext"
        style={
          props.reverse
            ? { marginRight: "var(--spacing-s)" }
            : { marginLeft: "var(--spacing-s)" }
        }
      />
    </section>
  )
}

export default ImageText
