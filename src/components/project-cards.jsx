import React, { Component } from "react";

const style = {
  width: "13rem",
  margin: "25px",
};

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="card" style={style}>
        <a href={this.props.aLink}>
          <img className="card-img-top" src={this.props.images} alt="project" />
        </a>
        <div className="card-body">
          <p className="card-text">{this.props.title}</p>
        </div>
      </div>
    );
  }
}
