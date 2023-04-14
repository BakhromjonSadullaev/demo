import React from "react";
import style from "./Card.module.css";

const Card = ({ img, title, desc, index }) => {
  return (
    <article key={index} className={style.card}>
      <img src={img} alt="" />

      <h1>{title}</h1>
      <p>{desc}</p>
      <button>See more</button>
    </article>
  );
};

export default Card;
