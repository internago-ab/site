import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import arrow from "../images/icons/link-arrow.svg"

import Aos from "aos"
import "./manuals.css"


function ManualCard({ post, setFilter }) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const ref = useRef()
  const [subMenuOpen, setSubMenuOpen] = useState(-1)
  const toggleMenu = x => setSubMenuOpen(subMenuOpen === x ? -1 : x)

  function toggleAccordion(e) {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(setActive === "active" ? "0px" : "650px")
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (setActive && ref.current && !ref.current.contains(e.target)) {
        //setActiveState(false)
        //setHeight("0px")
        setHeightState(setActive === "" ? "0px" : "650px")
        //document.getElementById("height").style.height = "0px"
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [setActive])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const { title, description, tags } = post.frontmatter
  return (
    <li className="questions_answers-card">
      <div className="text">
        <button
          className={`qa-btn manual-btn ${setActive}`}
          onClick={() => {
            toggleAccordion()
            toggleMenu(0)
          }}
        >
          <span>{setActive ? "-" : "+"}</span>{title}
        </button>
        <div
          ref={ref}
          id="height"
          style={{
            maxHeight: `${setHeight}`,
            visibility: setActive ? "visible" : "hidden",
          }}
        >
          <div className="questions_answers_tab">
            <div className="tab-tag-wrapper">
              <span>Tag: </span>{" "}
              <p>
                {tags.map((tag, index) => (
                  <button key={index} onClick={() => setFilter(tag)}>
                    {" "}
                    {tag},
                  </button>
                ))}
              </p>
            </div>
          
            <p
              className="description"
              // dangerouslySetInnerHTML={{ __html: post.html || post.excerpt }}
            > {post.html || post.excerpt}</p>
            {/* <Link to={post.fields.slug} className="questions_answers-redirect">
            <div className="link-arrow-black">
                <div className="link">
                Open in new tab
                  <img alt="arrow icon" src={arrow} />
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ManualCard
