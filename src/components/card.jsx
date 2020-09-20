import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Programming projects"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}
