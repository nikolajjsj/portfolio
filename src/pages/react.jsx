import React, { Component } from "react";

const style = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

export default class Reacts extends Component {
  render() {
    return (
      <div className="text-center p-5" style={{ backgroundColor: "#F0F0F0" }}>
        <h1 className="display-4">REACT PROJECTS</h1>

        <div style={style} className="p-5">
          <a
            className="btn btn-dark"
            href="http://nikolajjsj.github.io/Sorting-Visualization/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sorting Visualizer
          </a>
          <a
            className="btn btn-dark"
            href="https://nikolajjsj.github.io/TicTacToe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TicTacToe
          </a>
        </div>
      </div>
    );
  }
}
