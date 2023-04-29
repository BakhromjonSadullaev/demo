import React, { useState } from "react";
import style from "./Card.module.css";
import Modal from "../UI/Modal/Modal";

const Card = ({ img, title, desc, index }) => {
  let [showModal, setShowModal] = useState(false);
  return (
    <div className={style.container}>
      <article key={index} className={style.card}>
        <img src={img} alt="" />

        <h1>{title}</h1>
        <p>{desc}</p>
        <button onClick={() => setShowModal(true)}>See more</button>
      </article>
      {showModal && <Modal closeModal={setShowModal}></Modal>}
    </div>
  );
};

export default Card;
