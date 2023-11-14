import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"

const ManualPostTemplate = ({ data, location, pageContext }) => {
  const allPosts = data.allMarkdownRemark.nodes
  const [posts, setPosts] = useState(allPosts)
  const [filter, setFilter] = useState(
    new URLSearchParams(location.search.substring(1)).get("filter")
  )
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const tags = Array.from(
    new Set(
      allPosts
        .map(post => post.frontmatter.tags)
        .flat()
        .filter(tag => tag != null)
    )
  )
 

  useEffect(() => {
    if (filter) {
      window.history.replaceState("manuals", "", `?filter=${filter.toLowerCase()}`)
     
    }

    setPosts(
      filter === "all" || !filter
        ? allPosts
        : allPosts.filter(post =>
            post.frontmatter.tags
              .concat(post.frontmatter.countries)
              .includes(filter[0].toUpperCase() + filter.substring(1))
          )
    )
  }, [filter, allPosts])

  console.log(post)

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }


  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <section className="section">
        <div className="questions_answers">
          <div className="questions_answers-content medium questions_answers-selected">
            <select id="categories"></select>
            <div>
              <div className="filter">
                <h3>Categories:</h3>
                <div className="filter-tags">
                  {tags.map((tag, index) => (
                    <a
                      href={`/manuals?filter=${tag.toLowerCase()}`}
                      key={index}
                      value={tag.toLowerCase()}
                      className="filter-option"
                    >
                      {tag}
                    </a>
                  ))}
                  
                </div>
              </div>
            </div>
            <div className="questions_answers-grid">
              <ol className="questions_answers-card">
                <article itemScope itemType="http://schema.org/Article">
                  <div className="text">
                    <h2 itemProp="headline" className="headline-redirect">
                      {post.frontmatter.title}{" "}
                    </h2>
                    <div className="">
                      <div className="tab-tag-wrapper">
                        <span>Tag: </span>{" "}
                        <p>
                          {post.frontmatter.tags.map((tag, index) => (
                            <Link
                              key={index}
                              to={`/manuals/?filter=${tag.toLowerCase()}`}
                            >
                              {tag}, <br></br>
                            </Link>
                          ))}
                        </p>
                      </div>
                      <p className="description" itemProp="headline"  dangerouslySetInnerHTML={{ __html: post.html}}>

                      </p>
                    </div>
                  </div>
                </article>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Cta content="about" noMargin={true} />
    </Layout>
  )
}

export default ManualPostTemplate

export const pageQuery = graphql`
  query manualPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "manuals" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
      }
    }
    
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 300)
      html
      frontmatter {
        title
        description
        tags
        type
      }
    }
  }
`
