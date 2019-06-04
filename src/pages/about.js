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
          fontFamily: 'helvetica'
      }}>
        <h2>
          About
        </h2>
        <div>
          <p>
            Software engineer and Chartered Financial Analyst (CFA) program candidate based in New York.
          </p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <a href="https://www.linkedin.com/in/chanelaine/">LinkedIn</a>
          <a href="https://github.com/elainechan">GitHub</a>
        </div>

      </div>
    </div>
  )
}