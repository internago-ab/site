import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import "./blog-post.css"
import CountryLanding from "../components/countries/country-landing"
import FactsStats from "../components/countries/facts-and-stats"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/countries/frontmatter.css"
import Aos from "aos"
import "aos/dist/aos.css"

const Country = ({ data, location }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = post.frontmatter.title
  const description = post.frontmatter.description
  const countryImg = post.frontmatter.countryImg
  const bgimg = post.frontmatter.bgimg

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} />
      <div>
        <CountryLanding title={title} bgimg={bgimg} />
        <FactsStats description={description} countryImg={countryImg} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} data-aos="fade-up"/>
      </div>
      <Cta content="about" />
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
        countryImg
        bgimg
        type
      }
      html
    }
  }
`
