import React from "react"
import "./icongrid.css"

function ContactIcon(props) {
  const content = props.content

  return (
    <ul className="contact-icon-grid">
      {content.map((item, index) => (
        <li key={index} className="contact-icon-item">
          <img src={item.icon} alt={item.alt}></img>
          <h3>{item.header}</h3>
          <p>{item.text}</p>
          <div className={`cta-btn contact-icon-btn ${item.active}`}>
            {item.button && <a href={item.link}>{item.button}</a>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ContactIcon
