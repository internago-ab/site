import React, { useEffect } from "react"
import { Link } from "gatsby"

import Aos from "aos"
import "aos/dist/aos.css"

import "./blogcard.css"

function Blogcard({ post, setFilter }) {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    const { date, title, description, featuredimage, tags } = post.frontmatter

    return (
        <li key={post.fields.slug} className="blog-card" data-aos="fade-up">
            <img src={featuredimage} alt="blogpost"></img>
            <div className="text">
                <Link to={post.fields.slug}><h2>{title}</h2></Link>
                <p >{date} || {tags.map(tag => <button onClick={() => setFilter(tag)}>{tag}</button>)}</p>
                <p className="description" dangerouslySetInnerHTML={{__html: description || post.excerpt}}></p>
            </div>
            <Link to={post.fields.slug} className="read-more">Read more</Link>
        </li>
    );
}

export default Blogcard;