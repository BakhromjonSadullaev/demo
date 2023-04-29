import React, { useEffect, useState } from "react";
import style from "./CardContainer.module.css";
import Card from "./Card";
import Modal from "../UI/Modal/Modal";

const CardContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      title: "Title 1",
      img: "https://images.unsplash.com/photo-1680870220154-f0de1de0ab4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 2",
      img: "https://images.unsplash.com/photo-1680999708478-6f68efeef22b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 3",
      img: "https://plus.unsplash.com/premium_photo-1680512467504-39224db53858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 4",
      img: "https://images.unsplash.com/photo-1680925708354-81e3e81170fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 5",
      img: "https://images.unsplash.com/photo-1680999708478-6f68efeef22b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 6",
      img: "https://images.unsplash.com/photo-1680870220154-f0de1de0ab4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 7",
      img: "https://plus.unsplash.com/premium_photo-1680512467504-39224db53858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
    {
      title: "Title 8",
      img: "https://images.unsplash.com/photo-1680925708354-81e3e81170fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et
        autem? Ex esse suscipit doloremque ipsam tempore facilis cum sequi,
        incidunt provident quae corporis nisi atque sint saepe fugit itaque.`,
    },
  ];

  return (
    <div className={style.cardContainer}>
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} desc={item.desc} />
      ))}
      {showModal && <Modal closeModal={setShowModal}></Modal>}
    </div>
  );
};

export default CardContainer;
