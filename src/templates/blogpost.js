import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

export default function BlogpostTemplate(props) {
  console.log(props)
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { next, prev, posts } = props.pageContext

  return (
    <div className='blogpost-container'>
      <Header />
      <div 
        className='blogpost'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'helvetica'
        }}
      >
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div>
          <ul style={{ 
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <b>
            Tags:
          </b>
            {frontmatter.tags.map((tag, index) => { 
              return (
                <li 
                  key={index}
                  style={{ marginLeft: '0.5rem'}}
                >
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div
          className='blogpost-content'
          dangerouslySetInnerHTML={{__html: html}}
        ></div>
      </div>
        <div 
          className='next-prev'
          style={{
            fontFamily: 'helvetica',
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
        tags
      }
    }
  }
`