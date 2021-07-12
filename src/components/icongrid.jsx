import React from "react"
import "./icongrid.css"

function Icongrid(props) {
  const content = props.content

  return (
    <ul className="icon-grid">
      {content.map((item, index) => (
        <li key={index} className="icon-item">
          <img src={item.icon} alt="small icon"></img>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default Icongrid
