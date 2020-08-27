import React, { Component } from 'react';

const cardStyle = {
    width: '18rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}

const imgStyle = {
    height: '45px',
    width: '45px',
}

export default class ExperienceCard extends Component {
    render() {
        return (
            <div className="card" style={cardStyle}>
                <img className="card-img-top" style={imgStyle} src={this.props.image} alt="Company logo" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href={this.props.aLink} className="btn btn-dark">Company page</a>
                </div>
            </div>
        )
    }
}