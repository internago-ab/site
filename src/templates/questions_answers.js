import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"

const qaPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark

  const siteTitle = data.site.siteMetadata?.title || `Title`

  const latestPosts = data.allMarkdownRemark.nodes.slice(0, 5)

  const tags = Array.from(
    new Set(
      data.allMarkdownRemark.nodes
        .map(post => post.frontmatter.tags)
        .flat()
        .filter(tag => tag != null)
    )
  )

  const countries = Array.from(
    new Set(
      data.allMarkdownRemark.nodes
        .map(post => post.frontmatter.countries)
        .flat()
        .filter(country => country != null)
    )
  )

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog-post-main">
        <article
          data-aos="fade-up"
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className="date-and-tags">
              {post.frontmatter.tags.map((tag, index) => (
                <Link key={index} to={`/qa?filter=${tag.toLowerCase()}`}>
                  {tag}
                </Link>
              ))}
            </p>
            <p className="date-and-tags">
              {post.frontmatter.countries.map((country, index) => (
                <Link key={index} to={`/qa?filter=${country.toLowerCase()}`}>
                  {country}
                </Link>
              ))}
            </p>
          </header>
          <p itemProp="headline">{post.frontmatter.description}</p>
        </article>
      </div>
      <div posts={latestPosts} tags={tags} countries={countries}></div>
      <Cta content="about" noMargin={true} />
    </Layout>
  )
}

export default qaPostTemplate

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
