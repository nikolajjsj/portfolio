import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-link-icons'>
        <a
          className='col-md-auto'
          href='https://www.linkedin.com/in/nikolaj-jensen-73810b137/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='3x' />
        </a>
        <a
          className='col-md-auto'
          href='https://github.com/nikolajjsj'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </a>
        <a
          className='col-md-auto'
          href='https://twitter.com/nikolaj_jsj'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} size='3x' />
        </a>
        <a
          className='col-md-auto'
          href='https://www.instagram.com/nikolajjsj/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} size='3x' />
        </a>
      </div>
      <div className='contact-information'>
        <h1>Nikolaj Johannes Skole Jensen</h1>
        <h2>
          <b>Personal</b>
        </h2>
        <h3>nikolajjsj@gmail.com</h3>
        <h2>
          <b>Developer</b>
        </h2>
        <h3 className='text'>nikolaj.app.dev@gmail.com</h3>
      </div>
    </div>
  )
}
