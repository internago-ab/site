import React, { useEffect, useState, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import arrow from "../images/icons/arrow-black.svg"


function Icongrid(props) {
  const listRef = useRef(null)
  const [width, setWidth] = useState()
  const getListSize = () => {
    const newWidth = listRef.current.clientWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    getListSize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", getListSize)
  }, [])
  //if (typeof window !== 'undefined') {

  const postsToDisplay = 3
  const [limit, setLimit] = useState(postsToDisplay)

  const showMoreDocuments = () => {
    //setLimit(limit + 3)
    setLimit(limit ? content.length : 3)
    //const numberOfItems = showMore ? projects.length : 3;
    if (limit === 6) {
      setLimit(limit ? 3 : 3)
    }
  }

  const content = props.content

  return (
    <section className="icon-wrapper" ref={listRef}>
      <h2 className="icon-header">{props.header}</h2>
      <p
        className="icon-text"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></p>
      <div className="icon-btn">
        <div className="link-arrow-black">
          {props.button && (
            <a href={props.link}>
              {props.button} <img alt="arrow icon" src={arrow} />
            </a>
          )}
        </div>
      </div>
      <ul className="icon-grid">
        {width > 600 &&
          content.map((item, index) => (
            <li key={index} className="icon-item">
              <AnchorLink to={item.link} className="anchorlink">
                <h3>{item.header}</h3>
                <p>{item.text}</p>
              </AnchorLink>
            </li>
          ))}
        {width <= 599 &&
          content.slice(0, limit).map((item, index) => (
            <div>
              <li key={index} className="icon-item">
                <AnchorLink to={item.link} className="anchorlink">
                  <h3>{item.header}</h3>
                  <p>{item.text}</p>
                </AnchorLink>
              </li>
            </div>
          ))}
        <div className="cta-btn show-more">
          <a className="show-more" onClick={showMoreDocuments}>
            {" "}
            {limit === 6 ? "Show less" : "Show more"}
          </a>
        </div>
      </ul>
    </section>
  )
}

export default Icongrid
