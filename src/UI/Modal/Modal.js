import React from "react";
import style from "./Modal.module.css";

const Modal = ({ closeModal, children }) => {
  return (
    <div className={style.modalContainer}>
      <div className={style.container}>
        <button onClick={() => closeModal(false)}>X</button>
        <div className={style.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
