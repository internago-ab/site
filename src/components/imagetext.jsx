import * as React from "react"
import "./imagetext.css"

const ImageText = props => {
  let CustomTag
  if (props.size === "large") {
    CustomTag = "h1"
  } else if (props.size === "medium") {
    CustomTag = "h2"
  } else if (props.size === "small") {
  }

  return (
    <section className="hero">
      <div>
        <CustomTag className="heading">{props.title}</CustomTag>
        <p className="paragraph">{props.text}</p>
        <a className="cta-btn" href="">
          {props.button}
        </a>
      </div>
      <div>
        <img src={props.image} alt="" srcset="" className="img-imagetext" />
      </div>
    </section>
  )
}

export default ImageText
