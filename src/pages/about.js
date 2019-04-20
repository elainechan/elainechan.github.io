import React from 'react'
import Header from '../components/Header'


export default function AboutPage(props) {
  return (
    <div>
      <Header />
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir'
      }}>
        <div>
          I specialize in the rapid prototyping of applications. My interests include data engineering, data analysis, optimization algorithms, and user experience design.
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <a href="https://github.com/elainechan">GitHub</a>
          <a href="https://www.linkedin.com/in/chanelaine/">LinkedIn</a>
        </div>

      </div>
    </div>
  )
}