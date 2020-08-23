import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Frontpage from './pages/frontpage';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Articles from './pages/articles';
import Contact from './pages/contact';
import './App.css';
import About from './pages/about';


export default function App() {
  return (
    <Router>
      <Route path="/contact" exact component={Contact} />
      <div className="App">
        <Header />
        <Frontpage />
        <About />
        <Projects />
        <Articles />
        <Experience />
        <Contact />
      </div>
    </Router>
  );
}