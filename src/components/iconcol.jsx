import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./icongrid.css"
import "./iconcol.css"
import "./link_arrow.css"

import arrow from "../images/icons/link-arrow.svg"

function IconCol(props) {
  const content = props.content

  return (
    <section className="section icon-wrapper">
      <div>
        <div className="icon-bg"></div>
        <h2>With our international payroll software, you can:</h2>
        <ul className="icon-col">
          {content.map((item, index) => (
            <li key={index} className="icon-col-item">
              <img src={item.icon} alt={item.alt} className="icon-img"></img>
              <div>
                <h3>{item.header}</h3>
                <p>{item.text}</p>
              </div>
              <div className={`link-arrow-black`}>
                {item.button && (
                  <a href={item.link}>
                    {item.button}
                    <img alt="arrow icon" src={arrow} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default IconCol
