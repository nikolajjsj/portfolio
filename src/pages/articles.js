import React from 'react';
import ProjectCard from '../components/project-cards';
import bachelorArticle from '../assets/bachelor.png';

const style = { backgroundColor: "#F0F0F0" }

export default function Articles() {
    return (
        <div className="container-fluid text-center p-5" style={style}>
            <h1 className="display-4">ARTICLES</h1>
            <div className="row justify-content-md-center">
                <div className="col-3"></div>
                <div className="col-6">
                    <ProjectCard images={[bachelorArticle]} title="Published article of my bachelor data" />
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}