/* this file will run at build time and create the template file
like in case of fetching individual projects it should have content ready at build time
so it will generate all those during this file executions

*/
const path = require("path");
exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}