const path = require('path')
const select = require(`unist-util-select`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const pages = []
  const blogPost = path.resolve('./src/templates/blog-post.js')
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      return Promise.reject(result.errors)
    }

    // Create blog posts pages.
    result.data.allMarkdownRemark.edges.forEach(({ node }) =>
      createPage({
        path: node.frontmatter.path,
        component: blogPost,
        context: {
          path: node.frontmatter.path,
        },
      })
    )
  })
}
