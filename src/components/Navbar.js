import style from "./Navbar.module.css";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";

function Navbar() {
  let [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className={style.nav}>
        <h1>LOGO</h1>

        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li onClick={() => setShowModal(true)}>Login</li>
        </ul>
      </nav>
      {showModal && (
        <Modal closeModal={setShowModal}>
          <h1 className={style.title}>Hello World</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab
            ad veniam at distinctio praesentium, officia ducimus quae,
            exercitationem dolore nemo veritatis, voluptatum harum dicta
            delectus vitae magni et eligendi!
          </p>
          <button className={style.help}>Help me</button>
        </Modal>
      )}
    </>
  );
}

export default Navbar;
