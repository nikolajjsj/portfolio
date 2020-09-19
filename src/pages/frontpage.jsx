import React, { Component } from "react";

const style = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default class Frontpage extends Component {
  render() {
    return (
      <div className="p-5" style={style}>
        <div>
          <h1 className="display-4 text-center">
            Hey, I'm <strong className="text-danger">Nikolaj Jensen</strong>.
          </h1>
          <p className="h3 text-center">
            Specialized <strong className="text-danger">biologist</strong> and
            experienced <strong className="text-danger">developer</strong>
          </p>
          <p className="p-5 text-center">
            <button
              className="btn btn-outline-dark btn-lg"
              type="button"
              onClick={this.props.scrollFunction}
            >
              See my work
            </button>
          </p>
        </div>
      </div>
    );
  }
}
