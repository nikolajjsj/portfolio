import React, { Component } from 'react'
import Button from '../button'
import './frontpage.css'

export default class Frontpage extends Component {
  render() {
    return (
      <div className='frontpage'>
        <h1 className='frontpage-title'>
          Hey, I'm <strong className='text-danger'>Nikolaj Jensen</strong>.
        </h1>
        <p className='frontpage-undertitle'>
          Specialized <strong className='text-danger'>biologist</strong> and
          experienced <strong className='text-danger'>developer</strong>
        </p>
        <Button
          type='button'
          title='See my work'
          onClick={this.props.scrollFunction}
        />
      </div>
    )
  }
}
