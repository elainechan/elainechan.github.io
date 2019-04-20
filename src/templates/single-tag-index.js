import React from 'react'
import { graphql, Link } from 'gatsby'

const SingleTagTemplate = (props) => {
  console.log(props)
  const { posts, tag } = props.pageContext

  return (
    <div style={{ fontFamily: 'avenir' }}>
      <div>
        Posts about {`${tag}`}
      </div>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            {
              posts.map((post, index) => {
                return (
                  <li key={index}>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default SingleTagTemplate