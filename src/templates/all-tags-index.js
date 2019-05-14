import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

const AllTagsTemplate = (props) => {
  console.log(props.pageContext)
  const { tags } = props.pageContext

  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: 'helvetica',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{ textAlign: 'center' }}>Tags</h2>
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
    </div>
  )
}

export default AllTagsTemplate