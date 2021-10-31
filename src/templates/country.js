import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import { useEffect } from "react"
import CountryLanding from "../components/country-landing"
import FactsStats from "../components/facts-and-stats"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Country = ({ data, location }) => {
  const post = data.markdownRemark

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} />
      <div>
        <CountryLanding />
        <FactsStats />
        <h1>{post.frontmatter.title}</h1>
        <a>{post.frontmatter.linklanding}</a>
      </div>
    </Layout>
  )
}

export default Country

export const pageQuery = graphql`
  query CountriesSlugBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`
