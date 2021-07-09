import React from 'react';
import { Link } from "gatsby"

import "./blogcard.css"

function Blogcard({ post }) {

    const { date, title, description, featuredimage, tags } = post.frontmatter

    return (
        <li key={post.fields.slug} className="blog-card">
            <img src={featuredimage} alt="blogpost"></img>
            <div className="text">
                <Link to={post.fields.slug}><h2>{title}</h2></Link>
                <p >{date} || {tags.map(tag => <span>{tag} </span>)}</p>
                <p className="description" dangerouslySetInnerHTML={{__html: description || post.excerpt}}></p>
            </div>
            <Link to={post.fields.slug} className="read-more">Read more</Link>
        </li>
    );
}

export default Blogcard;