import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Reacts extends Component {
  render() {
    return (
      <div
        ref={this.props.reference}
        className="container-fluid text-center p-5"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <h1 className="display-4 p-5">REACT PROJECTS</h1>

        <Link className="btn btn-dark" to="/sorting">
          Sorting visualizer
        </Link>
      </div>
    );
  }
}
