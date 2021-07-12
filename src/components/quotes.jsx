import * as React from "react"
import "./quotes.css"

const Quotes = props => {
  return (
    <div className={`quotes ${props.size}`}>
      <p dangerouslySetInnerHTML={{ __html: props.text}}></p>
      <p className="quotes-name" dangerouslySetInnerHTML={{ __html: props.author}}></p>
    </div>
  )
}

export default Quotes
