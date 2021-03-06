import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import Cta from "../components/cta"

import Aos from "aos"
import "aos/dist/aos.css"

const BlogPostTemplate = ({ data, location }) => {
  console.log(data, "tetststtss")
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const post = data.markdownRemark
  console.log(post, "post")

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
              {post.frontmatter.date} ||{" "}
              {post.frontmatter.tags.map((tag, index) => (
                <Link key={index} to={`/blog?filter=${tag.toLowerCase()}`}>
                  {tag}
                </Link>
              ))}
            </p>
          </header>
          <img alt="blog header" src={post.frontmatter.featuredimage} />
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="article-body"
          />
          <Link to="/blog?filter=all">← Go back to blog overview</Link>
        </article>

        <Sidebar posts={latestPosts} tags={tags} />
      </div>

      <Cta content="about" noMargin={true} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
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
        description
        featuredimage
        tags
        type
      }
    }
  }
`
