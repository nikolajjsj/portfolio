import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <div className="p-5 text-center">
      <div style={style} className="pb-5">
        <a
          className="col-md-auto"
          href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://github.com/nikolajjsj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://twitter.com/nikolaj_jsj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://www.instagram.com/nikolajjsj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
      <div className="text-center">
        <h4 className="text">Nikolaj Johannes Skole Jensen</h4>
        <h6>
          <b className="text-danger">Personal</b>
        </h6>
        <h6 className="text">nikolajjsj@gmail.com</h6>
        <h6>
          <b className="text-danger">Developer</b>
        </h6>
        <h6 className="text">nikolaj.app.dev@gmail.com</h6>
      </div>
    </div>
  );
}
