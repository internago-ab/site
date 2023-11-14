import React, { useEffect } from "react"
import { Link } from "gatsby"
import arrow from "../images/icons/arrow-black.svg"

import Aos from "aos"

import "./blogcard.css"

function Blogcard({ post, setFilter }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const { date, title, description, featuredimage, tags } = post.frontmatter

  return (
    <li className="blog-card" data-aos="fade-in">
      <img src={featuredimage} alt="blogpost"></img>
      <div className="text">
        <Link to={post.fields.slug}>
          <h2>{title}</h2>
        </Link>
        <p>
          {date} ||{" "}
          {tags.map((tag, index) => (
            <button key={index} onClick={() => setFilter(tag)}>
              {tag}
            </button>
          ))}
        </p>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description || post.excerpt }}
        ></p>
      </div>
      <div className="link-arrow-black">
            
             <Link to={post.fields.slug} className="read-more">
                Read more <img alt="arrow icon" src={arrow} />
                </Link>
          
          </div>
          
    </li>
  )
}

export default Blogcard
