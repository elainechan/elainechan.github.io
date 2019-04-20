import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div style={{
      fontFamily: 'avenir'
    }}>
      <div>
        <ul style={{
          listStyleType: 'none',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>{title}</h1>
        <p style={{
          marginTop: 0,
          opacity: 0.5
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery 
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />        
  )
}

export default Header