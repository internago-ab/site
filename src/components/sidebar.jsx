import React from 'react';
import { Link } from "gatsby"

function Sidebar(props) {

    return (
        <aside>
            <ul>
                <li>{props.posts.map(post => <Link to={post.fields.slug}>{post.frontmatter.title}</Link>)}</li>
            </ul>
            <ul>
                <li>{props.tags.map(tag => <Link to={`/blog?filter=${tag.toLowerCase()}`}>{tag}</Link>)}</li>
            </ul>
        </aside>
    );
}

export default Sidebar