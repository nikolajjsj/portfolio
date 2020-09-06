import React, { Component } from "react";

const style = {
  padding: "45px",
};

export default class Header extends Component {
  render() {
    return (
      <nav className="nav nav-pills justify-content-end" style={style}></nav>
    );
  }
}
