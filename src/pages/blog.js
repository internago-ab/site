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
  const allPosts = data.blog.nodes
  const postsToDisplay = 6
  const [posts, setPosts] = useState(allPosts)
  const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
  const [filter, setFilter] = useState(
    new URLSearchParams(location.search.substring(1)).get("filter")
  )
  //qa
  const allPostsQA = data.qa.nodes
  const postsToDisplayQA = 4
  const [postsQA, setPostsQA] = useState(allPostsQA)
  const [numberOfPostsQA, setNumberOfPostsQA] = useState(postsToDisplayQA)
  const [filterQA, setFilterQA] = useState(
    new URLSearchParams(location.search.substring(1)).get("qa")
  )

  //qa
  const [filteredPostsQA, setFilteredPostsQA] = useState({
    filteredPosts: [],
    query: "",
  })

  const tagsQA = Array.from(
    new Set(
      allPostsQA
        .map(post => post.frontmatter.tags)
        .flat()
        .filter(tag => tag != null)
    )
  )

  const countries = Array.from(
    new Set(
      allPostsQA
        .map(post => post.frontmatter.countries)
        .flat()
        .filter(country => country != null)
    )
  )

  //blog
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

  //qa
  useEffect(() => {
    if (filterQA) {
      window.history.pushState(filterQA, "", `?qa=${filterQA.toLowerCase()}`)
      document.querySelector("#categories").value = filterQA.toLowerCase()
    }

    setPostsQA(
      filterQA === "all" || !filterQA
        ? allPostsQA
        : allPostsQA.filter(post =>
            post.frontmatter.tags
              .concat(post.frontmatter.countries)
              .includes(filterQA[0].toUpperCase() + filterQA.substring(1))
          )
    )
  }, [filterQA, allPostsQA])

  if (postsQA.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <div className="posts-found medium">
        <h3>No QA's found.</h3>
        </div>
        <Cta content="next" />
      </Layout>
    )
  }

  const handleInputChangeQA = (event) => {
    const query = event.target.value

    let filteredPostsQA = allPostsQA.filter((post) => {
      const { description, title, tags, countries } = post.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase())) ||
        (countries &&
          countries.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    if (query != 0) {
      document.querySelector(
        ".posts_found"
      ).innerHTML = `${filteredPostsQA.length} posts found `
    } else if (query == 0) {
      document.querySelector(".posts_found").innerHTML = ` `
    }

    setFilteredPostsQA({
      query,
      filteredPostsQA,
    })
  }

  const postFiltered = filteredPostsQA.query
    ? filteredPostsQA.filteredPostsQA
    : postsQA

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

  const handleInputChange = (event) => {
    const query = event.target.value
    const filteredPosts = allPosts.filter((post) => {
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
        <h1>Blogs and QA</h1>
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
      <Blue>
        <h1>Hello, how can we help you?</h1>
        <div className=" questions_answers">
          <div className="input ">
            <div className="search-wrapper ">
              <input
                type="text"
                aria-label="Search"
                value={filteredPostsQA.query}
                placeholder="Search for questions.."
                onInput={handleInputChangeQA}
              />

              <div className="questions_answers-btn-wrapper">
                <button className="cta-btn cta-btn-button" type="submit">
                  Search now
                </button>
              </div>
            </div>
          </div>
          <p className="posts_found"></p>
        </div>
      </Blue>
      <section className="section">
        <div className="questions_answers">
          <div className="questions_answers-content medium ">
            <select id="categories"></select>
            <div>
              <div className="filter">
                <h3>Categories:</h3>
                <div className="filter-tags">
                  <button
                    onClick={e => setFilterQA(e.target.value)}
                    value="all"
                    id="all-id"
                  >
                    {" "}
                    All questions
                  </button>
                  {tagsQA.slice(0, numberOfPostsQA).map((tag, index) => (
                    <button
                      onClick={e => setFilterQA(e.target.value)}
                      key={index}
                      value={tag.toLowerCase()}
                      className="filter-option"
                    >
                      {tag}
                    </button>
                  ))}
                  {numberOfPostsQA < tagsQA.length && (
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        setNumberOfPostsQA(numberOfPostsQA + postsToDisplay)
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
                  {countries.slice(0, numberOfPostsQA).map((country, index) => (
                    <button
                      onClick={e => setFilterQA(e.target.value)}
                      key={index}
                      value={country.toLowerCase()}
                      className="filter-option"
                    >
                      {country}
                    </button>
                  ))}

                  {numberOfPostsQA < countries.length && (
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        setNumberOfPostsQA(numberOfPostsQA + postsToDisplayQA)
                      }
                    >
                      Show more
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ol className="questions_answers-grid">
              {postFiltered.map(post => (
                <QAcard
                  key={post.fields.slug}
                  post={post}
                  setFilterQA={setFilterQA}
                />
              ))}
            </ol>
          </div>
        </div>
      </section>
      <Cta content="more" />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
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
    qa: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "questions_answers" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
          countries
          type
        }
      }
    }
  }
`
