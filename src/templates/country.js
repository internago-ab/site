import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Country = ({ data, location }) => {
  const post = data.markdownRemark
  const {title} = post.frontmatter
      console.log(post.frontmatter)
    console.log(title)
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
    </div>
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
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
