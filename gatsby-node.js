const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       new FilterWarningsPlugin({
//         exclude:
//           /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
//       }),
//     ],
//   });
// };

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/our-services`,
    toPath: `/services`,
    isPermanent: true ,
  })

  createRedirect({
    fromPath: `/blog-news`,
    toPath: `/blog`,
    isPermanent: true ,
  })
  createRedirect({
    fromPath: `/payroll-portal`,
    toPath: `/payroll`,
    isPermanent: true ,
  })

  createRedirect({
    fromPath: `/payroll-services`,
    toPath: `/payroll`,
    isPermanent: true, 
  })

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const country = path.resolve(`./src/templates/country.js`)
  const qaPost = path.resolve(`./src/templates/questions_answers.js`)
  const manualPost = path.resolve(`./src/templates/manuals.js`)

  // Get all markdown blog posts sorted by date
  const result_manuals = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { frontmatter: { type: { glob: "manuals" } } }
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
  const result_qa = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { frontmatter: { type: { glob: "questions_answers" } } }
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

  const result_country = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { frontmatter: { type: { glob: "country" } } }
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

  const result_blog = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { frontmatter: { type: { glob: "blog" } } }
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

  if (result_qa.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result_qa.errors
    )
    return
  }

  if (result_blog.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result_blog.errors
    )
    return
  }

  if (result_manuals.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result_manuals.errors
    )
    return
  }

  const posts_qa = result_qa.data.allMarkdownRemark.nodes
  const posts_country = result_country.data.allMarkdownRemark.nodes
  const posts_blog = result_blog.data.allMarkdownRemark.nodes
  const posts_manuals = result_manuals.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts_country.length > 0) {
    posts_country.forEach((post, index) => {

      if (post.frontmatter.type === "country") {
        createPage({
          path: post.fields.slug,
          component: country,
          context: {
            id: post.id,
         
          },
        })
      }
    })
  }
  if (posts_blog.length > 0) {
    posts_blog.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts_blog[index - 1]
      const nextPostId = index === posts_blog.length - 1 ? null : posts_blog[index + 1]
      if (post.frontmatter.type === "blog") {
        createPage({
          path: post.fields.slug,
          component: blogPost,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      }
    })
  }
  if (posts_qa.length > 0) {
    posts_qa.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts_qa[index - 1]
      const nextPostId = index === posts_qa.length - 1 ? null : posts_qa[index + 1]

      if (post.frontmatter.type === "questions_answers") {
        createPage({
          path: post.fields.slug,
          component: qaPost,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        })
      }
    })
  }
  if (posts_manuals.length > 0) {
    posts_manuals.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts_manuals[index - 1]
      const nextPostId = index === posts_manuals.length - 1 ? null : posts_manuals[index + 1]
  
      if (post.frontmatter.type === "manuals") {
        createPage({
          path: post.fields.slug,
          component: manualPost,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
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
