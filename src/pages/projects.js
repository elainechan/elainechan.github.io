import React from 'react'
import Header from '../components/Header'

export default function ProjectsPage(props) {
  return (
    <div>
      <Header />
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'helvetica'
      }}>
        <h2>
        Projects
        </h2>
        <br></br>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}>
            <a href='https://github.com/elainechan/sybil'>
              <b>
                Sybil
              </b>
            </a>
            <p>Crawls a social network and performs sentiment analysis on target keywords.</p>
            <br></br>
            <a href="https://elainechan.github.io/thor/cytoscape-subway.html">
              <b>
                Thor
              </b>
            </a>
            <p>Uses a network visualization library to render electric circuit diagrams.</p>
        </div>
      </div>
    </div>
  )
}
