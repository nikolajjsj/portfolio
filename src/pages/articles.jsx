import React from "react";
import ProjectCard from "../components/project-cards";
import bachelorArticle from "../assets/bachelor.png";

const articleLink = "https://jeb.biologists.org/content/221/12/jeb179598";

const style = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
};

export default function Articles() {
  return (
    <div className="text-center p-5">
      <h1 className="display-4">ARTICLES</h1>
      <div style={style}>
        <ProjectCard
          aLink={articleLink}
          images={[bachelorArticle]}
          title="Published article - Jounal of Experimental Biology"
        />
      </div>
    </div>
  );
}
