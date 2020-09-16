import React, { Component } from "react";
import Frontpage from "./pages/frontpage";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Articles from "./pages/articles";
import "./App.css";
import About from "./pages/about";
import Reacts from "./pages/react";
import Header from "./components/header";
import Contact from "./pages/contact";

export default class App extends Component {
  render() {
    return (
      <MainApp></MainApp>
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
