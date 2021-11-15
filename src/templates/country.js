import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import CountryLanding from "../components/countries/country-landing"
import FactsStats from "../components/countries/facts-and-stats"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Country = ({ data, location }) => {
  const post = data.markdownRemark
  console.log(post, "s")
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const title = post.frontmatter.title
  const description = post.frontmatter.description
  console.log(post.html)

  const capitalcity = post.frontmatter.capitalcity
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} />
      <div>
        <CountryLanding title={title} />
        <FactsStats description={description} capitalcity={capitalcity} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      
      </div>
    </Layout>
  )
}

export default Country

export const pageQuery = graphql`
  query CountriesSlugBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        capitalcity
      }
      html
    }
  }
`
