import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

const SingleTagTemplate = (props) => {
  console.log(props)
  const { posts, tag } = props.pageContext

  return (
    <div>
      <Header />
      <div style={{ fontFamily: 'helvetica' }}>
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
    </div>
  )
}

export default SingleTagTemplate