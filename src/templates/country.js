import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import CountryLanding from "../components/countries/country-landing"
import FactsStats from "../components/countries/facts-and-stats"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Country = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const title = post.frontmatter.title
  const description = post.frontmatter.description
  const countryImg = post.frontmatter.countryImg
  const featuredimage = post.frontmatter.featuredimage
  console.log(post.html)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} />
      <div>
        <CountryLanding title={title} featuredimage={featuredimage}/>
        <FactsStats description={description} countryImg={countryImg} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Cta content="about"/>
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
        description
        countryImg
        featuredimage
      }
      html
    }
  }
`
