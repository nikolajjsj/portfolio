import React, { Component } from 'react'
import Card from '../card'
import '../card.css'
import './projects.css'
import '../button.css'

// Flutter projects
import RedditSrc from '../../assets/flutter/reddit0.png'
import SygeplejSrc from '../../assets/flutter/sygeplej0.png'
import PhysiologySrc from '../../assets/flutter/physiology0.png'
import PexelsSrc from '../../assets/flutter/pexels0.png'

//React projects
import TictactoeSrc from '../../assets/react/tictactoe.png'
import PathfinderSrc from '../../assets/react/pathfinder.png'
import SortingSrc from '../../assets/react/sorting.png'

// articles
import bachelorArticle from '../../assets/articles/bachelor.png'

export default class Projects extends Component {
  render() {
    return (
      <div className='cards' ref={this.props.scrollRef}>
        <h1 id="projects-title">PROJECTS</h1>
        <div className='google-ios-button-row'>
          <a
            href='https://play.google.com/store/apps/developer?id=Nikolaj+Jensen'
            className='my-button'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            aria-pressed='true'
          >
            Google Play
          </a>
          <a
            href='https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697'
            className='my-button'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
            aria-pressed='true'
          >
            Apple Appstore
          </a>
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <Card
                src={RedditSrc}
                label='FLUTTER APP'
                text='Speed for Reddit'
              />
              <Card
                src={SygeplejSrc}
                label='FLUTTER APP'
                text='Sygeplejersken'
              />
              <Card
                src={PexelsSrc}
                label='FLUTTER APP'
                text='Pexels Wallpapers'
              />
              <Card src={PhysiologySrc} label='FLUTTER APP' text='Physiology' />
            </ul>
            <ul className='cards__items'></ul>
            <ul className='cards__items'>
              <Card
                href='http://nikolajjsj.github.io/Sorting-Visualization/'
                src={SortingSrc}
                label='REACT - Web App'
                text='Sorting Visualizer'
              />
              <Card
                src={PathfinderSrc}
                label='REACT - Web App'
                text='Pathfinding Visualizer'
                href='http://nikolajjsj.github.io/Pathfinder/'
              />
              <Card
                href='https://nikolajjsj.github.io/TicTacToe/'
                src={TictactoeSrc}
                label='REACT - Web App'
                text='TicTacToe with AI'
              />
            </ul>
            <ul className='cards__items'>
              <Card
                href='https://jeb.biologists.org/content/221/12/jeb179598'
                src={bachelorArticle}
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