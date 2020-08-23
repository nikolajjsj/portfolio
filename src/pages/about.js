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
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}>UI Design</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h2><b>Who am i?</b></h2>
                        <img className="img-fluid rounded" src={require("../assets/headshot.jpg")} alt="Headshot"></img>
                        <p className="text-center">A passionated developer that aims to make beautiful yet usefull products.</p>
                    </div>
                    <div className="col-sm">
                        <h2><b>Biologist</b></h2>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width90}>Research</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}>Laboratory work</div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}></div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width70}></div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width60}></div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width50}></div>
                        </div>
                        <div class="progress" style={progHeight}>
                            <div class="progress-bar bg-dark" role="progressbar" style={width50}></div>
                        </div>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div>
    );
}