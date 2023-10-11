import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import QAcard from "../components/questions_answers_card"
import Cta from "../components/cta"
import Blue from "../components/blue"

function QuestionsAnswers({ data, location }) {
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 5
  const [posts, setPosts] = useState(allPosts)
  const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
  const [filter, setFilter] = useState(
    new URLSearchParams(location.search.substring(1)).get("filter")
  )
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };


  const emptyQuery = ""

  const [filteredPosts, setFilteredPosts] = useState({
    filteredPosts: [],
    query: emptyQuery,
  })

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
      window.history.pushState(filter, "", `?filter=${filter.toLowerCase()}`)
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
        <div className="posts-found medium">
        <h3>No QA's found.</h3>
        </div>
        <Cta content="next" />
      </Layout>
    )
  }

  const handleInputChange = (event) => {
    const query = event.target.value

    let filteredPosts = allPosts.filter((post) => {
      console.log(post, 'post')
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
      ).innerHTML = `${filteredPosts.length} posts found `
    } else if (query == 0) {
      document.querySelector(".posts_found").innerHTML = ` `
    }

    setFilteredPosts({
      query,
      filteredPosts,
    })
  }

  const postFiltered = filteredPosts.query ? filteredPosts.filteredPosts : posts

  return (
    <Layout>
      <Seo title="All posts" />
      <Blue>
        <h1>How can we help you?</h1>
        <div className=" questions_answers">
          <div className="input ">
            <div className="search-wrapper ">
              <input
                type="text"
                aria-label="Search"
                value={filteredPosts.query}
                placeholder="Search for questions.."
                onInput={handleInputChange}
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
          <div className="questions_answers-content medium">
            <select id="categories"></select>
            <div>
              <div className="filter">
                <h3>Categories:</h3>
                <div className="filter-tags">
                  <button onClick={e => setFilter(e.target.value)} value="all">
                    {" "}
                    All questions
                  </button>
                  {tags.slice(0, numberOfPosts).map((tag, index) => (
                    <button
                      onClick={e => setFilter(e.target.value)}
                      key={index}
                      value={tag.toLowerCase()}
                      className="filter-option"
                    >
                      {tag}
                    </button>
                  ))}
           {numberOfPosts > tags.length  && showButton &&(
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        {toggleButton(); setNumberOfPosts(numberOfPosts + postsToDisplay) ;}
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
                    <button
                      onClick={e => setFilter(e.target.value)}
                      key={index}
                      value={country.toLowerCase()}
                      className="filter-option"
                    >
                      {country}
                    </button>
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
            <ol className="questions_answers-grid">
              {postFiltered.slice(0, numberOfPosts).map(post => (
                <QAcard
                  key={post.fields.slug}
                  post={post}
                  setFilter={setFilter}
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

export default QuestionsAnswers

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
