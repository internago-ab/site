import * as React from "react"
import arrow from "../images/icons/arrow-black.svg"
import "./imagetext.css"

const ImageTextOver = props => {
  return (
    <div className={`section ${props.reverse}`}>
      <div className={`bg-text-image ${props.id}`}>
        <div className="text-container">
          <h2>{props.title}</h2>
          <p
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
          <div className="link-arrow-black">
            <a href={props.link}>
              {props.button}
              <img alt="arrow icon" src={arrow} />
            </a>
          </div>
        </div>
        <div className={`image-container ${props.width}`}>
          <img src={props.image} alt={props.alt} className="img-imagetext" />
        </div>
      </div>
    </div>
  )
}

export default ImageTextOver
