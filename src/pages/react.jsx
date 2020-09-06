import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
};

export default class Reacts extends Component {
  render() {
    return (
      <div className="text-center p-5" style={{ backgroundColor: "#F0F0F0" }}>
        <h1 className="display-4">REACT PROJECTS</h1>

        <div style={style} className="p-5">
          <Link className="btn btn-dark" to="/sorting">
            Sorting visualizer
          </Link>
        </div>
      </div>
    );
  }
}
