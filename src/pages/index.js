import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir'
        }}>
          {edges.map(edge => {
            const {frontmatter} = edge.node
            return (
              <div 
                key={frontmatter.path}
                style={{
                  textAlign: 'center'
              }}>
                <Link to={frontmatter.path}>
                {frontmatter.title}
                </Link>
                <p>{frontmatter.excerpt}</p>
              </div>
            )
          })}
          <div style={{ marginTop: '1rem' }}>
            <Link to='/tags'>
              Browse by Tag
            </Link>
          </div>
        </div>

    </div>
  )
}

export const query = graphql`
  query HomepageQuery {  
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`
export default Layout
