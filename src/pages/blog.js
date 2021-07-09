import React, { useEffect, useState } from 'react';
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Blogcard from "../components/blogcard"
import Cta from "../components/cta"

function Blog({ data, location }) {
    const allPosts = data.allMarkdownRemark.nodes
    const postsToDisplay = 6;
    const [posts, setPosts] = useState(allPosts)
    const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
    const [filter, setFilter] = useState(new URLSearchParams(location.search.substring(1)).get("filter"))
    const tags = Array.from(new Set(allPosts.map(post => post.frontmatter.tags).flat().filter(tag => tag != null)))

    useEffect(() => {
        window.history.pushState(filter, "", `blog?filter=${filter}`);

        setPosts(filter === "all" || filter === null || filter === "" ?
            allPosts : 
            allPosts.filter(post => post.frontmatter.tags.includes(filter[0].toUpperCase() + filter.substring(1))))  
    }, [filter, allPosts])



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
                <form>
                    <label htmlFor="categories">Filter by: </label>
                    <select id="categories" name="categories" onChange={(e) => setFilter(e.target.value)}>
                        <option value="all" className="filter-option" id="all"> </option>
                        {tags.map((tag) => (
                            <option value={tag.toLowerCase()} className="filter-option" id={tag.toLowerCase()}>{tag}</option>
                        ))}
                    </select>
                </form>
                <ol className="blog-grid">
                    {posts.slice(0, numberOfPosts).map(post => (
                        <Blogcard post={post} setFilter={setFilter} />
                    ))}
                </ol>
                {numberOfPosts < posts.length && <button className="cta-btn" onClick={() => setNumberOfPosts(numberOfPosts + postsToDisplay)}>View more posts</button>}
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
            <Cta content="more" />
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