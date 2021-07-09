import React, { useEffect, useState } from 'react';
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Blogcard from "../components/blogcard"
import Cta from "../components/cta"

function Blog({ data, location }) {
    const [posts, setPosts] = useState(data.allMarkdownRemark.nodes)
    const [numberOfPosts, setNumberOfPosts] = useState(3)
    const [filter, setFilter] = useState(new URLSearchParams(location.search.substring(1)).get("filter"))
    
    useEffect(() => {
        filter === "all" || filter === null || filter === "" ? 
            setPosts(data.allMarkdownRemark.nodes) :
            setPosts(posts.filter(post => post.frontmatter.tags.includes(filter[0].toUpperCase() + filter.substring(1))))
    }, [data.allMarkdownRemark.nodes, filter, posts])


    if (posts.length === 0) {
        return (
            <Layout>
                <Seo title="All posts" />
                <p>No blog posts found.</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <Seo title="All posts" />
            <div className="blog">
                <ol className="blog-grid">
                    {posts.slice(0, numberOfPosts).map(post => (
                        <Blogcard post={post}/>
                    ))}
                </ol>
                {numberOfPosts < posts.length && <button className="cta-btn" onClick={() => setNumberOfPosts(numberOfPosts + 3)}>View more posts</button>}
            </div>
            {/* <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2>
                                        <Link to={post.fields.slug} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                    <small>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                </section>
                            </article>
                        </li>
                    )
                })}
            </ol> */}
            <Cta content="more"/>
        </Layout>
    )
}

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredimage
          tags
        }
      }
    }
  }
`