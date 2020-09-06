import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Frontpage from "./pages/frontpage";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Articles from "./pages/articles";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import "./App.css";
import About from "./pages/about";
import Reacts from "./pages/react";
import Header from "./components/header";
import Contact from "./pages/contact";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={MainApp} />
        <Route path="/sorting" exact component={SortingVisualizer} />
      </Router>
    );
  }
}

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Frontpage scrollFunction={this.scrollToMyRef} />
        <About />
        <Projects reference={this.myRef} />
        <Reacts />
        <Articles />
        <Experience />
        <Contact />
      </div>
    );
  }
  scrollToMyRef = () =>
    window.scrollTo({ behavior: "smooth", top: this.myRef.current.offsetTop });
}
