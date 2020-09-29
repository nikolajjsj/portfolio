import React, { Component } from 'react'
import Card from '../card'
import '../card.css'
import './projects.css'
import '../button.css'

// Flutter projects
import REDDIT from '../../assets/flutter/reddit.png'
import SYGEPLEJE from '../../assets/flutter/sygepleje.png'
import PHYSIOLOGY from '../../assets/flutter/physiology.png'
import PEXELS from '../../assets/flutter/pexels.png'
import OSPREY from '../../assets/flutter/osprey.png'
import WALLS from '../../assets/flutter/walls.png'

//React projects
import TICTACTOE from '../../assets/react/tictactoe.png'
import PATHFINDER from '../../assets/react/pathfinder.png'
import SORTING from '../../assets/react/sorting.png'

// articles
import BACHELOR from '../../assets/articles/bachelor.png'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects' ref={this.props.scrollRef}>
        <h1 id='projects-title'>PROJECTS</h1>
        <div className='google-ios-button-row'>
          <a
            href='https://play.google.com/store/apps/developer?id=Nikolaj+Jensen'
            className='my-button'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            aria-pressed='true'>
            Google Play
          </a>
          <a
            href='https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697'
            className='my-button'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            aria-pressed='true'>
            Apple Store
          </a>
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <Card
                src={REDDIT}
                label='FLUTTER APP'
                text='Speed (Reddit Client)'
                version='beta'
              />
              <Card src={SYGEPLEJE} label='FLUTTER APP' text='Sygeplejersken' />
            </ul>
            <ul className='cards__items'>
              <Card
                src={OSPREY}
                label='FLUTTER APP'
                text='Osprey (Twitter Client)'
                version='Under development'
              />
              <Card src={WALLS} label='FLUTTER APP' text='Walls' />
            </ul>
            <ul className='cards__items'>
              <Card src={PHYSIOLOGY} label='FLUTTER APP' text='Physiology' />
              <Card src={PEXELS} label='FLUTTER APP' text='Pexels Wallpapers' />
            </ul>
            <ul className='cards__items'>
              <Card
                href='http://nikolajjsj.github.io/Sorting-Visualization/'
                src={SORTING}
                label='REACT - Web App'
                text='Sorting Visualizer'
              />
              <Card
                src={PATHFINDER}
                label='REACT - Web App'
                text='Pathfinding Visualizer'
                href='http://nikolajjsj.github.io/Pathfinder/'
                version='alpha'
              />
              <Card
                href='https://nikolajjsj.github.io/TicTacToe/'
                src={TICTACTOE}
                label='REACT - Web App'
                text='TicTacToe with AI'
              />
            </ul>
            <ul className='cards__items'>
              <Card
                href='https://jeb.biologists.org/content/221/12/jeb179598'
                src={BACHELOR}
                label='PEER-REVIEWED - ARTICLE'
                text='On insect cold tolerance'
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
