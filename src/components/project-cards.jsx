import React, { Component } from 'react';

const style = {
    width: '13rem',
    margin: '25px',
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