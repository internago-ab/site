import React from 'react';
import { Link } from "gatsby"

import "./blogcard.css"

function Blogcard({ post }) {

    const { date, title, description, featuredimage, tags } = post.frontmatter

    return (
        <li className="blog-card">
            <img src={featuredimage}></img>
            <div className="text">
                <Link to={post.fields.slug}><h2>{title}</h2></Link>
                <p >{date} || {tags.map(tag => <span>{tag} </span>)}</p>
                <p className="description" dangerouslySetInnerHTML={{__html: description || post.excerpt}}></p>
                <Link to={post.fields.slug} className="read-more">Read more</Link>
            </div>
        </li>
    );
}

export default Blogcard;