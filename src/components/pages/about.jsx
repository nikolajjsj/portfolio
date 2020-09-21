import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='about'>
      <h1 id='about-title'>ABOUT</h1>
      <img
        className='headshot'
        src={require('../../assets/headshot.jpg')}
        alt='Headshot'
      ></img>
      <div className='about-text-container'>
        <h2 className='about-p-title'>Developer</h2>
        <p className='about-paragraph'>
          Innovative mind with experience working as a developer. Capable of
          working with a variety of technology and software solutions, and
          managing databases. Valuable team member who has experience diagnosing
          problems and developing solutions.
        </p>

        <h2 className='about-p-title'>Biologist</h2>
        <p className='about-paragraph'>
          Specialized biologist, with experience in dataanalysis in both Python,
          MatLab, and R. Also capable of doing experimental designs and
          performing said experiment, with insight into needed changes and
          improvements.
        </p>
      </div>
    </div>
  )
}

/* <div style={progressStyle}>
          <h2>
            <b>Developer</b>
          </h2>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width90}
            >
              Flutter & Dart
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              Python
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              HTML
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width60}
            >
              CSS
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              JavaScript
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width60}
            >
              React
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width60}
            >
              UI Design
            </div>
          </div> */

/* <div style={progressStyle}>
          <h2>
            <b>Biologist</b>
          </h2>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width80}
            >
              Zoophysiology
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width90}
            >
              Python, R, MatLab
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              Research
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              Laboratory work
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width80}
            >
              Academic writing
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width70}
            >
              Experimental design
            </div>
          </div>
          <div className='progress' style={progHeight}>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={width50}
            >
              Dissemination
            </div>
          </div> */
