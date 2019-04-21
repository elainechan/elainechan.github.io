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
        <h2>
          About
        </h2>
        <div>
          I am a software engineer based in New York, specializing in the rapid prototyping of applications.
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