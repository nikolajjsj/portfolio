import React, { Component } from 'react';

const style = {
    width: '18rem',
    margin: '45px',
}

export default class ProjectCard extends Component {
    render() {
        return (
            <div class="card" style={style}>
                <a href={this.props.aLink}><img class="card-img-top" src={this.props.images} alt="project" /></a>
                <div class="card-body">
                    <p class="card-text">{this.props.title}</p>
                </div>
            </div>
        )
    }
}