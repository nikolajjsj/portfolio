import React, { Component } from 'react';
import ProjectCard from '../components/project-cards';
import Reddit from '../assets/reddit0.png';
import Sygeplej from '../assets/sygeplej0.png';
import Physiology from '../assets/physiology0.png';
import Pexels from '../assets/pexels0.png';

const googlePlay = "https://play.google.com/store/apps/developer?id=Nikolaj+Jensen";
const appleStore = "https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697";

export default class Projects extends Component {
    render() {
        return (
            <div ref={this.props.reference} className="container-fluid text-center p-5">
                <h1 className="display-4 p-5">PROJECTS</h1>

                <div className="row justify-content-md-center pb-5">
                    <div className="col-sm">
                        <a
                            href={googlePlay}
                            className="btn btn-dark btn-lg active m-2"
                            role="button"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-pressed="true">
                            Google Play
                        </a>
                    </div>
                    <div className="col-sm">
                        <a
                            href={appleStore}
                            className="btn btn-dark btn-lg active m-2"
                            role="button"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-pressed="true">
                            Apple Appstore
                        </a>
                    </div>
                </div>


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
            </div>
        )
    }
}