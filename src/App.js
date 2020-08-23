import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Frontpage from './pages/frontpage';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Articles from './pages/articles';
import Contact from './pages/contact';
import './App.css';
import About from './pages/about';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef() 
  }

  render() {
    return (
      <Router>
        <Route path="/contact" exact component={Contact} />
        <div className="App">
          <Header />
          <Frontpage scrollFunction={this.scrollToMyRef} />
          <About />
          <Projects reference={this.myRef} />
          <Articles />
          <Experience />
          <Contact />
        </div>
      </Router>
    );
  }

  scrollToMyRef = () => window.scrollTo({ behavior: 'smooth', top: this.myRef.current.offsetTop }) 
}