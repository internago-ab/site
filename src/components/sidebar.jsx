import React from 'react';
import { Link } from "gatsby"

function Sidebar(props) {

    return (
        <aside className="blog-post-sidebar">
            <h2>Recent posts</h2>
            <ul>
                {props.posts.map(post => <li><Link to={post.fields.slug}>{post.frontmatter.title}</Link></li>)}
            </ul>
            <h2 className="categories">Categories</h2>
            <ul>
                {props.tags.map(tag => <li><Link to={`/blog?filter=${tag.toLowerCase()}`}>{tag}</Link></li>)}
            </ul>
        </aside>
    );
}

export default Sidebar