/*
exports.createPages = ({ actions: { createPage } }) => {
  const countries = require("./data/countries.json")
  countries.forEach(country => {
    createPage({
      path: `/country/${country.slug}`,
      component: require.resolve("./src/templates/country.js"),
      context: {
        title: country.title,
        description: country.description,
      },
    })
  })
}
*/

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/our-services`,
    toPath: `/services`,
  })

  createRedirect({
    fromPath: `/blog-news`,
    toPath: `/blog`,
  })
  createRedirect({
    fromPath: `/payroll-portal`,
    toPath: `/payroll`,
  })

  createRedirect({
    fromPath: `/payroll-services`,
    toPath: `/payroll`,
  })

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const country = path.resolve(`./src/templates/country.js`)
  const qaPost = path.resolve(`./src/templates/questions_answers.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // const previousPostId = index === 0 ? null : posts[index - 1]
      // const nextPostId = index === posts.length - 1 ? null : posts[index + 1]

      if (post.frontmatter.type === "country") {
        createPage({
          path: post.fields.slug,
          component: country,
          context: {
            id: post.id,
          },
        })
      } else if (post.frontmatter.type === "questions_answers") {
        createPage({
          path: post.fields.slug,
          component: qaPost,
          context: {
            id: post.id,
          },
        })
      } else if (post.frontmatter.type === "blog") {
        createPage({
          path: post.fields.slug,
          component: blogPost,
          context: {
            id: post.id,
            // previousPostId,
            // nextPostId,
          },
        })
      }
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
