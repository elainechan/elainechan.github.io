import React from 'react'
import { Link } from 'gatsby'

const SingleTagTemplate = (props) => {
  console.log(props)
  const { posts, tag } = props.pageContext

  return (
    <div style={{ fontFamily: 'avenir' }}>
      <div>
        <h2>
        Posts about {`${tag}`}
        </h2>
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