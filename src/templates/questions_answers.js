import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"

const QaPostTemplate = ({ data, location, pageContext }) => {
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 4
  const [posts, setPosts] = useState(allPosts)
  const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
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

  const countries = Array.from(
    new Set(
      allPosts
        .map(post => post.frontmatter.countries)
        .flat()
        .filter(country => country != null)
    )
  )

  useEffect(() => {
    if (filter) {
      window.history.replaceState("blog", "", `?filter=${filter.toLowerCase()}`)

      // window.history.back()
      // window.history.pushState(filter, "", `?filter=${filter.toLowerCase()}`)
      document.querySelector("#categories").value = filter.toLowerCase()
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

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  function shouldUpdateScroll() {
    // window.location.reload()
    // window.scrollTo(...(`/blog` || [0, 0]))
    // window.location.reload()
    // return false
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
                  <a
                    href={`/qa/?filter=all`}
                    value="all"
                    className="filter-option"
                  >
                    All questions
                  </a>
                  {tags.slice(0, numberOfPosts).map((tag, index) => (
                    <a
                      href={`/qa?filter=${tag.toLowerCase()}`}
                      key={index}
                      value={tag.toLowerCase()}
                      className="filter-option"
                    >
                      {tag}
                    </a>
                  ))}
                  {numberOfPosts < tags.length && (
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        setNumberOfPosts(numberOfPosts + postsToDisplay)
                      }
                    >
                      Show more
                    </button>
                  )}
                </div>
              </div>
              <div className="countries-filter filter">
                <h3>Countries:</h3>
                <div className="filter-tags">
                  {countries.slice(0, numberOfPosts).map((country, index) => (
                    <a
                      href={`/qa/?filter=${country.toLowerCase()}`}
                      key={index}
                      value={country.toLowerCase()}
                      className="filter-option"
                    >
                      {country}
                    </a>
                  ))}

                  {numberOfPosts < countries.length && (
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        setNumberOfPosts(numberOfPosts + postsToDisplay)
                      }
                    >
                      Show more
                    </button>
                  )}
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
                              to={`/qa/?filter=${tag.toLowerCase()}`}
                            >
                              {tag}, <br></br>
                            </Link>
                          ))}
                        </p>
                      </div>
                      <div className="tab-tag-wrapper">
                        <span>Country:</span>
                        <p>
                          {post.frontmatter.countries.map((country, index) => (
                            <Link
                              key={index}
                              to={`/qa/?filter=${country.toLowerCase()}`}
                            >
                              {country}
                            </Link>
                          ))}
                        </p>
                      </div>
                      <p className="description" itemProp="headline">
                        {post.frontmatter.description}
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

export default QaPostTemplate

export const pageQuery = graphql`
  query qaPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "questions_answers" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          countries
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        countries
        type
      }
    }
  }
`
