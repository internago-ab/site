import * as React from "react"
import "./quotes.css"

const Quotes = props => {
  return (
    <div className={`quotes ${props.size}`}>
      <p>{props.text}</p>
      <p className="quotes-name">{props.author}</p>
      <p className="quotes-name">{props.company}</p>
    </div>
  )
}

export default Quotes
