import * as React from "react"
import "./quotes.css"

const Quotes = props => {
  return (
    <div className="quotes">
      <p>{props.text}</p>
      <p>{props.author}</p>
      <p>{props.company}</p>
    </div>
  )
}

export default Quotes
