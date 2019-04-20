const path = require('path')

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve(`src/templates/all-tags-index.js`)
  const singleTagIndexTemplate = path.resolve(`src/templates/single-tag-index.js`)

  const postsByTag = {}

  // Create dictionary with tags as keys and nodes as values
  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tag => {
    const posts = postsByTag[tag]

    createPage({
      path:`/tags/${tag}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tag
      }
    })
  })

}

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogpost.js`)
  
  return graphql(`
    {

        allMarkdownRemark (
          sort: {order: ASC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                date
                tags
              }
            }
          }
        }

    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    createTagPages(createPage, posts)

    posts.forEach(({node}, index) => {
      console.log(node)
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          prev: index === 0 ? null: posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        }
      })
    })
  })

})