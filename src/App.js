import React, { Component } from "react";
import Frontpage from "./pages/frontpage";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import "./App.css";
import About from "./pages/about";
import ReactProjects from "./pages/react";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <>
                  <Frontpage scrollFunction={this.scrollToMyRef} />
                  <About />
                  <Projects reference={this.myRef} />
                  <ReactProjects />
                  <Articles />
                </>
              </Route>
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
  scrollToMyRef = () =>
    window.scrollTo({ behavior: "smooth", top: this.myRef.current.offsetTop });
}
