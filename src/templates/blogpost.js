import React from 'react'
import { graphql, Link } from 'gatsby'

export default function BlogpostTemplate(props) {

  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = props.pageContext

  return (
    <div className='blogpost-container'>
      <div 
        className='blogpost'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir'
        }}
      >
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className='blogpost-content'
          dangerouslySetInnerHTML={{__html: html}}
        ></div>
      </div>
        <div 
          className='next-prev'
          style={{
            fontFamily: 'avenir',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          
          <div
            className='prev'
          >
            { prev && 
                <Link to={prev.frontmatter.path}>
                  Previous
                </Link>
            }
          </div>

          <div
            className='next'
          >
            { next && 
                <Link to={next.frontmatter.path}>
                  Next
                </Link>
            }
          </div>
        </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        path
      }
    }
  }
`