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
          fontFamily: 'avenir'
      }}>
        <h2>
        Projects
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
            <a href='https://github.com/elainechan/sybil'>Sybil</a>
            <p>Crawling a social network and performing sentiment analysis on target keywords.</p>
            <a href="https://elainechan.github.io/thor/cytoscape-subway.html">Thor</a>
            <p>Using a network visualization library to render electric circuit diagrams.</p>
        </div>
      </div>
    </div>
  )
}
