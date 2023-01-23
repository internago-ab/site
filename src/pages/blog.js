import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Blogcard from "../components/blogcard"
import Cta from "../components/cta"
import Blue from "../components/blue"
import Search from "../components/search"
import QAcard from "../components/questions_answers_card"

function Blog({ data, location }) {
  //blog
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 6
  const [posts, setPosts] = useState(allPosts)
  const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
  const [filter, setFilter] = useState(
    new URLSearchParams(location.search.substring(1)).get("filter")
  )

  const [filteredPosts, setFilteredPosts] = useState({
    filteredPosts: [],
    query: "",
  })

  const tags = Array.from(
    new Set(
      allPosts
        .map(post => post.frontmatter.tags)
        .flat()
        .filter(tag => tag != null)
    )
  )

  tags.forEach(tag => tag.charAt(0).toUpperCase() + tag.slice(1))

  useEffect(() => {
    if (filter) {
      window.history.pushState(filter, "", `?filter=${filter.toLowerCase()}`)
      document.querySelector("#categories").value = filter.toLowerCase()
    }

    setPosts(
      filter === "all" || !filter
        ? allPosts
        : allPosts.filter(post =>
            post.frontmatter.tags.includes(
              filter[0].toUpperCase() + filter.substring(1)
            )
          )
    )
  }, [filter, allPosts])

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <div className="posts-found medium content">
          <h3>No blog posts found.</h3>
        </div>
        <Cta content="next" />
      </Layout>
    )
  }

  const handleInputChange = event => {
    const query = event.target.value
    const filteredPosts = allPosts.filter(post => {
      const title = post.frontmatter.title
      const tags = post.frontmatter.tags
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setFilteredPosts({
      query,
      filteredPosts,
    })
  }

  const lol = filteredPosts.query ? filteredPosts.filteredPosts : posts

  return (
    <Layout>
      <Seo title="All posts" />
      <Blue>
        <h1>Blogs and News</h1>
        <p>
          This is where we collect our latest blogs and insights on different
          relevant topics on payroll, taxes and other subjects for you to read.
          If you have questions or suggestions on a topic than please contact us
          at Internago
        </p>
      </Blue>

      <div className="blog">
        <form>
          <Search handleInputChange={handleInputChange} />
          <div className="filter">
            <label htmlFor="categories">Filter by: </label>
            <select
              id="categories"
              name="categories"
              onChange={e => setFilter(e.target.value)}
            >
              <option value="all" className="filter-option" id="all">
                {" "}
              </option>
              {tags.map((tag, index) => (
                <option
                  key={index}
                  value={tag.toLowerCase()}
                  className="filter-option"
                >
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </form>
        <ol className="blog-grid">
          {lol.slice(0, numberOfPosts).map(post => (
            <Blogcard
              key={post.fields.slug}
              post={post}
              setFilter={setFilter}
            />
          ))}
        </ol>
        {numberOfPosts < posts.length && (
          <button
            className="cta-btn cta-btn-button"
            onClick={() => setNumberOfPosts(numberOfPosts + postsToDisplay)}
          >
            View more posts
          </button>
        )}
      </div>
      <Cta content="more" />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
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
          type
        }
      }
    }
  }
`
