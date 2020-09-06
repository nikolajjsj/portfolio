import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <div className="bg-dark p-5 text-center">
      <div style={style}>
        <a
          className="col-md-auto"
          href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://github.com/nikolajjsj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://twitter.com/nikolaj_jsj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
        </a>
        <a
          className="col-md-auto"
          href="https://www.instagram.com/nikolajjsj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </a>
      </div>
      <div className="text-center">
        <h4 className="text-light">Nikolaj Johannes Skole Jensen</h4>
        <h6>
          <b className="text-danger">Personal</b>
        </h6>
        <h6 className="text-light">nikolajjsj@gmail.com</h6>
        <h6>
          <b className="text-danger">Developer</b>
        </h6>
        <h6 className="text-light">nikolaj.app.dev@gmail.com</h6>
      </div>
    </div>
  );
}
