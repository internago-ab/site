import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./icongrid.css"

function Icongrid(props) {
  const content = props.content

  return (
    <ul className="icon-grid">
      {content.map((item, index) => (
        <li key={index} className="icon-item">
          <AnchorLink to={item.link} className='anchorlink'>
            <img src={item.icon} alt="small icon"></img>
            <h3>{item.header}</h3>
            <p>{item.text}</p>
          </AnchorLink>
        </li>
      ))}
    </ul>
  )
}

export default Icongrid
