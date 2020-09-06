import React, { Component } from 'react';


const style = {
    backgroundColor: "#282c34",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "12px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
}

const phantom = {
    display: 'block',
    height: '60px',
    width: '100%',
  }

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div style={phantom}></div>
                <div style={style}>
                    <code>Built by: Nikolaj Johannes Skole Jensen</code>
                </div>
            </div>
        )
    }
}