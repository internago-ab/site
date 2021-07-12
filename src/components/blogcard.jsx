import React from 'react';
import { Link } from "gatsby"

import "./blogcard.css"

function Blogcard({ post, setFilter }) {

    const { date, title, description, featuredimage, tags } = post.frontmatter

    return (
        <li className="blog-card">
            <img src={featuredimage} alt="blogpost"></img>
            <div className="text">
                <Link to={post.fields.slug}><h2>{title}</h2></Link>
                <p >{date} || {tags.map((tag, index) => <button key={index} onClick={() => setFilter(tag)}>{tag}</button>)}</p>
                <p className="description" dangerouslySetInnerHTML={{__html: description || post.excerpt}}></p>
            </div>
            <Link to={post.fields.slug} className="read-more">Read more</Link>
        </li>
    );
}

export default Blogcard;