import React from "react";

const progHeight = { height: "30px", marginBottom: "8px" };
const width90 = { width: "90%" };
const width80 = { width: "80%" };
const width70 = { width: "70%" };
const width60 = { width: "60%" };
const width50 = { width: "50%" };

const style = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
};
const progressStyle = {
  width: "25rem",
  margin: "20px",
};

export default function About() {
  return (
    <div className="pb-5 pt-5" style={{ backgroundColor: "#F0F0F0" }}>
      <h1 className="display-4 text-center p-5">ABOUT</h1>
      <div className="container-fluid text-center">
        <img
          className="img-fluid rounded-circle text-center"
          style={{ height: "18rem", width: "18rem" }}
          src={require("../assets/headshot.jpg")}
          alt="Headshot"
        ></img>
        <div style={style}>
          <div style={progressStyle}>
            <h2>
              <b>Developer</b>
            </h2>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width90}
              >
                Flutter & Dart
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                Python
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                HTML
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width60}
              >
                CSS
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                JavaScript
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width60}
              >
                React
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width60}
              >
                UI Design
              </div>
            </div>
            <p className="text-justify">
              Innovative mind with experience working as a developer. Capable of
              working with a variety of technology and software solutions, and
              managing databases. Valuable team member who has experience
              diagnosing problems and developing solutions.
            </p>
          </div>

          <div style={progressStyle}>
            <h2>
              <b>Biologist</b>
            </h2>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width80}
              >
                Zoophysiology
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width90}
              >
                Python, R, MatLab
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                Research
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                Laboratory work
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width80}
              >
                Academic writing
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width70}
              >
                Experimental design
              </div>
            </div>
            <div className="progress" style={progHeight}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={width50}
              >
                Dissemination
              </div>
            </div>
            <p className="text-justify">
              Specialized biologist, with experience in dataanalysis in both
              Python, MatLab, and R. Also capable of doing experimental designs
              and performing said experiment, with insight into needed changes
              and improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
