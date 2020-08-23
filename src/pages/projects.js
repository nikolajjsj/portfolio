import React from 'react';
import ProjectCard from '../components/project-cards';
import Reddit from '../assets/reddit0.png';
import Sygeplej from '../assets/sygeplej0.png';
import Physiology from '../assets/physiology0.png';
import Pexels from '../assets/pexels0.png';

export default function Projects() {
    return (
        <section id="projects" className="container-fluid text-center p-5">
            <h1 className="display-4 p-5">PROJECTS</h1>
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <ProjectCard images={Reddit} title="Speed for Reddit" />
                </div>
                <div className="col-3">
                    <ProjectCard images={Pexels} title="Pexels wallpapers" />
                </div>
                <div className="col-3">
                    <ProjectCard images={Sygeplej} title="Sygeplejersken" />
                </div>
                <div className="col-3">
                    <ProjectCard images={Physiology} title="Physiology Calculator" />
                </div>
            </div>
        </section>
    )
}