import React, { Component } from "react";

export default class Frontpage extends Component {

    render() {
        return (
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1 className="display-3 text-center">Hey, I'm <strong className="text-danger">Nikolaj Jensen</strong>.</h1>
                        <p className="h3 text-center">Specialized <strong className="text-danger">biologist</strong> and experienced <strong className="text-danger">developer</strong></p>
                        <p className="h3 text-center">I design and code awesome stuff, and I love what I do!</p>
                        <p className="p-5 text-center">
                            <button className="btn btn-outline-dark btn-lg" type="button" onClick={this.props.scrollFunction}>See my work</button>
                        </p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}