import React from 'react';

const progHeight = { height: "30px", marginBottom: "8px" }
const width90 = { width: "90%" }
const width80 = { width: "80%" }
const width70 = { width: "70%" }
const width60 = { width: "60%" }
const width50 = { width: "50%" }

const style = { backgroundColor: "#F0F0F0" }

export default function About() {
    return (
        <div className="pb-5 pt-5" style={style}>
            <h1 className="display-4 text-center p-5">ABOUT</h1>
            <div className="container-fluid">
                <div className="row text-start">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <h2><b>Developer</b></h2>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width90}>Flutter & Dart</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>Python</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>HTML</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}>CSS</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>JavaScript</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}>React</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width80}>Github & Git</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}>UI Design</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h2><b>Who am i?</b></h2>
                        <img className="img-fluid rounded" src={require("../assets/headshot.jpg")} alt="Headshot"></img>
                    </div>
                    <div className="col-sm">
                        <h2><b>Biologist</b></h2>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width80}>Zoophysiology</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width90}>Python, R, MatLab</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>Research</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>Laboratory work</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width80}>Academic writing</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>Experimental design</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width50}>Dissemination</div>
                        </div>
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <p className="text-center">Innovative mind with experience working as a developer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions.</p>
                    </div>
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <p className="text-center">Specialized biologist, with experience in dataanalysis in both Python, MatLab, and R. Also capable of doing experimental designs and performing said experiment, with insight into needed changes and improvements.</p>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div>
    );
}