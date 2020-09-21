import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Frontpage from "./components/pages/frontpage";
import Projects from "./components/pages/projects";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/navbar";

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

export default function App() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <>
                <Frontpage scrollFunction={executeScroll} />
                <About />
                <Projects scrollRef={myRef} />
              </>
            </Route>
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
