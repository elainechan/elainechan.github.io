import React from 'react'
import { graphql, Link } from 'gatsby'

const AllTagsTemplate = (props) => {
  console.log(props.pageContext)
  const { tags } = props.pageContext

  return (
    <div
      style={{
        fontFamily: 'avenir'
      }}
    >
      <div>
        <h1>Tags</h1>
        <ul style={{ listStyleType: 'none' }}>
          {tags.map((tag, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate