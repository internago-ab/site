import React, { useState } from 'react';
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Blogcard from "../components/blogcard"
import Cta from "../components/cta"

function Blog({ data }) {
    const [posts, setPosts] = useState(data.allMarkdownRemark.nodes)

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
            <ol className="blog-grid">
                {posts.map(post => (
                    <Blogcard post={post}/>
                ))}
            </ol>
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